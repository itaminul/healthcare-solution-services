"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framer-motion";
exports.ids = ["vendor-chunks/framer-motion"];
exports.modules = {

/***/ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveElements: () => (/* binding */ resolveElements)\n/* harmony export */ });\n/* harmony import */ var _utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/errors.mjs */ \"(ssr)/./node_modules/framer-motion/dist/es/utils/errors.mjs\");\n\n\nfunction resolveElements(elements, scope, selectorCache) {\n    var _a;\n    if (typeof elements === \"string\") {\n        let root = document;\n        if (scope) {\n            (0,_utils_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(Boolean(scope.current), \"Scope provided, but no element detected.\");\n            root = scope.current;\n        }\n        if (selectorCache) {\n            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = root.querySelectorAll(elements));\n            elements = selectorCache[elements];\n        }\n        else {\n            elements = root.querySelectorAll(elements);\n        }\n    }\n    else if (elements instanceof Element) {\n        elements = [elements];\n    }\n    /**\n     * Return an empty array\n     */\n    return Array.from(elements || []);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvcmVzb2x2ZS1lbGVtZW50Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9yZXNvbHZlLWVsZW1lbnQubWpzPzBkZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZXJyb3JzLm1qcyc7XG5cbmZ1bmN0aW9uIHJlc29sdmVFbGVtZW50cyhlbGVtZW50cywgc2NvcGUsIHNlbGVjdG9yQ2FjaGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50O1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGludmFyaWFudChCb29sZWFuKHNjb3BlLmN1cnJlbnQpLCBcIlNjb3BlIHByb3ZpZGVkLCBidXQgbm8gZWxlbWVudCBkZXRlY3RlZC5cIik7XG4gICAgICAgICAgICByb290ID0gc2NvcGUuY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JDYWNoZSkge1xuICAgICAgICAgICAgKF9hID0gc2VsZWN0b3JDYWNoZVtlbGVtZW50c10pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChzZWxlY3RvckNhY2hlW2VsZW1lbnRzXSA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cykpO1xuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvckNhY2hlW2VsZW1lbnRzXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gZW1wdHkgYXJyYXlcbiAgICAgKi9cbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cyB8fCBbXSk7XG59XG5cbmV4cG9ydCB7IHJlc29sdmVFbGVtZW50cyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inView: () => (/* binding */ inView)\n/* harmony export */ });\n/* harmony import */ var _utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/resolve-element.mjs */ \"(ssr)/./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs\");\n\n\nconst thresholds = {\n    some: 0,\n    all: 1,\n};\nfunction inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = \"some\" } = {}) {\n    const elements = (0,_utils_resolve_element_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(elementOrSelector);\n    const activeIntersections = new WeakMap();\n    const onIntersectionChange = (entries) => {\n        entries.forEach((entry) => {\n            const onEnd = activeIntersections.get(entry.target);\n            /**\n             * If there's no change to the intersection, we don't need to\n             * do anything here.\n             */\n            if (entry.isIntersecting === Boolean(onEnd))\n                return;\n            if (entry.isIntersecting) {\n                const newOnEnd = onStart(entry);\n                if (typeof newOnEnd === \"function\") {\n                    activeIntersections.set(entry.target, newOnEnd);\n                }\n                else {\n                    observer.unobserve(entry.target);\n                }\n            }\n            else if (onEnd) {\n                onEnd(entry);\n                activeIntersections.delete(entry.target);\n            }\n        });\n    };\n    const observer = new IntersectionObserver(onIntersectionChange, {\n        root,\n        rootMargin,\n        threshold: typeof amount === \"number\" ? amount : thresholds[amount],\n    });\n    elements.forEach((element) => observer.observe(element));\n    return () => observer.disconnect();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmlld3BvcnQvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0Q0FBNEMsSUFBSTtBQUM5RixxQkFBcUIsMkVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmlld3BvcnQvaW5kZXgubWpzPzI4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZUVsZW1lbnRzIH0gZnJvbSAnLi4vdXRpbHMvcmVzb2x2ZS1lbGVtZW50Lm1qcyc7XG5cbmNvbnN0IHRocmVzaG9sZHMgPSB7XG4gICAgc29tZTogMCxcbiAgICBhbGw6IDEsXG59O1xuZnVuY3Rpb24gaW5WaWV3KGVsZW1lbnRPclNlbGVjdG9yLCBvblN0YXJ0LCB7IHJvb3QsIG1hcmdpbjogcm9vdE1hcmdpbiwgYW1vdW50ID0gXCJzb21lXCIgfSA9IHt9KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSByZXNvbHZlRWxlbWVudHMoZWxlbWVudE9yU2VsZWN0b3IpO1xuICAgIGNvbnN0IGFjdGl2ZUludGVyc2VjdGlvbnMgPSBuZXcgV2Vha01hcCgpO1xuICAgIGNvbnN0IG9uSW50ZXJzZWN0aW9uQ2hhbmdlID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25FbmQgPSBhY3RpdmVJbnRlcnNlY3Rpb25zLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSdzIG5vIGNoYW5nZSB0byB0aGUgaW50ZXJzZWN0aW9uLCB3ZSBkb24ndCBuZWVkIHRvXG4gICAgICAgICAgICAgKiBkbyBhbnl0aGluZyBoZXJlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgPT09IEJvb2xlYW4ob25FbmQpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09uRW5kID0gb25TdGFydChlbnRyeSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdPbkVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUludGVyc2VjdGlvbnMuc2V0KGVudHJ5LnRhcmdldCwgbmV3T25FbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob25FbmQpIHtcbiAgICAgICAgICAgICAgICBvbkVuZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW50ZXJzZWN0aW9ucy5kZWxldGUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkludGVyc2VjdGlvbkNoYW5nZSwge1xuICAgICAgICByb290LFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB0aHJlc2hvbGQ6IHR5cGVvZiBhbW91bnQgPT09IFwibnVtYmVyXCIgPyBhbW91bnQgOiB0aHJlc2hvbGRzW2Ftb3VudF0sXG4gICAgfSk7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KSk7XG4gICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn1cblxuZXhwb3J0IHsgaW5WaWV3IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framer-motion/dist/es/utils/errors.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/errors.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invariant: () => (/* binding */ invariant),\n/* harmony export */   warning: () => (/* binding */ warning)\n/* harmony export */ });\n/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.mjs */ \"(ssr)/./node_modules/framer-motion/dist/es/utils/noop.mjs\");\n\n\nlet warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;\nlet invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;\nif (true) {\n    warning = (check, message) => {\n        if (!check && typeof console !== \"undefined\") {\n            console.warn(message);\n        }\n    };\n    invariant = (check, message) => {\n        if (!check) {\n            throw new Error(message);\n        }\n    };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Vycm9ycy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDOztBQUVsQyxjQUFjLDJDQUFJO0FBQ2xCLGdCQUFnQiwyQ0FBSTtBQUNwQixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9lcnJvcnMubWpzP2U4N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vbm9vcC5tanMnO1xuXG5sZXQgd2FybmluZyA9IG5vb3A7XG5sZXQgaW52YXJpYW50ID0gbm9vcDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB3YXJuaW5nID0gKGNoZWNrLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2sgJiYgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW52YXJpYW50ID0gKGNoZWNrLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IGludmFyaWFudCwgd2FybmluZyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framer-motion/dist/es/utils/errors.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framer-motion/dist/es/utils/noop.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/noop.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noop: () => (/* binding */ noop)\n/* harmony export */ });\nconst noop = (any) => any;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzPzM4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9vcCA9IChhbnkpID0+IGFueTtcblxuZXhwb3J0IHsgbm9vcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framer-motion/dist/es/utils/noop.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _render_dom_viewport_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/dom/viewport/index.mjs */ \"(ssr)/./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs\");\n\n\n\nfunction useInView(ref, { root, margin, amount, once = false } = {}) {\n    const [isInView, setInView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (!ref.current || (once && isInView))\n            return;\n        const onEnter = () => {\n            setInView(true);\n            return once ? undefined : () => setInView(false);\n        };\n        const options = {\n            root: (root && root.current) || undefined,\n            margin,\n            amount,\n        };\n        return (0,_render_dom_viewport_index_mjs__WEBPACK_IMPORTED_MODULE_1__.inView)(ref.current, onEnter, options);\n    }, [root, ref, margin, once, amount]);\n    return isInView;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbi12aWV3Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDYzs7QUFFMUQsMEJBQTBCLHFDQUFxQyxJQUFJO0FBQ25FLGtDQUFrQywrQ0FBUTtBQUMxQyxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0VBQU07QUFDckIsS0FBSztBQUNMO0FBQ0E7O0FBRXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW4tdmlldy5tanM/ODFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5WaWV3IH0gZnJvbSAnLi4vcmVuZGVyL2RvbS92aWV3cG9ydC9pbmRleC5tanMnO1xuXG5mdW5jdGlvbiB1c2VJblZpZXcocmVmLCB7IHJvb3QsIG1hcmdpbiwgYW1vdW50LCBvbmNlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgW2lzSW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgKG9uY2UgJiYgaXNJblZpZXcpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBvbkVudGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0SW5WaWV3KHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIG9uY2UgPyB1bmRlZmluZWQgOiAoKSA9PiBzZXRJblZpZXcoZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogKHJvb3QgJiYgcm9vdC5jdXJyZW50KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXJnaW4sXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpblZpZXcocmVmLmN1cnJlbnQsIG9uRW50ZXIsIG9wdGlvbnMpO1xuICAgIH0sIFtyb290LCByZWYsIG1hcmdpbiwgb25jZSwgYW1vdW50XSk7XG4gICAgcmV0dXJuIGlzSW5WaWV3O1xufVxuXG5leHBvcnQgeyB1c2VJblZpZXcgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\n");

/***/ })

};
;