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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(10);
} else {
  module.exports = __webpack_require__(10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setOnBlur = function setOnBlur(keyName, nametag, cb) {
   if (!cb) return function () {};
   return function (e, a, b) {
      console.log('keyName e', e);
      console.log('keyName e.target', e.target);
      var text = e.target.innerText.trim();
      console.log('keyName text', text);

      var nametagCopy = Object.assign({}, nametag);
      nametagCopy[keyName] = text;
      cb(nametagCopy);
   };
};

var NameTag = _reactalikeSource2.default.component({
   componentName: 'nametag',
   componentRender: function componentRender(props) {
      var ex_nametag = props.ex_nametag,
          ex_person = props.ex_person,
          ex_change = props.ex_change,
          ex_editMode = props.ex_editMode;
      var color = ex_nametag.color;

      return _reactalikeSource2.default.node(
         'div',
         { 'class': 'padd-center' },
         _reactalikeSource2.default.node(
            'div',
            { 'class': 'tag', style: 'border-color:' + color },
            _reactalikeSource2.default.node(
               'header',
               { style: 'background:' + color },
               _reactalikeSource2.default.node(
                  'div',
                  { 'class': 'hello', contentEditable: ex_editMode, onBlur: setOnBlur('headerText', ex_nametag, ex_change) },
                  ex_nametag.headerText
               )
            ),
            _reactalikeSource2.default.node(
               'section',
               null,
               _reactalikeSource2.default.node(
                  'div',
                  { 'class': 'mynameis', contentEditable: ex_editMode, onBlur: setOnBlur('intro', ex_nametag, ex_change) },
                  ex_nametag.intro
               ),
               _reactalikeSource2.default.node(
                  'div',
                  { 'class': 'my-name-is', contentEditable: ex_editMode, onBlur: setOnBlur('displayName', ex_nametag, ex_change) },
                  ex_nametag.displayName
               )
            ),
            _reactalikeSource2.default.node('div', { 'class': 'dottedline' })
         )
      );
   }
});

exports.default = NameTag;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(20);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(21);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = exports.repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = exports.pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};

var formatTime = exports.formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use performance API if it's available in order to get better precision
var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 10 */
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
   /******/return __webpack_require__(__webpack_require__.s = 7);
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

   /***/
},
/* 1 */
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
/* 2 */
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

   var _html_attributes = __webpack_require__(0);

   var _html_attributes2 = _interopRequireDefault(_html_attributes);

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
   }

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

   /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   var _eventlist = __webpack_require__(8);

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
/* 4 */
/***/function (module, exports, __webpack_require__) {

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

   /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

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

   /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

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

   /***/
},
/* 7 */
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

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
   }

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

   /***/
},
/* 8 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _name_tag = __webpack_require__(1);

var _name_tag2 = _interopRequireDefault(_name_tag);

var _side_edit = __webpack_require__(35);

var _side_edit2 = _interopRequireDefault(_side_edit);

var _profile = __webpack_require__(34);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setNameTagId = function setNameTagId() {
   return ("nt" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-6);
};

var setUserProfileLink = function setUserProfileLink(personId, dispatch) {
   console.log('setUserProfileLink personId', personId);
   return function () {

      dispatch({ type: 'VIEW_PROFILE', payload: personId });
   };
};
window.EX = _reactalikeSource2.default;

var Layout = function (_EX$Container) {
   _inherits(Layout, _EX$Container);

   function Layout() {
      _classCallCheck(this, Layout);

      return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
   }

   _createClass(Layout, [{
      key: 'render',
      value: function render() {
         var _props = this.props,
             dispatch = _props.dispatch,
             store = _props.store;
         var guests = store.guests,
             nameTags = store.nameTags,
             view = store.view,
             profile = store.profile;


         var ppl = Object.keys(guests).map(function (personId, ii) {
            return _reactalikeSource2.default.node(
               'div',
               { onClick: setUserProfileLink(personId, dispatch) },
               _reactalikeSource2.default.node(_name_tag2.default, { ex_person: guests[personId], ex_nametag: nameTags[personId], ex_editMode: 'false' })
            );
         });
         return _reactalikeSource2.default.node(
            'div',
            { 'class': 'container' },
            _reactalikeSource2.default.node(
               'section',
               { 'class': view === 'list_view' ? 'row' : 'hidden' },
               _reactalikeSource2.default.node(
                  'div',
                  { 'class': 'col-md-2 pull-md-10' },
                  _reactalikeSource2.default.node(_side_edit2.default, { ex_dispatch: dispatch })
               ),
               _reactalikeSource2.default.node(
                  'div',
                  { 'class': 'col-md-10 push-md-2' },
                  ppl
               )
            ),
            _reactalikeSource2.default.node(
               'section',
               { 'class': view === 'profile_view' ? 'row' : 'hidden' },
               _reactalikeSource2.default.node(_profile2.default, { ex_profile: profile, ex_person: guests[profile.guest], ex_nametags: nameTags, ex_dispatch: dispatch })
            )
         );
      }
   }]);

   return Layout;
}(_reactalikeSource2.default.Container);

exports.default = Layout;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(29);

var _reduxLogger = __webpack_require__(25);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppState = {
   view: 'list_view',
   profile: {
      mode: 'default',
      guest: 'nt789w'
   },
   nameTags: {
      nt789w: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Pete',
         TAGid: 'nt789w'
      },
      nt5y0r: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Bing Bing',
         TAGid: 'nt5y0r'
      },
      nthwvu: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Jackie',
         TAGid: 'nthwvu'
      },
      ntwq8b: {
         color: '#ffa500',
         headerText: 'HELLO',
         intro: 'my name is',
         displayName: 'Bachman',
         TAGid: 'ntwq8b'
      }

   },
   guests: {
      nt789w: {
         name: 'Pete',
         job: 'Orderly Drifter',
         id: 'nt789w'
      },
      nt5y0r: {
         name: 'Bing Bing',
         job: 'works at 呷哺呷哺',
         id: 'nt5y0r'
      },
      nthwvu: {
         name: 'Jackie',
         job: 'Movie Star',
         id: 'nthwvu'
      },
      ntwq8b: {
         name: 'Bachman',
         job: 'chief innovation officer',
         id: 'ntwq8b'
      }
   }
};
function reducer() {
   var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AppState;
   var action = arguments[1];

   switch (action.type) {
      case 'ADD_GUEST':
         return _extends({}, state, {
            guests: action.payload
         });
      case 'REMOVE_GUEST':
         return _extends({}, state, {
            guests: action.payload
         });
      case 'VIEW_CHANGE':
         return _extends({}, state, {
            view: action.payload
         });
      case 'VIEW_PROFILE':
         return _extends({}, state, {
            view: 'profile_view',
            profile: {
               mode: 'default',
               guest: action.payload
            }
         });
      case 'EDIT_NAMETAG':
         return _extends({}, state, {
            profile: action.payload
         });
      case 'NAMETAG_CHANGE':
         return _extends({}, state, {
            nameTags: action.payload
         });
      case 'NAMETAG_SAVE':
         return _extends({}, state, {
            profile: action.payload
         });
      case 'ADD_NAMETAG':
         return _extends({}, state, {
            nameTags: action.payload
         });
      default:
         return state;
   }
}

var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxLogger2.default));
exports.default = store;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter) {
        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
        else if (typeof(prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i = -1,
          last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(18);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(19);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(15);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.printBuffer = printBuffer;

var _helpers = __webpack_require__(6);

var _diff = __webpack_require__(24);

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp,
      duration = options.duration;


  return function (action, time, took) {
    var parts = ['action'];

    parts.push('%c' + String(action.type));
    if (timestamp) parts.push('%c@ ' + time);
    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

    return parts.join(' ');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger,
      actionTransformer = options.actionTransformer,
      _options$titleFormatt = options.titleFormatter,
      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
      collapsed = options.collapsed,
      colors = options.colors,
      level = options.level,
      diff = options.diff;


  var isUsingDefaultFormatter = typeof options.titleFormatter === 'undefined';

  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started,
        startedTime = logEntry.startedTime,
        action = logEntry.action,
        prevState = logEntry.prevState,
        error = logEntry.error;
    var took = logEntry.took,
        nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action, logEntry) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
    var headerCSS = ['color: gray; font-weight: lighter;'];
    headerCSS.push(titleCSS);
    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title && isUsingDefaultFormatter) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
      } else {
        if (colors.title && isUsingDefaultFormatter) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('\u2014\u2014 log end \u2014\u2014');
    }
  });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: function stateTransformer(state) {
    return state;
  },
  actionTransformer: function actionTransformer(action) {
    return action;
  },
  errorTransformer: function errorTransformer(error) {
    return error;
  },
  colors: {
    title: function title() {
      return "inherit";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined
};
module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffLogger;

var _deepDiff = __webpack_require__(13);

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/flitbit/diff#differences
var dictionary = {
  'E': {
    color: '#2196F3',
    text: 'CHANGED:'
  },
  'N': {
    color: '#4CAF50',
    text: 'ADDED:'
  },
  'D': {
    color: '#F44336',
    text: 'DELETED:'
  },
  'A': {
    color: '#2196F3',
    text: 'ARRAY:'
  }
};

function style(kind) {
  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
}

function render(diff) {
  var kind = diff.kind,
      path = diff.path,
      lhs = diff.lhs,
      rhs = diff.rhs,
      index = diff.index,
      item = diff.item;


  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '\u2192', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [path.join('.') + '[' + index + ']', item];
    default:
      return [];
  }
}

function diffLogger(prevState, newState, logger, isCollapsed) {
  var diff = (0, _deepDiff2.default)(prevState, newState);

  try {
    if (isCollapsed) {
      logger.groupCollapsed('diff');
    } else {
      logger.group('diff');
    }
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(function (elem) {
      var kind = elem.kind;

      var output = render(elem);

      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
    });
  } else {
    logger.log('\u2014\u2014 no diff \u2014\u2014');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
  }
}
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.createLogger = exports.defaults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _core = __webpack_require__(22);

var _helpers = __webpack_require__(6);

var _defaults = __webpack_require__(23);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates logger with following options
 *
 * @namespace
 * @param {object} options - options for logger
 * @param {string | function | object} options.level - console[level]
 * @param {boolean} options.duration - print duration of each action?
 * @param {boolean} options.timestamp - print timestamp with each action?
 * @param {object} options.colors - custom colors
 * @param {object} options.logger - implementation of the `console` API
 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @param {boolean} options.collapsed - is group collapsed?
 * @param {boolean} options.predicate - condition which resolves logger behavior
 * @param {function} options.stateTransformer - transform state before print
 * @param {function} options.actionTransformer - transform action before print
 * @param {function} options.errorTransformer - transform error before print
 *
 * @returns {function} logger middleware
 */
function createLogger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var loggerOptions = _extends({}, _defaults2.default, options);

  var logger = loggerOptions.logger,
      stateTransformer = loggerOptions.stateTransformer,
      errorTransformer = loggerOptions.errorTransformer,
      predicate = loggerOptions.predicate,
      logErrors = loggerOptions.logErrors,
      diffPredicate = loggerOptions.diffPredicate;

  // Return if 'console' object is not defined

  if (typeof logger === 'undefined') {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
  if (options.getState && options.dispatch) {
    // eslint-disable-next-line no-console
    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var logBuffer = [];

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // Exit early if predicate function returns 'false'
        if (typeof predicate === 'function' && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};

        logBuffer.push(logEntry);

        logEntry.started = _helpers.timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = void 0;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = _helpers.timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
        logBuffer.length = 0;

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

var defaultLogger = function defaultLogger() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref2.dispatch,
      getState = _ref2.getState;

  if (typeof dispatch === 'function' || typeof getState === 'function') {
    return createLogger()({ dispatch: dispatch, getState: getState });
  } else {
    // eslint-disable-next-line no-console
    console.error('\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from \'redux-logger\'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from \'redux-logger\'\n');
  }
};

exports.defaults = _defaults2.default;
exports.createLogger = createLogger;
exports.logger = defaultLogger;
exports.default = defaultLogger;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(9);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(32);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(37)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _name_tag = __webpack_require__(1);

var _name_tag2 = _interopRequireDefault(_name_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nameTagStarter = function nameTagStarter(person) {
   var newNametag = {};
   newNametag[person.id] = {
      color: '#ffa500',
      headerText: 'HELLO',
      intro: 'my name is',
      displayName: person.name
   };
   return newNametag;
};
var setNameTagChange = function setNameTagChange(nametags, dispatch) {
   return function (nameTagChange) {
      console.log('nameTagChange', nameTagChange);
      var nametagsCopy = Object.assign({}, nametags);
      nametagsCopy[nameTagChange.TAGid] = nameTagChange;
      console.log('nameTagChange.TAGid', nameTagChange.TAGid);
      console.log('nametagsCopy', nametagsCopy);
      dispatch({ type: 'NAMETAG_CHANGE', payload: nametagsCopy });
   };
};
var setColorChange = function setColorChange(nametag, cb) {
   if (!cb) return function () {};
   return function (e, a, b) {
      console.log('keyName e', e);
      console.log('keyName e.target', e.target);
      var text = e.target.value.trim();
      console.log('keyName text', text);
      var nametagCopy = Object.assign({}, nametag);
      nametagCopy.color = text;
      cb(nametagCopy);
   };
};
var EditNameTag = _reactalikeSource2.default.component({
   componentName: 'EditNameTag',
   componentRender: function componentRender(props) {
      console.log('EditNameTag props', props);
      var ex_person = props.ex_person,
          ex_nametags = props.ex_nametags,
          ex_editMode = props.ex_editMode,
          ex_dispatch = props.ex_dispatch;

      var nametag = ex_nametags[ex_person.id];
      if (!nametag) {
         var newNametag = nameTagStarter(ex_person);

         return _reactalikeSource2.default.node(
            'div',
            { 'class': 'text-center' },
            _reactalikeSource2.default.node(
               'h4',
               null,
               'You do not have a nametag'
            ),
            _reactalikeSource2.default.node(
               'button',
               { 'class': 'btn btn-info', onClick: function onClick() {
                     return ex_dispatch({ type: 'ADD_NAMETAG', payload: Object.assign({}, ex_nametags, newNametag) });
                  } },
               'Generate NameTag'
            )
         );
      }
      var nameTagChange = setNameTagChange(ex_nametags, ex_dispatch);
      return _reactalikeSource2.default.node(
         'section',
         null,
         _reactalikeSource2.default.node(
            'div',
            { 'class': 'col-md-8' },
            _reactalikeSource2.default.node(_name_tag2.default, { ex_person: ex_person, ex_nametag: nametag, ex_change: nameTagChange, ex_editMode: ex_editMode })
         ),
         _reactalikeSource2.default.node(
            'div',
            { 'class': 'col-md-4' },
            _reactalikeSource2.default.node(
               'div',
               { 'class': ex_editMode ? '' : 'hidden' },
               _reactalikeSource2.default.node('input', { type: 'color', value: nametag.color, onBlur: setColorChange(nametag, nameTagChange) })
            ),
            _reactalikeSource2.default.node(
               'div',
               { 'class': ex_editMode ? '' : 'hidden' },
               _reactalikeSource2.default.node(
                  'button',
                  { 'class': 'btn btn-success full-btn', onClick: function onClick() {
                        return ex_dispatch({ type: 'NAMETAG_SAVE', payload: { mode: 'default', guest: ex_person.id } });
                     } },
                  'Save'
               )
            ),
            _reactalikeSource2.default.node(
               'div',
               { 'class': ex_editMode ? 'hidden' : '' },
               _reactalikeSource2.default.node(
                  'button',
                  { 'class': 'btn btn-success full-btn', onClick: function onClick() {
                        return ex_dispatch({ type: 'EDIT_NAMETAG', payload: { mode: 'edit_nametag', guest: ex_person.id } });
                     } },
                  'Edit'
               )
            )
         )
      );
   }
});

exports.default = EditNameTag;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _name_tag = __webpack_require__(1);

var _name_tag2 = _interopRequireDefault(_name_tag);

var _edit_name_tag = __webpack_require__(33);

var _edit_name_tag2 = _interopRequireDefault(_edit_name_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = _reactalikeSource2.default.component({
   componentName: 'Profile',
   componentRender: function componentRender(props) {
      var ex_profile = props.ex_profile,
          ex_person = props.ex_person,
          ex_nametags = props.ex_nametags,
          ex_dispatch = props.ex_dispatch;
      var mode = ex_profile.mode,
          guest = ex_profile.guest;

      console.log('profile props', props);
      return _reactalikeSource2.default.node(
         'section',
         null,
         _reactalikeSource2.default.node(
            'button',
            { 'class': 'btn btn-info', onClick: function onClick() {
                  return ex_dispatch({ type: 'VIEW_CHANGE', payload: 'list_view' });
               } },
            'Go Back'
         ),
         _reactalikeSource2.default.node(
            'h2',
            null,
            _reactalikeSource2.default.node(
               'b',
               null,
               'Name:'
            ),
            ex_person.name
         ),
         _reactalikeSource2.default.node(
            'h4',
            null,
            _reactalikeSource2.default.node(
               'b',
               null,
               'Occupation:'
            ),
            ex_person.job
         ),
         _reactalikeSource2.default.node(
            'div',
            { 'class': 'row align-items-center' },
            _reactalikeSource2.default.node(
               'div',
               { 'class': 'col-md-10' },
               _reactalikeSource2.default.node(_edit_name_tag2.default, { ex_person: ex_person, ex_nametags: ex_nametags, ex_dispatch: ex_dispatch, ex_editMode: mode === 'edit_nametag' })
            )
         )
      );
   }
});

exports.default = Profile;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideEdit = _reactalikeSource2.default.component({
   componentName: 'SideEdit',
   componentRender: function componentRender(props) {
      var ex_dispatch = props.ex_dispatch;

      return _reactalikeSource2.default.node(
         'section',
         null,
         _reactalikeSource2.default.node(
            'h4',
            null,
            'Edit'
         ),
         _reactalikeSource2.default.node(
            'div',
            { 'class': 'row' },
            _reactalikeSource2.default.node(
               'button',
               { 'class': 'btn btn-info', onClick: function onClick() {
                     return ex_dispatch({ type: 'VIEW_CHANGE', payload: 'edit' });
                  } },
               'Add NameTag'
            )
         )
      );
   }
});

exports.default = SideEdit;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactalikeSource = __webpack_require__(0);

var _reactalikeSource2 = _interopRequireDefault(_reactalikeSource);

var _layout = __webpack_require__(11);

var _layout2 = _interopRequireDefault(_layout);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactalikeSource2.default.mountAppToNode(_reactalikeSource2.default.ReduxConnect(_layout2.default, _store2.default), document.getElementById('root'));

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);