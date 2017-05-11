import events from "lib/events";
import setDiff from "./diffing.js";
import Provider from "addon/redux_wrapper"
import isSVG from 'utils/svg_tags'
import formTags from 'utils/form_tags'
import CheckHTMLattribute from 'utils/html_attributes'
import  {
  smoothNested,
  flatten,
  capitalize
} from 'shared/handy_funcs'

const _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?  (obj) => { return typeof obj; } : (obj) => { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function NodeMap(appTitle = 'default') {
   this.appTitle = appTitle;
   this.domComponents = {};
   this.rootComponent = null;
   this.devEnv = true;
   this.appRootDom = {
      domElement: null,
      nested: []
   };
   this.appRoot = null;
   this.mountedCallbacks = [];
   this.events = events;
   this.setEvents = {}
   const NodeMapContext = this;

   this.createUdid = () => {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
   };

   this.randomFuncId = () => {
      return ("FUNC" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-10)
   };

   this.getElement = (domElement) => {
      if (domElement instanceof HTMLElement) {
         NodeMapContext.appRoot = domElement;
         NodeMapContext.appRootDom.domElement = domElement;
         return true;
      }
      let elem = document.querySelector(domElement);
      if (elem) {
         NodeMapContext.appRoot = elem;
         NodeMapContext.appRootDom.domElement = domElement;
         return true;
      }
      console.error("Element: " + domElement + " not found");
      return false;
   };
   this.setListener = (listener, type) => {
      NodeMapContext.appRoot.addEventListener(listener, (e) => {
         NodeMapContext.lookUpRegistry(e.target, type, e);
      });

   };
   this.replaceListenerFunctions = (attachedFuncs, newNode) => {
      newNode.props.ex_attachedFuncs = attachedFuncs
      Object.keys(attachedFuncs).forEach((eventNAME) => {
         if (newNode.props[eventNAME]) {
            NodeMapContext.events[eventNAME][attachedFuncs[eventNAME]] = (e) => {
               newNode.props[eventNAME](e, newNode.domElement, newNode);
            };
         }else {
            NodeMapContext.events[eventNAME][attachedFuncs[eventNAME]] = (e) => {}
         }
      })
   }
   this.setListenerEl = (eventOb, cb, node) => {
      let evnName = eventOb.eventNS;
      let eventFuncId = NodeMapContext.randomFuncId()
      node.props.ex_attachedFuncs = node.props.ex_attachedFuncs || {};
      node.props.ex_attachedFuncs[evnName] = eventFuncId;
      NodeMapContext.setEvents[node.props.ex_attachedFunc] = evnName
      NodeMapContext.events[evnName][eventFuncId] = (e) => {
         node.props[evnName](e, node.domElement, node);
      };
      node.domElement.addEventListener(eventOb.eventName, (e) => NodeMapContext.events[evnName][eventFuncId](e));

   };

   this.applyListener = (listener, node) => {
      let eventInfo = NodeMapContext.events[listener];
      let onSelf = eventInfo.formEvent || eventInfo.mediaEvent || formTags[node.type];
      if (!eventInfo.registered && !onSelf) {
         eventInfo.registered = true;
         NodeMapContext.setListener(eventInfo.eventName, listener);
         return
      }
      if (onSelf ) {
         NodeMapContext.setListenerEl(eventInfo, listener, node)
      }
   };

   this.lookUpRegistry = (target, eventName, e) => {
      let tgTrace = target.getAttribute('trace');
      let traceArray = tgTrace.split('.');
      console.log('traceArray', traceArray);
      let vDom = NodeMapContext.domComponents;
      console.log('vDom', vDom);
      traceArray.shift()
      traceArray.map((itm, i) => {
         if (!vDom.nested) {
            return false;
         }
         let nest = vDom.nested[itm];
         vDom = nest;
         return nest;
      }).reverse().forEach((itm, ii) => {
         if (itm) {
            let hasAction = itm.props[eventName];
            if (hasAction) {
               hasAction(e)
            }
         }
      })

   };

   this.WhenMounted = (afterMountCB) => {
      NodeMapContext.mountedCallbacks.push(afterMountCB);
   };

   this.objectChange = (newRender) => {
      let newOb = NodeMapContext.rerender(newRender, 'Root');
      if (NodeMapContext.devEnv) {
        console.log('%c New Render:', 'color: lime; font-weight: bold;', newOb);
      }
      NodeMapContext.updateElement(NodeMapContext.domComponents, newOb)
      NodeMapContext.mountedCallbacks.forEach((cb) => {
         cb();
      });
      NodeMapContext.mountedCallbacks = [];
   };

   this.mountAppToNode = (AppContainer, containerElement) => {
      const appContainer = AppContainer.__proto__.name === 'Container' ? new AppContainer() : AppContainer
      NodeMapContext.rootComponent = appContainer;
      appContainer.state = appContainer.state ? appContainer.state : {};
      NodeMapContext.SetState = (() => {
        return (payload) => {
          appContainer.state = Object.assign({}, appContainer.state, payload);
          NodeMapContext.objectChange(appContainer.render());
        }
      })()

      if (NodeMapContext.getElement(containerElement)) {
         const appRender = appContainer.render()
         appRender.domElement = NodeMapContext.appRoot;
         NodeMapContext.mountApp(appRender);
      };
   };

   this.ReduxConnect = (component,store) => {
      return new Provider(component,store, NodeMapContext)
   }

   this.viewObjects = () => {
      console.log('%c appRootDom:', 'color: crimson; font-weight: bold;', NodeMapContext.appRootDom);
      console.log('%c domBranches:', 'color: green; font-weight: bold;', NodeMapContext.domComponents);
      console.log('this.events', NodeMapContext.events);
   };

   this.mountApp = (obj) => {
      NodeMapContext.domComponents = obj;
      NodeMapContext.appRootDom.nested.push(NodeMapContext.domComponents);
      NodeMapContext.appRoot.appendChild(NodeMapContext.htmlBuild(obj, "Root"));
   };

   this.createElement = function createElement(name, attrs) {

       const element = document.createElement(String(name))
      if (!attrs) return element;

      for (let attr in attrs) {
         if (!NodeMapContext.events[attr] && CheckHTMLattribute(attr)) {
            element.setAttribute(attr, attrs[attr]);
         }
      }
      return element;
   };

   this.createElementNS = function createElementNS(name, attrs) {
      var element = document.createElementNS('http://www.w3.org/2000/svg', name);

      if (!attrs) return element;

      for (let attr in attrs) {
         if (!NodeMapContext.events[attr] && !re.test(attr)) {
            element.setAttribute(attr, attrs[attr]);
         }
      }
      return element;
   };

   const createElem = (node, group, parent) => {

      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {

         return document.createTextNode(node);
      }
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      });

      const el = isSVG[node.type] ? NodeMapContext.createElementNS(node.type, node.props) : NodeMapContext.createElement(node.type, node.props);
      node.domElement = el;
      for (var prop in node.props) {
         if (NodeMapContext.events[prop]) {
            NodeMapContext.applyListener(prop, node);
         }
      };

      node.nested = node.nested ? node.nested : [];
      if (node.nested.length === 0) {
         return el;
      }
      node.nested.map((elm, ii) => {
         let elmId = group + '.' + ii;
         return createElem(elm, elmId, group);
      }).forEach((childElement) => {
        el.appendChild(childElement)
      });
      return el;

   };

   const reRenderElem = (node, group, parent) => {
      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {
         return node;
      }

      node.nested = node.nested ? node.nested : [];
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      })
      node.nested.map((elm, ii) => {
         let elmId = group + '.' + ii;
         return reRenderElem(elm, elmId, group);
      });
      return node;

   };

   this.htmlBuild = (node, group) => {
      return createElem(node, group, 'Root');
   };

   this.rerender = (node, group) => {
      return reRenderElem(node, group, 'Root');
   };

   this.diffElements = setDiff(NodeMapContext, createElem);

   this.updateElement = (oldNode, newNode) => {
      NodeMapContext.diffElements(NodeMapContext.appRootDom, newNode, oldNode);
      NodeMapContext.domComponents = Object.assign({}, oldNode, newNode);
   }

};

NodeMap.prototype.component = (obj) => {
   if (!(obj instanceof Array) && obj instanceof Object) {
      if (!obj["componentName"] || !obj["componentRender"]) {
         console.error("Object must have a branchName and branchObject");
         return false;
      }

      obj.vdomId = '@' + obj.componentName;
      return (opts) => {

         return obj.componentRender(opts);
      }
   }
};

NodeMap.prototype.Component = function Component(props) {
    this.props = props || {};
}

NodeMap.prototype.Container = function Container(props) {
    this.props = props || {};
}

NodeMap.prototype.node = (type, props = {}, ...nested) => {
   if (typeof type === "function") {
      if (type.__proto__.name === 'Component') {
        return new type(props).render()
      }
      return type(props);
   }

   return {type: type, props: props, nested: smoothNested(nested) };
};

function exNode(appName) {
   if (!appName)  return new NodeMap('example');

   return new NodeMap(appName);
}

const EX = exNode('main')
export default EX
export { exNode }
