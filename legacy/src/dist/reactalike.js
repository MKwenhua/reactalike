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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (self, createElem) {
   var re = new RegExp(/^ex_/i);

   function removeProp(element, attr) {
      if (!self.events[attr] && !re.test(attr)) {
         element.removeAttribute(attr);
      }
   };

   function changeProp(element, attr, val) {
      if (!self.events[attr] && !re.test(attr) || attr === 'src') {
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
      if (node.props.ex_eventFuncName) {
         node.domElement.removeEventListener(node.props.ex_attachedFunc, node.props.ex_eventFuncName);
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
         newNode.domElement = createElem(newNode, _vdomid, parent.trace);
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
         newNode.domElement = createElem(newNode, _vdomid2, newNode.parent);
         var repl = typeof oldNode === 'string' ? parent.domElement.children[index] : oldNode.domElement;
         parent.domElement.replaceChild(newNode.domElement, repl);

         return;
      };
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);

         updateProps(newNode.domElement, newNode.props, oldNode.props);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Eventlist = __webpack_require__(4);

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
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

module.exports = Eventlist.reduce(function (ob, itm) {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flatten = function _flatten(a, b) {
   return a.concat(Array.isArray(b) ? b.reduce(_flatten, []) : b);
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
module.exports = {
   smoothArray: function smoothArray() {
      return function (nested) {
         // if( Array.isArray(nested) ) return [];

         return nested.reduce(_flatten, []).filter(function (ne) {
            return ne !== null && ne !== undefined;
         });
      };
   },
   flatten: function flatten(nested) {
      return nested.reduce(_flatten, []);
   },
   capitalize: function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var events = __webpack_require__(1);
var setDiff = __webpack_require__(0);
var handyHelpers = __webpack_require__(2);
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

function exNode(appName) {
  if (!appName) return new NodeMap('example');

  return new NodeMap(appName);
}

module.exports = exNode;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["onCopy", "onCut", "onPaste", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onScroll", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"];

/***/ })
/******/ ]);