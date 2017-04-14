"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var events = require("./events.js");
var setDiff = require("./diffing.js");
var handyHelpers = require("./lib/handy_funcs.js");
var smoothNested = handyHelpers.smoothArray();
var formTags = {
  textarea: true,
  select: true,
  input: true,
  output: true,
  form: true
};

function NodeMap() {
  var _this = this;

  var appTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

  this.appTitle = appTitle;
  this.domComponents = {};
  this.rootComponent = null;
  this.appRootDom = {
    domElement: null,
    nested: []
  };
  this.appRoot = null;
  this.mountedCallbacks = [];
  this.events = events;

  this.createUdid = function () {
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
  };

  this.randomFuncId = function () {
    return 'func' + Math.random().toString(36).substring(18);
  };

  this.getElement = function (domElement) {
    if (domElement instanceof HTMLElement) {
      _this.appRoot = domElement;
      _this.appRootDom.domElement = domElement;
      return true;
    }
    var elem = document.querySelector(domElement);
    if (elem) {
      _this.appRoot = elem;
      _this.appRootDom.domElement = domElement;
      return true;
    }
    console.error("Element: " + domElement + " not found");
    return false;
  };
  this.setListener = function (listener, type) {
    var self = _this;
    _this.appRoot.addEventListener(listener, function (e) {
      self.lookUpRegistry(e.target, type, e);
    });
  };

  this.setListenerEl = function (eventOb, cb, node) {
    var self = _this;
    var evnName = eventOb.eventNS;
    node.props.ex_eventFuncName = _this.randomFuncId();
    node.props.ex_attachedFunc = evnName;
    console.log('node', node);
    _this.events[evnName][node.props.ex_eventFuncName] = function (e) {
      node.props[evnName](e, node.domElement, node);
    };
    node.domElement.addEventListener(eventOb.eventName, _this.events[evnName][node.props.ex_eventFuncName]);
  };

  this.applyListener = function (listener, node) {
    var eventInfo = _this.events[listener];
    var onSelf = eventInfo.formEvent || eventInfo.mediaEvent || formTags[node.type];
    if (!eventInfo.registered && !onSelf) {
      eventInfo.registered = true;
      _this.setListener(eventInfo.eventName, listener);
      return;
    }
    if (onSelf && !node.props.ex_eventFuncName) {
      _this.setListenerEl(eventInfo, listener, node);
    }
  };

  this.lookUpRegistry = function (target, eventName, e) {
    var tgTrace = target.getAttribute('trace');
    var traceArray = tgTrace.split('.');
    console.log('traceArray', traceArray);
    var vDom = _this.domComponents;
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
    _this.mountedCallbacks.push(afterMountCB);
  };

  this.objectChange = function (newRender) {
    var newOb = _this.rerender(newRender, 'Root');
    console.log('newRender', newOb);
    _this.updateElement(_this.domComponents, newOb);
    _this.mountedCallbacks.forEach(function (cb) {
      cb();
    });
    _this.mountedCallbacks = [];
  };

  this.createComponent = function (obj, containerElement) {

    if (_this.getElement(containerElement)) {
      obj.domElement = _this.appRoot;
      _this.mountApp(obj);
    };
  };

  this.viewObjects = function () {
    console.log('appRootDom', _this.appRootDom);
    console.log('domBranches', _this.domComponents);
    console.log('this.events', _this.events);
  };

  this.mountApp = function (obj) {
    _this.domComponents = obj;
    _this.appRootDom.nested.push(_this.domComponents);
    _this.appRoot.appendChild(_this.htmlBuild(obj, "Root"));
  };

  var self = this;
  var re = new RegExp(/^ex_/i);
  var isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
  this.createElement = function createElement(name, attrs) {
    var element = document.createElement(String(name));
    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr)) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    return element;
  };

  this.createElementNS = function createElementNS(name, attrs) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', name);

    if (!attrs) return element;

    for (var attr in attrs) {
      if (!self.events[attr] && !re.test(attr)) {
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

    var el = isSVG.test(node.type) ? self.createElementNS(node.type, node.props) : self.createElement(node.type, node.props);
    node.domElement = el;
    for (var prop in node.props) {
      if (self.events[prop]) {
        self.applyListener(prop, node);
      }
    };

    node.nested = node.nested ? node.nested : [];
    if (node.nested.length === 0) {
      return el;
    }
    node.nested.map(function (elm, ii) {
      var elmId = group + '.' + ii;
      return createElem(elm, elmId, group);
    }).forEach(el.appendChild.bind(el));
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

  this.diffElements = setDiff(self, createElem);

  this.updateElement = function (oldNode, newNode) {
    _this.diffElements(_this.appRootDom, newNode, oldNode);
    _this.domComponents = Object.assign({}, oldNode, newNode);
  };

  this.SetState = function (data) {
    console.log('not yet set');
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

NodeMap.prototype.node = function (type) {
  for (var _len = arguments.length, nested = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    nested[_key - 2] = arguments[_key];
  }

  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof type === "function") {
    return type(props);
  }
  if (nested) {
    nested = smoothNested(nested);
  } else {
    nested = [];
  }

  return {
    type: type,
    props: props,
    nested: nested
  };
};

function exNode(appName){
 if(!appName) return new NodeMap('example');

 return new NodeMap(appName);
}

export default const EX = exNode('main')

export { exNode }