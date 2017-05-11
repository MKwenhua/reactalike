module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var htmlAttributes = {
   'accept': true,
   'accept-charset': true,
   'accesskey': true,
   'action': true,
   'align': true,
   'alt': true,
   'async': true,
   'autocomplete': true,
   'autofocus': true,
   'autoplay': true,
   'autosave': true,
   'bgcolor': true,
   'border': true,
   'buffered': true,
   'challenge': true,
   'charset': true,
   'checked': true,
   'cite': true,
   'class': true,
   'code': true,
   'codebase': true,
   'color': true,
   'cols': true,
   'colspan': true,
   'content': true,
   'contenteditable': true,
   'contentEditable': true,
   'contextmenu': true,
   'controls': true,
   'coords': true,
   'crossorigin': true,
   'data': true,
   'data-*': true,
   'datetime': true,
   'default': true,
   'defer': true,
   'dir': true,
   'dirname': true,
   'disabled': true,
   'download': true,
   'draggable': true,
   'dropzone': true,
   'enctype': true,
   'for': true,
   'form': true,
   'formaction': true,
   'headers': true,
   'height': true,
   'hidden': true,
   'high': true,
   'href': true,
   'hreflang': true,
   'http-equiv': true,
   'icon': true,
   'id': true,
   'integrity': true,
   'ismap': true,
   'itemprop': true,
   'keytype': true,
   'kind': true,
   'label': true,
   'lang': true,
   'language': true,
   'list': true,
   'loop': true,
   'low': true,
   'manifest': true,
   'max': true,
   'maxlength': true,
   'minlength': true,
   'media': true,
   'method': true,
   'min': true,
   'multiple': true,
   'muted': true,
   'name': true,
   'novalidate': true,
   'open': true,
   'optimum': true,
   'pattern': true,
   'ping': true,
   'placeholder': true,
   'poster': true,
   'preload': true,
   'radiogroup': true,
   'readonly': true,
   'rel': true,
   'required': true,
   'reversed': true,
   'rows': true,
   'rowspan': true,
   'sandbox': true,
   'scope': true,
   'scoped': true,
   'seamless': true,
   'selected': true,
   'shape': true,
   'size': true,
   'sizes': true,
   'slot': true,
   'span': true,
   'spellcheck': true,
   'src': true,
   'srcdoc': true,
   'srclang': true,
   'srcset': true,
   'start': true,
   'step': true,
   'style': true,
   'summary': true,
   'tabindex': true,
   'target': true,
   'title': true,
   'type': true,
   'usemap': true,
   'value': true,
   'width': true,
   'wrap': true
};

var CheckHTMLattribute = function CheckHTMLattribute(attr) {
   var dataAttr = new RegExp(/^data-/i);

   return htmlAttributes[attr] || dataAttr.test(attr);
};

exports.default = CheckHTMLattribute;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Provider(component, store, context) {

  var initialProps = Object.assign({
    dispatch: store.dispatch,
    store: store.getState()
  });
  var compInstance = component.__proto__.name === 'Container' ? new component(initialProps) : Object.assign(component, { props: initialProps });

  store.subscribe(function () {
    compInstance.props = Object.assign(compInstance.props, {
      dispatch: store.dispatch,
      store: store.getState()
    });
    context.objectChange(compInstance.render());
  });

  return compInstance;
}

exports.default = Provider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _html_attributes = __webpack_require__(0);

var _html_attributes2 = _interopRequireDefault(_html_attributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDiff = function setDiff(self, createElem) {

   function removeProp(element, attr) {
      if (!self.events[attr] && (0, _html_attributes2.default)(attr)) {
         element.removeAttribute(attr);
      }
   };

   function changeProp(element, attr, val) {
      if (!self.events[attr] && (0, _html_attributes2.default)(attr)) {
         element.setAttribute(attr, val);
      }
   };

   function updateProp(element, name, newVal, oldVal) {
      if (!newVal) {
         removeProp(element, name);
         return;
      } else if (!oldVal || newVal !== oldVal) {
         changeProp(element, name, newVal);
      }
   };

   function updateProps(element, newProps) {
      var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var props = Object.assign({}, oldProps, newProps);
      for (var name in props) {
         updateProp(element, name, newProps[name], oldProps[name]);
      };
   };

   function changed(node1, node2) {
      return (typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2)) || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type;
   };

   function checkForEvents(node) {
      if (node.props.ex_attachedFuncs) {
         for (var eventName in node.props.ex_attachedFuncs) {
            node.domElement.removeEventListener(eventName, node.props.ex_attachedFuncs[eventName]);
         }
      }
   };

   function updateElement(parent, newNode, oldNode) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (typeof newNode === 'string' || typeof newNode === 'number' || typeof oldNode === 'string' || typeof oldNode === 'number') {
         var vdomid = parent.props.trace + '.' + index;
         if (changed(newNode, oldNode)) {
            parent.domElement.replaceChild(createElem(newNode, vdomid, parent.trace), parent.domElement.childNodes[index]);
         }

         return;
      };

      if (!oldNode) {
         var _vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, _vdomid, parent.props.trace);
         parent.domElement.appendChild(newNode.domElement);
         return;
      };
      if (!newNode) {
         checkForEvents(oldNode);
         parent.domElement.removeChild(oldNode.domElement);
         return;
      };
      if (changed(newNode, oldNode)) {

         var _vdomid2 = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, _vdomid2, newNode.props.parent);
         var repl = typeof oldNode === 'string' ? parent.domElement.children[index] : oldNode.domElement;
         parent.domElement.replaceChild(newNode.domElement, repl);

         return;
      };
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);

         updateProps(newNode.domElement, newNode.props, oldNode.props);
         if (oldNode.props.ex_attachedFuncs) {
            self.replaceListenerFunctions(oldNode.props.ex_attachedFuncs, newNode);
         }

         var newLength = newNode.nested ? newNode.nested.length : 0;

         if (typeof oldNode === 'string' || typeof oldNode === 'number') {
            for (var i = 0; i < newLength; i++) {
               updateElement(newNode, newNode.nested[i], null, i);
            }
            return updateElement;
         };
         oldNode.nested = oldNode.nested ? oldNode.nested : [];
         var oldLength = oldNode.nested.length;

         for (var _i = 0; _i < newLength || _i < oldLength; _i++) {
            updateElement(oldNode, newNode.nested[_i], oldNode.nested[_i], _i);
         }
      }
   };
   return updateElement;
};

exports.default = setDiff;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _eventlist = __webpack_require__(8);

var _eventlist2 = _interopRequireDefault(_eventlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractEventName(name) {
   return name.slice(2).toLowerCase();
}

var videoEvents = {
   onLoadedData: {},
   onLoadedMetadata: {},
   onLoadStart: {},
   onPause: {},
   onPlay: {},
   onPlaying: {},
   onProgress: {},
   onRateChange: {},
   onSeeked: {},
   onSeeking: {},
   onWaiting: {},
   onLoad: {}
};

var formEvents = {
   onChange: {},
   onFocus: {},
   onBlur: {},
   onSelect: {},
   onSearch: {}
};

var events = _eventlist2.default.reduce(function (ob, itm) {
   ob[itm] = {
      registered: false,
      eventName: extractEventName(itm),
      eventNS: itm,
      mediaEvent: videoEvents[itm] !== undefined,
      formEvent: formEvents[itm] !== undefined
   };
   return ob;
}, {});

exports.default = events;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var formTags = {
   textarea: true,
   select: true,
   input: true,
   output: true,
   form: true
};

exports.default = formTags;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var isSVG = {
   circle: true,
   clipPath: true,
   defs: true,
   ellipse: true,
   g: true,
   line: true,
   linearGradient: true,
   mask: true,
   path: true,
   pattern: true,
   polygon: true,
   polyline: true,
   radialGradient: true,
   rect: true,
   stop: true,
   svg: true,
   text: true,
   tspan: true
};

exports.default = isSVG;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var flattenArray = function flattenArray(a, b) {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
};

function flattenIteration(arr, flatArr) {
   flatArr = flatArr || [];

   var length = arr.length | 0;

   for (var index = 0; index < length; index = index + 1) {
      var item = arr[index];
      item.constructor === Array ? flattenIteration(item, flatArr) : flatArr[flatArr.length] = item;
   }

   return flatArr;
}

var smoothNested = function smoothNested(nested) {
   if (!nested) return [];
   return nested.reduce(flattenArray, []).filter(function (ne) {
      return ne !== null && ne !== undefined;
   });
};

var flatten = function flatten(nested) {
   return nested.reduce(flattenArray, []);
};

var capitalize = function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.smoothNested = smoothNested;
exports.flatten = flatten;
exports.capitalize = capitalize;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.exNode = undefined;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _events = __webpack_require__(3);

var _events2 = _interopRequireDefault(_events);

var _diffing = __webpack_require__(2);

var _diffing2 = _interopRequireDefault(_diffing);

var _redux_wrapper = __webpack_require__(1);

var _redux_wrapper2 = _interopRequireDefault(_redux_wrapper);

var _svg_tags = __webpack_require__(5);

var _svg_tags2 = _interopRequireDefault(_svg_tags);

var _form_tags = __webpack_require__(4);

var _form_tags2 = _interopRequireDefault(_form_tags);

var _html_attributes = __webpack_require__(0);

var _html_attributes2 = _interopRequireDefault(_html_attributes);

var _handy_funcs = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
   return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
   return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function NodeMap() {
   var appTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

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
   this.events = _events2.default;
   this.setEvents = {};
   var NodeMapContext = this;

   this.createUdid = function () {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
   };

   this.randomFuncId = function () {
      return ("FUNC" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-10);
   };

   this.getElement = function (domElement) {
      if (domElement instanceof HTMLElement) {
         NodeMapContext.appRoot = domElement;
         NodeMapContext.appRootDom.domElement = domElement;
         return true;
      }
      var elem = document.querySelector(domElement);
      if (elem) {
         NodeMapContext.appRoot = elem;
         NodeMapContext.appRootDom.domElement = domElement;
         return true;
      }
      console.error("Element: " + domElement + " not found");
      return false;
   };
   this.setListener = function (listener, type) {
      NodeMapContext.appRoot.addEventListener(listener, function (e) {
         NodeMapContext.lookUpRegistry(e.target, type, e);
      });
   };
   this.replaceListenerFunctions = function (attachedFuncs, newNode) {
      newNode.props.ex_attachedFuncs = attachedFuncs;
      Object.keys(attachedFuncs).forEach(function (eventNAME) {
         if (newNode.props[eventNAME]) {
            NodeMapContext.events[eventNAME][attachedFuncs[eventNAME]] = function (e) {
               newNode.props[eventNAME](e, newNode.domElement, newNode);
            };
         } else {
            NodeMapContext.events[eventNAME][attachedFuncs[eventNAME]] = function (e) {};
         }
      });
   };
   this.setListenerEl = function (eventOb, cb, node) {
      var evnName = eventOb.eventNS;
      var eventFuncId = NodeMapContext.randomFuncId();
      node.props.ex_attachedFuncs = node.props.ex_attachedFuncs || {};
      node.props.ex_attachedFuncs[evnName] = eventFuncId;
      NodeMapContext.setEvents[node.props.ex_attachedFunc] = evnName;
      NodeMapContext.events[evnName][eventFuncId] = function (e) {
         node.props[evnName](e, node.domElement, node);
      };
      node.domElement.addEventListener(eventOb.eventName, function (e) {
         return NodeMapContext.events[evnName][eventFuncId](e);
      });
   };

   this.applyListener = function (listener, node) {
      var eventInfo = NodeMapContext.events[listener];
      var onSelf = eventInfo.formEvent || eventInfo.mediaEvent || _form_tags2.default[node.type];
      if (!eventInfo.registered && !onSelf) {
         eventInfo.registered = true;
         NodeMapContext.setListener(eventInfo.eventName, listener);
         return;
      }
      if (onSelf) {
         NodeMapContext.setListenerEl(eventInfo, listener, node);
      }
   };

   this.lookUpRegistry = function (target, eventName, e) {
      var tgTrace = target.getAttribute('trace');
      var traceArray = tgTrace.split('.');
      console.log('traceArray', traceArray);
      var vDom = NodeMapContext.domComponents;
      console.log('vDom', vDom);
      traceArray.shift();
      traceArray.map(function (itm, i) {
         if (!vDom.nested) {
            return false;
         }
         var nest = vDom.nested[itm];
         vDom = nest;
         return nest;
      }).reverse().forEach(function (itm, ii) {
         if (itm) {
            var hasAction = itm.props[eventName];
            if (hasAction) {
               hasAction(e);
            }
         }
      });
   };

   this.WhenMounted = function (afterMountCB) {
      NodeMapContext.mountedCallbacks.push(afterMountCB);
   };

   this.objectChange = function (newRender) {
      var newOb = NodeMapContext.rerender(newRender, 'Root');
      if (NodeMapContext.devEnv) {
         console.log('%c New Render:', 'color: lime; font-weight: bold;', newOb);
      }
      NodeMapContext.updateElement(NodeMapContext.domComponents, newOb);
      NodeMapContext.mountedCallbacks.forEach(function (cb) {
         cb();
      });
      NodeMapContext.mountedCallbacks = [];
   };

   this.mountAppToNode = function (AppContainer, containerElement) {
      var appContainer = AppContainer.__proto__.name === 'Container' ? new AppContainer() : AppContainer;
      NodeMapContext.rootComponent = appContainer;
      appContainer.state = appContainer.state ? appContainer.state : {};
      NodeMapContext.SetState = function () {
         return function (payload) {
            appContainer.state = Object.assign({}, appContainer.state, payload);
            NodeMapContext.objectChange(appContainer.render());
         };
      }();

      if (NodeMapContext.getElement(containerElement)) {
         var appRender = appContainer.render();
         appRender.domElement = NodeMapContext.appRoot;
         NodeMapContext.mountApp(appRender);
      };
   };

   this.ReduxConnect = function (component, store) {
      return new _redux_wrapper2.default(component, store, NodeMapContext);
   };

   this.viewObjects = function () {
      console.log('%c appRootDom:', 'color: crimson; font-weight: bold;', NodeMapContext.appRootDom);
      console.log('%c domBranches:', 'color: green; font-weight: bold;', NodeMapContext.domComponents);
      console.log('this.events', NodeMapContext.events);
   };

   this.mountApp = function (obj) {
      NodeMapContext.domComponents = obj;
      NodeMapContext.appRootDom.nested.push(NodeMapContext.domComponents);
      NodeMapContext.appRoot.appendChild(NodeMapContext.htmlBuild(obj, "Root"));
   };

   this.createElement = function createElement(name, attrs) {

      var element = document.createElement(String(name));
      if (!attrs) return element;

      for (var attr in attrs) {
         if (!NodeMapContext.events[attr] && (0, _html_attributes2.default)(attr)) {
            element.setAttribute(attr, attrs[attr]);
         }
      }
      return element;
   };

   this.createElementNS = function createElementNS(name, attrs) {
      var element = document.createElementNS('http://www.w3.org/2000/svg', name);

      if (!attrs) return element;

      for (var attr in attrs) {
         if (!NodeMapContext.events[attr] && !re.test(attr)) {
            element.setAttribute(attr, attrs[attr]);
         }
      }
      return element;
   };

   var createElem = function createElem(node, group, parent) {

      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {

         return document.createTextNode(node);
      }
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      });

      var el = _svg_tags2.default[node.type] ? NodeMapContext.createElementNS(node.type, node.props) : NodeMapContext.createElement(node.type, node.props);
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
      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return createElem(elm, elmId, group);
      }).forEach(function (childElement) {
         el.appendChild(childElement);
      });
      return el;
   };

   var reRenderElem = function reRenderElem(node, group, parent) {
      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {
         return node;
      }

      node.nested = node.nested ? node.nested : [];
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      });
      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return reRenderElem(elm, elmId, group);
      });
      return node;
   };

   this.htmlBuild = function (node, group) {
      return createElem(node, group, 'Root');
   };

   this.rerender = function (node, group) {
      return reRenderElem(node, group, 'Root');
   };

   this.diffElements = (0, _diffing2.default)(NodeMapContext, createElem);

   this.updateElement = function (oldNode, newNode) {
      NodeMapContext.diffElements(NodeMapContext.appRootDom, newNode, oldNode);
      NodeMapContext.domComponents = Object.assign({}, oldNode, newNode);
   };
};

NodeMap.prototype.component = function (obj) {
   if (!(obj instanceof Array) && obj instanceof Object) {
      if (!obj["componentName"] || !obj["componentRender"]) {
         console.error("Object must have a branchName and branchObject");
         return false;
      }

      obj.vdomId = '@' + obj.componentName;
      return function (opts) {

         return obj.componentRender(opts);
      };
   }
};

NodeMap.prototype.Component = function Component(props) {
   this.props = props || {};
};

NodeMap.prototype.Container = function Container(props) {
   this.props = props || {};
};

NodeMap.prototype.node = function (type) {
   for (var _len = arguments.length, nested = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      nested[_key - 2] = arguments[_key];
   }

   var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

   if (typeof type === "function") {
      if (type.__proto__.name === 'Component') {
         return new type(props).render();
      }
      return type(props);
   }

   return { type: type, props: props, nested: (0, _handy_funcs.smoothNested)(nested) };
};

function exNode(appName) {
   if (!appName) return new NodeMap('example');

   return new NodeMap(appName);
}

var EX = exNode('main');
exports.default = EX;
exports.exNode = exNode;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
var EventList = ["onCopy", "onCut", "onPaste", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onScroll", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"];

exports.default = EventList;

/***/ })
/******/ ]);