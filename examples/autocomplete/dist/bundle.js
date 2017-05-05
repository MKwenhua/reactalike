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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(2);
} else {
  module.exports = __webpack_require__(2);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
function Trie(wordList, actions) {
   var TrieContext = this;
   function getAction(word) {
      return actions[word] ? actions[word] : null;
   }

   function addCharToTrie(index, word, wordFragment, branch, trie, fragment) {
      if (index === wordFragment.length) return trie;

      var char = wordFragment[index];
      var nodeWord = wordFragment.length - 1 === index ? word : null;
      if (!branch[char]) {
         branch[char] = {
            word: nodeWord,
            fragments: null,
            action: wordFragment.length - 1 === index ? getAction(word) : null
         };
      }
      if (fragment && nodeWord) {
         var fragmentArray = branch[char].fragments ? branch[char].fragments : [];
         branch[char].fragments = fragmentArray.concat(nodeWord);
      }
      return addCharToTrie(index + 1, word, wordFragment, branch[char], trie, fragment);
   }

   function getBranch(charString, trie) {
      var branch = trie;
      for (var i = 0; i < charString.length; i++) {
         branch = branch[charString[i]];
         if (!branch) return null;
      }
      return branch;
   }
   TrieContext.words = wordList;
   TrieContext.actions = actions;
   TrieContext.foundWordsIndex = {};

   TrieContext.findWords = function (branch, lookupId) {
      console.log(branch);
      var list = [];
      function mineWord(brn) {
         if (brn.word) {
            if (!TrieContext.foundWordsIndex[brn.word]) {
               list.push(brn.action || brn.word);
               TrieContext.foundWordsIndex[brn.word] = true;
            }
            if (list.length === TrieContext.wordLimit) return list;
         }
         if (brn.fragments) {
            list.concat(brn.fragments.filter(function (txt) {
               return !TrieContext.foundWordsIndex[txt];
            }));
         }
         for (var key in brn) {
            if (typeof brn[key] !== 'string' && brn[key] !== null && TrieContext.currentLoopup === lookupId) {
               mineWord(brn[key]);
            }
         }
         return list;
      }

      return mineWord(branch);
   };
   TrieContext.getWordList = function (charString) {
      var foundWords = [];
      TrieContext.foundWordsIndex = {};
      if (!charString) return foundWords;
      var branch = getBranch(charString, TrieContext.head);
      if (!branch) return foundWords;
      var lookupId = Math.random().toString(36).substring(18);
      TrieContext.currentLoopup = lookupId;
      return TrieContext.findWords(branch, lookupId);
   };

   TrieContext.head = wordList.reduce(function (head, word) {
      var wordLowerCase = word.toLowerCase();
      head[wordLowerCase[0]] = head[wordLowerCase[0]] ? head[wordLowerCase[0]] : {
         word: null,
         fragments: null,
         action: null
      };
      var wordFragment = wordLowerCase;
      var headAT = addCharToTrie(1, word, wordLowerCase, head[wordLowerCase[0]], head, false);
      while (wordFragment.length) {
         wordFragment = wordFragment.split(/\s+/).slice(1).join(' ');
         if (wordFragment) {
            headAT[wordFragment[0]] = headAT[wordFragment[0]] ? headAT[wordFragment[0]] : { word: null, fragments: null, action: null };
            headAT = addCharToTrie(1, word, wordFragment, headAT[wordFragment[0]], headAT, true);
         }
      }
      return headAT;
   }, {});
   TrieContext.lookup = function (letters) {
      return TrieContext.getWordList(letters.toLowerCase());
   };
}

function BuildTrie(wordList) {
   var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

   return new Trie(wordList, actions);
}

exports.default = BuildTrie;

/***/ })
/******/ ]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports =
/******/function (modules) {
   // webpackBootstrap
   /******/ // The module cache
   /******/var installedModules = {};
   /******/
   /******/ // The require function
   /******/function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) {
         /******/return installedModules[moduleId].exports;
         /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/var module = installedModules[moduleId] = {
         /******/i: moduleId,
         /******/l: false,
         /******/exports: {}
         /******/ };
      /******/
      /******/ // Execute the module function
      /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/return module.exports;
      /******/
   }
   /******/
   /******/
   /******/ // expose the modules object (__webpack_modules__)
   /******/__webpack_require__.m = modules;
   /******/
   /******/ // expose the module cache
   /******/__webpack_require__.c = installedModules;
   /******/
   /******/ // identity function for calling harmony imports with the correct context
   /******/__webpack_require__.i = function (value) {
      return value;
   };
   /******/
   /******/ // define getter function for harmony exports
   /******/__webpack_require__.d = function (exports, name, getter) {
      /******/if (!__webpack_require__.o(exports, name)) {
         /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
         /******/
      }
      /******/
   };
   /******/
   /******/ // getDefaultExport function for compatibility with non-harmony modules
   /******/__webpack_require__.n = function (module) {
      /******/var getter = module && module.__esModule ?
      /******/function getDefault() {
         return module['default'];
      } :
      /******/function getModuleExports() {
         return module;
      };
      /******/__webpack_require__.d(getter, 'a', getter);
      /******/return getter;
      /******/
   };
   /******/
   /******/ // Object.prototype.hasOwnProperty.call
   /******/__webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
   };
   /******/
   /******/ // __webpack_public_path__
   /******/__webpack_require__.p = "";
   /******/
   /******/ // Load entry module and return exports
   /******/return __webpack_require__(__webpack_require__.s = 4);
   /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
   } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
   };

   var setDiff = function setDiff(self, createElem) {
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

   /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   var _eventlist = __webpack_require__(5);

   var _eventlist2 = _interopRequireDefault(_eventlist);

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
   }

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

   /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

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

   /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

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

   /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.exNode = undefined;

   var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
   } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
   };

   var _events = __webpack_require__(1);

   var _events2 = _interopRequireDefault(_events);

   var _diffing = __webpack_require__(0);

   var _diffing2 = _interopRequireDefault(_diffing);

   var _redux_wrapper = __webpack_require__(3);

   var _redux_wrapper2 = _interopRequireDefault(_redux_wrapper);

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
   }

   var handyHelpers = __webpack_require__(2);
   var smoothNested = handyHelpers.smoothArray();
   var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
   } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
   };
   var formTags = {
      textarea: true,
      select: true,
      input: true,
      output: true,
      form: true
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
         var onSelf = eventInfo.formEvent || eventInfo.mediaEvent || formTags[node.type];
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

      var re = new RegExp(/^ex_/i);
      var isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
      this.createElement = function createElement(name, attrs) {
         var element = document.createElement(String(name));

         if (!attrs) return element;

         for (var attr in attrs) {
            if (!NodeMapContext.events[attr] && !re.test(attr)) {
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

         var el = isSVG.test(node.type) ? NodeMapContext.createElementNS(node.type, node.props) : NodeMapContext.createElement(node.type, node.props);
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

      if (nested) {
         nested = smoothNested(nested);
      } else {
         nested = [];
      }

      return { type: type, props: props, nested: nested };
   };

   function exNode(appName) {
      if (!appName) return new NodeMap('example');

      return new NodeMap(appName);
   }

   var EX = exNode('main');
   exports.default = EX;
   exports.exNode = exNode;

   /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   var EventList = ["onCopy", "onCut", "onPaste", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onScroll", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"];

   exports.default = EventList;

   /***/
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _actionAutocomplete = __webpack_require__(5);

var _actionAutocomplete2 = _interopRequireDefault(_actionAutocomplete);

var _list_item = __webpack_require__(6);

var _list_item2 = _interopRequireDefault(_list_item);

var _result_action = __webpack_require__(7);

var _result_action2 = _interopRequireDefault(_result_action);

var _appstate = __webpack_require__(11);

var _appstate2 = _interopRequireDefault(_appstate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WordList = __webpack_require__(10);
var WordActions = __webpack_require__(9);
var Autocomplete = (0, _actionAutocomplete2.default)(WordList, WordActions);

var logAction = function logAction(word) {
  return function () {

    console.log('WordActions[word]', word, WordActions[word]);
  };
};
var searchType = function searchType(e, elem, otherNode) {
  var typed = elem.value.toLowerCase().trim();
  var sugg = Autocomplete.lookup(typed);
  console.log('sugg', sugg);
  _reactalikeSource2.default.SetState({
    suggestions: sugg,
    typed: typed
  });
};

var Layout = {
  state: _appstate2.default,
  render: function render() {
    var _Layout$state = Layout.state,
        suggestions = _Layout$state.suggestions,
        typed = _Layout$state.typed;


    var movieSuggestions = suggestions.map(function (itm) {
      if (typeof itm === 'string') {
        var data = { suggestion: itm, typed: typed, clickAction: logAction(itm) };
        return _reactalikeSource2.default.node(_list_item2.default, { ex_data: data });
      }
      return _reactalikeSource2.default.node(_result_action2.default, { ex_data: itm });
    });
    return _reactalikeSource2.default.node(
      'div',
      { 'class': 'row' },
      _reactalikeSource2.default.node(
        'div',
        { onClick: function onClick() {
            console.log('clicked this!');
          }, 'class': 'col-sm-6 col-sm-offset-3' },
        _reactalikeSource2.default.node(
          'div',
          { id: 'imaginary_container' },
          _reactalikeSource2.default.node(
            'div',
            { 'class': 'input-group stylish-input-group' },
            _reactalikeSource2.default.node('input', { onKeyUp: searchType, type: 'text', 'class': 'form-control', placeholder: 'Search' }),
            _reactalikeSource2.default.node(
              'span',
              { 'class': 'input-group-addon' },
              _reactalikeSource2.default.node(
                'button',
                { type: 'submit' },
                _reactalikeSource2.default.node('span', { 'class': 'glyphicon glyphicon-search' })
              )
            )
          )
        ),
        _reactalikeSource2.default.node(
          'ul',
          { id: 'search_list' },
          movieSuggestions
        )
      )
    );
  }
};

exports.default = Layout;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(1);
} else {
  module.exports = __webpack_require__(1);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_EX$Component) {
  _inherits(ListItem, _EX$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props$ex_data = this.props.ex_data,
          suggestion = _props$ex_data.suggestion,
          typed = _props$ex_data.typed,
          clickAction = _props$ex_data.clickAction;

      var regex = new RegExp('(' + typed + ')', 'gi');
      var matchText = new RegExp(typed, 'i');
      var highlightedText = suggestion.split(regex).map(function (text, i) {
        if (matchText.test(text)) {
          return _reactalikeSource2.default.node(
            'b',
            null,
            text
          );
        }
        return _reactalikeSource2.default.node(
          'span',
          null,
          text
        );
      });
      return _reactalikeSource2.default.node(
        'li',
        { onClick: clickAction },
        highlightedText
      );
    }
  }]);

  return ListItem;
}(_reactalikeSource2.default.Component);

exports.default = ListItem;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultAction = function (_EX$Component) {
  _inherits(ResultAction, _EX$Component);

  function ResultAction() {
    _classCallCheck(this, ResultAction);

    return _possibleConstructorReturn(this, (ResultAction.__proto__ || Object.getPrototypeOf(ResultAction)).apply(this, arguments));
  }

  _createClass(ResultAction, [{
    key: "render",
    value: function render() {
      var _props$ex_data = this.props.ex_data,
          word = _props$ex_data.word,
          img_src = _props$ex_data.img_src,
          imdb = _props$ex_data.imdb;

      return _reactalikeSource2.default.node(
        "div",
        { "class": "action-list-item" },
        _reactalikeSource2.default.node(
          "div",
          { "class": "col-xs-4" },
          _reactalikeSource2.default.node("img", { src: img_src, height: "50" })
        ),
        _reactalikeSource2.default.node(
          "div",
          { "class": "col-xs-8" },
          _reactalikeSource2.default.node(
            "b",
            null,
            word
          ),
          _reactalikeSource2.default.node(
            "p",
            null,
            _reactalikeSource2.default.node(
              "a",
              { href: imdb },
              "IMDB Link"
            )
          )
        )
      );
    }
  }]);

  return ResultAction;
}(_reactalikeSource2.default.Component);

exports.default = ResultAction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _layout = __webpack_require__(4);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactalikeSource2.default.mountAppToNode(_layout2.default, document.getElementById('root'));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
   "Weird Science": {
      word: 'Weird Science',
      img_src: 'http://i.imgur.com/8U9iw9W.jpg',
      imdb: 'http://www.imdb.com/title/tt0090305'
   },
   "Raiders of the Lost Ark": {
      word: 'Raiders of the Lost Ark',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0082971'
   },
   "Indiana Jones and the Temple of Doom": {
      word: 'Indiana Jones and the Temple of Doom',
      img_src: 'http://imgur.com/56UIDV4.jpg',
      imdb: 'http://www.imdb.com/title/tt0087469'
   },
   "The Terminator": {
      word: 'The Terminator',
      img_src: 'http://imgur.com/DHf55pG.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Bill & Ted's Excellent Adventure": {
      word: 'Bill & Ted\'s Excellent Adventure',
      img_src: 'http://imgur.com/LIvTcVW.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ghostbusters": {
      word: 'Ghostbusters',
      img_src: 'http://imgur.com/lWH1FVN.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ghostbusters II": {
      word: 'Ghostbusters II',
      img_src: 'https://s-media-cache-ak0.pinimg.com/736x/04/1e/ed/041eedf9189f8c7d292788abfcb8e3ff.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Gremlins": {
      word: 'Gremlins',
      img_src: 'http://imgur.com/5EpAbN0.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Adventures in Babysitting": {
      word: 'Adventures in Babysitting',
      img_src: 'http://imgur.com/sEvnd9N.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Beetlejuice": {
      word: 'Beetlejuice',
      img_src: 'http://imgur.com/O6y5FRK.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "The Karate Kid": {
      word: 'The Karate Kid',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Weekend at Bernie's": {
      word: 'Weekend at Bernie\'s',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Die Hard": {
      word: 'Die Hard',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "A Christmas Story": {
      word: 'A Christmas Story',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Ferris Bueller's Day Off": {
      word: 'Ferris Bueller\'s Day Off',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Akira": {
      word: 'Akira',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0094625'
   },
   "Aliens": {
      word: 'Aliens',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGYxMTA0M2EtYjg0Yy00NzI5LTg4NjEtZDA2MTcyOWM0YTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0090605'
   },
   "Robocop": {
      word: 'Robocop',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDVjN2FkYTQtNTBlOC00MjM5LTgzMWEtZWRlNGUyYmNiOTFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0087363'
   },
   "Revenge of the Nerds": {
      word: 'Revenge of the Nerds',
      img_src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU1NzM4NTA4Nl5BMl5BanBnXkFtZTgwMTkxMzcxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdb: 'http://www.imdb.com/title/tt0088000'
   }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["The Breakfast Club", "Real Genius", "Sixteen Candles", "Weird Science", "Pretty in Pink", "Back to the Future", "Back to the Future Part II", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "Star Trek II: The Wrath of Khan", "Star Trek IV: The Voyage Home", "E.T. the Extra-Terrestrial", "Dirty Dancing", "Platoon", "The Princess Bride", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "The Terminator", "Who Framed Roger Rabbit", "When Harry Met Sally...", "Labyrinth", "Legend", "Bill & Ted's Excellent Adventure", "Top Gun", "Footloose", "Desperately Seeking Susan", "Poltergeist", "Poltergeist II: The Other Side", "Flashdance", "Ghostbusters", "Ghostbusters II", "Gremlins", "Superman II", "Splash", "Some Kind of Wonderful", "The Legend of Billie Jean", "Risky Business", "Working Girl", "Roxanne", "Ruthless People", "The Lost Boys", "Adventures in Babysitting", "Beetlejuice", "St. Elmo's Fire", "All the Right Moves", "Mannequin", "The Karate Kid", "The Karate Kid Part II", "Weekend at Bernie's", "The Untouchables", "Die Hard", "Raising Arizona", "The Last Emperor", "A Christmas Story", "Terms of Endearment", "The Little Mermaid", "The Fox and the Hound", "Glory", "A Fish Called Wanda", "Witness", "Field of Dreams", "Moonstruck", "Ferris Bueller's Day Off", "The Road Warrior", "Mad Max Beyond Thunderdome", "Stand by Me", "Above the Law", "The Abyss", "The Accused", "Akira", "An American Tail", "The NeverEnding Story", "The Secret of NIMH", "The Last Unicorn", "An American Werewolf in London", "Anne of Green Gables", "Annie", "The Fly", "The Fly II", "Armed and Dangerous", "Batman", "The Bay Boy", "Steel Magnolias", "Beaches", "Benji the Hunted", "Beverly Hills Cop", "Beverly Hills Cop II", "Big", "The Big Chill", "The Black Cauldron", "The Black Stallion Returns", "Bloodsport", "The Blue Lagoon", "Blue Thunder", "Born on the Fourth of July", "Big Trouble in Little China", "The 'Burbs", "Caddyshack", "The Care Bears Movie", "The Muppets Take Manhattan", "Firestarter", "Cat's Eye", "Chariots of Fire", "Children of the Corn", "Child's Play", "Cocktail", "Cocoon", "Cocoon: The Return", "*batteries not included", "The Color Purple", "Commando", "Communion", "Crocodile Dundee", "Crocodile Dundee II", "Crusoe", "Cujo", "Dangerous Liaisons", "The Dark Crystal", "D.A.R.Y.L.", "Police Academy", "Police Academy 2: Their First Assignment", "Police Academy 4: Citizens on Patrol", "Police Academy 6: City Under Siege", "Date with an Angel", "Dead Calm", "Deadly Friend", "The Dead Pool", "Dead Ringers", "The Dead Zone", "D.O.A.", "Dominick and Eugene", "Dragnet", "Troop Beverly Hills", "Dream a Little Dream", "Dreamscape", "The Dream Team", "Drugstore Cowboy", "Earth Girls Are Easy", "Enemy Mine", "Escape from New York", "Lethal Weapon", "Lethal Weapon 2", "Explorers", "Fatal Attraction", "Jumpin' Jack Flash", "The Flamingo Kid", "One Crazy Summer", "Stand and Deliver", "Lean on Me", "Flight of the Navigator", "Flowers in the Attic", "Ferris Bueller's Day Off", "Highlander", "48 Hrs.", "Frantic", "From the Hip", "F/X", "Blade Runner", "Raiders of the Lost Ark", "Gleaming the Cube", "Heathers", "The Golden Child", "Good Morning, Vietnam", "Ghostbusters", "Gremlins", "The Great Outdoors", "Planes, Trains & Automobiles", "Throw Momma from the Train", "Greystoke: The Legend of Tarzan, Lord of the Apes", "Altered States", "The Rescue", "Hannah and Her Sisters", "Harry and the Hendersons", "Heavy Metal", "Her Alibi", "Hiding Out", "Honey, I Shrunk the Kids", "Hoosiers", "The Wizard", "The Name of the Rose", "The Journey of Natty Gann", "Twins", "Kickboxer", "K-9", "La Bamba", "Ladyhawke", "Lady in White", "The Land Before Time", "The Last Starfighter", "Legal Eagles", "Less Than Zero", "Little Shop of Horrors", "Look Who's Talking", "Lucas", "Major League", "The Man from Snowy River", "Return to Snowy River", "The Manhattan Project", "Married to the Mob", "Mask", "Maximum Overdrive", "Midnight Run", "Mississippi Burning", "The Money Pit", "Monkey Shines", "Moscow on the Hudson", "Moving", "Music Box", "My Science Project", "My Stepmother Is an Alien", "Mystic Pizza", "The Naked Gun: From the Files of Police Squad!", "National Lampoon's Vacation", "National Lampoon's European Vacation", "National Lampoon's Christmas Vacation", "Never Cry Wolf", "Next of Kin", "9½ Weeks", "The Big Easy", "9 to 5", "The Outsiders", "Rumble Fish", "Overboard", "Peggy Sue Got Married", "Phar Lap", "Pet Sematary", "The Philadelphia Experiment", "Pink Floyd: The Wall", "Predator", "The Presidio", "Private Benjamin", "Project X", "Quest for Fire", "Raging Bull", "Rain Man", "Red Dawn", "Red Heat", "Renegades", "Aliens", "Robocop", "Revenge of the Nerds", "Revenge of the Nerds II: Nerds in Paradise", "River's Edge", "Rock & Rule", "Romancing the Stone", "The Jewel of the Nile", "The Running Man", "Running on Empty", "Little Nikita", "Russkies", "Say Anything...", "Scanners", "Scrooged", "The Serpent and the Rainbow", "The Seventh Sign", "Short Circuit", "Sid and Nancy"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AppState = {
  suggestions: [],
  typed: ""
};

exports.default = AppState;

/***/ })
/******/ ]);