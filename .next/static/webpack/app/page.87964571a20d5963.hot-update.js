"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Reviews.tsx":
/*!************************************!*\
  !*** ./src/components/Reviews.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Reviews: function() { return /* binding */ Reviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaxWidthWrapper */ \"(app-pages-browser)/./src/components/MaxWidthWrapper.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _Phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Phone */ \"(app-pages-browser)/./src/components/Phone.tsx\");\n/* __next_internal_client_entry_do_not_use__ Reviews auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst PHONES = [\n    \"/image/brain.png\",\n    \"/image/brain.png\",\n    \"/image/brain.png\"\n];\nfunction splitArray(array, numParts) {\n    const result = [];\n    for(let i = 0; i < array.length; i++){\n        const index = i % numParts;\n        if (!result[index]) {\n            result[index] = [];\n        }\n        result[index].push(array[i]);\n    }\n    return result;\n}\nfunction ReviewColumn(param) {\n    let { reviews, className, reviewClassName, msPerPixel = 0 } = param;\n    _s();\n    const columnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [columnHeight, setColumnHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const duration = \"\".concat(columnHeight * msPerPixel, \"ms\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!columnRef.current) return;\n        const resizeObserver = new window.ResizeObserver(()=>{\n            var _columnRef_current;\n            var _columnRef_current_offsetHeight;\n            setColumnHeight((_columnRef_current_offsetHeight = (_columnRef_current = columnRef.current) === null || _columnRef_current === void 0 ? void 0 : _columnRef_current.offsetHeight) !== null && _columnRef_current_offsetHeight !== void 0 ? _columnRef_current_offsetHeight : 0);\n        });\n        resizeObserver.observe(columnRef.current);\n        return ()=>{\n            resizeObserver.disconnect();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: columnRef,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"animate-marquee space-y-8 py-4\", className),\n        style: {\n            \"--marquee-duration\": duration\n        },\n        children: reviews.concat(reviews).map((imgSrc, reviewIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Review, {\n                className: reviewClassName === null || reviewClassName === void 0 ? void 0 : reviewClassName(reviewIndex % reviews.length),\n                imgSrc: imgSrc\n            }, reviewIndex, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(ReviewColumn, \"mkt8yNzb30lZ75hp9nBj47jSc3c=\");\n_c = ReviewColumn;\nfunction Review(param) {\n    let { imgSrc, className, ...props } = param;\n    const POSSIBLE_ANIMATION_DELAYS = [\n        \"0s\",\n        \"0.1s\",\n        \"0.2s\",\n        \"0.3s\",\n        \"0.4s\",\n        \"0.5s\"\n    ];\n    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5\", className),\n        style: {\n            animationDelay\n        },\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Phone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            imgSrc: imgSrc\n        }, void 0, false, {\n            fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Review;\nfunction ReviewGrid() {\n    _s1();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView)(containerRef, {\n        once: true,\n        amount: 0.4\n    });\n    const columns = splitArray(PHONES, 3);\n    const column1 = columns[0];\n    const column2 = columns[1];\n    const column3 = splitArray(columns[2], 2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3\",\n        children: [\n            isInView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: [\n                            ...column1,\n                            ...column3.flat(),\n                            ...column2\n                        ],\n                        reviewClassName: (reviewIndex)=>(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)({\n                                \"md:hidden\": reviewIndex >= column1.length + column3[0].length,\n                                \"lg:hidden\": reviewIndex >= column1.length\n                            }),\n                        msPerPixel: 10\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: [\n                            ...column2,\n                            ...column3[1]\n                        ],\n                        className: \"hidden md:block\",\n                        reviewClassName: (reviewIndex)=>reviewIndex >= column2.length ? \"lg:hidden\" : \"\",\n                        msPerPixel: 15\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: column3.flat(),\n                        className: \"hidden md:block\",\n                        msPerPixel: 10\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s1(ReviewGrid, \"hvnFWowFZr91hrGSGv4CrGY9JhA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c2 = ReviewGrid;\nfunction Reviews() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"relative max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                \"aria-hidden\": \"true\",\n                src: \"/what-people-are-buying.png\",\n                className: \"absolute select-none hidden xl:block -left-32 top-1/3\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewGrid, {}, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 156,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Reviews;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ReviewColumn\");\n$RefreshReg$(_c1, \"Review\");\n$RefreshReg$(_c2, \"ReviewGrid\");\n$RefreshReg$(_c3, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Jldmlld3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFb0U7QUFDcEI7QUFDTjtBQUNUO0FBQ0w7QUFFNUIsTUFBTU8sU0FBUztJQUNiO0lBQ0E7SUFDQTtDQUNEO0FBRUQsU0FBU0MsV0FBY0MsS0FBZSxFQUFFQyxRQUFnQjtJQUN0RCxNQUFNQyxTQUEwQixFQUFFO0lBRWxDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxNQUFNSSxNQUFNLEVBQUVELElBQUs7UUFDckMsTUFBTUUsUUFBUUYsSUFBSUY7UUFDbEIsSUFBSSxDQUFDQyxNQUFNLENBQUNHLE1BQU0sRUFBRTtZQUNsQkgsTUFBTSxDQUFDRyxNQUFNLEdBQUcsRUFBRTtRQUNwQjtRQUNBSCxNQUFNLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTixLQUFLLENBQUNHLEVBQUU7SUFDN0I7SUFFQSxPQUFPRDtBQUNUO0FBRUEsU0FBU0ssYUFBYSxLQVVyQjtRQVZxQixFQUNwQkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLGVBQWUsRUFDZkMsYUFBYSxDQUFDLEVBTWYsR0FWcUI7O0lBV3BCLE1BQU1DLFlBQVlwQiw2Q0FBTUEsQ0FBd0I7SUFDaEQsTUFBTSxDQUFDcUIsY0FBY0MsZ0JBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNc0IsV0FBVyxHQUE2QixPQUExQkYsZUFBZUYsWUFBVztJQUU5Q3BCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDcUIsVUFBVUksT0FBTyxFQUFFO1FBRXhCLE1BQU1DLGlCQUFpQixJQUFJQyxPQUFPQyxjQUFjLENBQUM7Z0JBQy9CUDtnQkFBQUE7WUFBaEJFLGdCQUFnQkYsQ0FBQUEsbUNBQUFBLHFCQUFBQSxVQUFVSSxPQUFPLGNBQWpCSix5Q0FBQUEsbUJBQW1CUSxZQUFZLGNBQS9CUiw2Q0FBQUEsa0NBQW1DO1FBQ3JEO1FBRUFLLGVBQWVJLE9BQU8sQ0FBQ1QsVUFBVUksT0FBTztRQUV4QyxPQUFPO1lBQ0xDLGVBQWVLLFVBQVU7UUFDM0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFDQ0MsS0FBS1o7UUFDTEgsV0FBV2IsOENBQUVBLENBQUMsa0NBQWtDYTtRQUNoRGdCLE9BQU87WUFBRSxzQkFBc0JWO1FBQVM7a0JBRXZDUCxRQUFRa0IsTUFBTSxDQUFDbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyw0QkFDcEMsOERBQUNDO2dCQUVDckIsU0FBUyxFQUFFQyw0QkFBQUEsc0NBQUFBLGdCQUFrQm1CLGNBQWNyQixRQUFRSixNQUFNO2dCQUN6RHdCLFFBQVFBO2VBRkhDOzs7Ozs7Ozs7O0FBT2Y7R0E1Q1N0QjtLQUFBQTtBQWtEVCxTQUFTdUIsT0FBTyxLQUE0QztRQUE1QyxFQUFFRixNQUFNLEVBQUVuQixTQUFTLEVBQUUsR0FBR3NCLE9BQW9CLEdBQTVDO0lBQ2QsTUFBTUMsNEJBQTRCO1FBQ2hDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTUMsaUJBQ0pELHlCQUF5QixDQUN2QkUsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLDBCQUEwQjVCLE1BQU0sRUFDNUQ7SUFFSCxxQkFDRSw4REFBQ21CO1FBQ0NkLFdBQVdiLDhDQUFFQSxDQUNYLHlGQUNBYTtRQUVGZ0IsT0FBTztZQUFFUTtRQUFlO1FBQ3ZCLEdBQUdGLEtBQUs7a0JBRVQsNEVBQUNsQyw4Q0FBS0E7WUFBQytCLFFBQVFBOzs7Ozs7Ozs7OztBQUdyQjtNQTNCU0U7QUE2QlQsU0FBU087O0lBQ1AsTUFBTUMsZUFBZTlDLDZDQUFNQSxDQUF3QjtJQUNuRCxNQUFNK0MsV0FBVzVDLHdEQUFTQSxDQUFDMkMsY0FBYztRQUFFRSxNQUFNO1FBQU1DLFFBQVE7SUFBSTtJQUNuRSxNQUFNQyxVQUFVM0MsV0FBV0QsUUFBUTtJQUNuQyxNQUFNNkMsVUFBVUQsT0FBTyxDQUFDLEVBQUU7SUFDMUIsTUFBTUUsVUFBVUYsT0FBTyxDQUFDLEVBQUU7SUFDMUIsTUFBTUcsVUFBVTlDLFdBQVcyQyxPQUFPLENBQUMsRUFBRSxFQUFFO0lBRXZDLHFCQUNFLDhEQUFDbkI7UUFDQ0MsS0FBS2M7UUFDTDdCLFdBQVU7O1lBRVQ4Qix5QkFDQzs7a0NBQ0UsOERBQUNoQzt3QkFDQ0MsU0FBUzsrQkFBSW1DOytCQUFZRSxRQUFRQyxJQUFJOytCQUFPRjt5QkFBUTt3QkFDcERsQyxpQkFBaUIsQ0FBQ21CLGNBQ2hCakMsOENBQUVBLENBQUM7Z0NBQ0QsYUFBYWlDLGVBQWVjLFFBQVF2QyxNQUFNLEdBQUd5QyxPQUFPLENBQUMsRUFBRSxDQUFDekMsTUFBTTtnQ0FDOUQsYUFBYXlCLGVBQWVjLFFBQVF2QyxNQUFNOzRCQUM1Qzt3QkFFRk8sWUFBWTs7Ozs7O2tDQUVkLDhEQUFDSjt3QkFDQ0MsU0FBUzsrQkFBSW9DOytCQUFZQyxPQUFPLENBQUMsRUFBRTt5QkFBQzt3QkFDcENwQyxXQUFVO3dCQUNWQyxpQkFBaUIsQ0FBQ21CLGNBQ2hCQSxlQUFlZSxRQUFReEMsTUFBTSxHQUFHLGNBQWM7d0JBRWhETyxZQUFZOzs7Ozs7a0NBRWQsOERBQUNKO3dCQUNDQyxTQUFTcUMsUUFBUUMsSUFBSTt3QkFDckJyQyxXQUFVO3dCQUNWRSxZQUFZOzs7Ozs7OytCQUdkOzBCQUNKLDhEQUFDWTtnQkFBSWQsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDYztnQkFBSWQsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCO0lBNUNTNEI7O1FBRVUxQyxvREFBU0E7OztNQUZuQjBDO0FBOENGLFNBQVNVO0lBQ2QscUJBQ0UsOERBQUNyRCx3REFBZUE7UUFBQ2UsV0FBVTs7MEJBQ3pCLDhEQUFDdUM7Z0JBQ0NDLGVBQVk7Z0JBQ1pDLEtBQUk7Z0JBQ0p6QyxXQUFVOzs7Ozs7MEJBR1osOERBQUM0Qjs7Ozs7Ozs7Ozs7QUFHUDtNQVpnQlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3cy50c3g/OThiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1heFdpZHRoV3JhcHBlciBmcm9tIFwiLi9NYXhXaWR0aFdyYXBwZXJcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IFBob25lIGZyb20gXCIuL1Bob25lXCI7XG5cbmNvbnN0IFBIT05FUyA9IFtcbiAgXCIvaW1hZ2UvYnJhaW4ucG5nXCIsXG4gIFwiL2ltYWdlL2JyYWluLnBuZ1wiLFxuICBcIi9pbWFnZS9icmFpbi5wbmdcIixcbl07XG5cbmZ1bmN0aW9uIHNwbGl0QXJyYXk8VD4oYXJyYXk6IEFycmF5PFQ+LCBudW1QYXJ0czogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3VsdDogQXJyYXk8QXJyYXk8VD4+ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGluZGV4ID0gaSAlIG51bVBhcnRzO1xuICAgIGlmICghcmVzdWx0W2luZGV4XSkge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IFtdO1xuICAgIH1cbiAgICByZXN1bHRbaW5kZXhdLnB1c2goYXJyYXlbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gUmV2aWV3Q29sdW1uKHtcbiAgcmV2aWV3cyxcbiAgY2xhc3NOYW1lLFxuICByZXZpZXdDbGFzc05hbWUsXG4gIG1zUGVyUGl4ZWwgPSAwLFxufToge1xuICByZXZpZXdzOiBzdHJpbmdbXTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICByZXZpZXdDbGFzc05hbWU/OiAocmV2aWV3SW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBtc1BlclBpeGVsPzogbnVtYmVyO1xufSkge1xuICBjb25zdCBjb2x1bW5SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2NvbHVtbkhlaWdodCwgc2V0Q29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBkdXJhdGlvbiA9IGAke2NvbHVtbkhlaWdodCAqIG1zUGVyUGl4ZWx9bXNgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjb2x1bW5SZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgd2luZG93LlJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgIHNldENvbHVtbkhlaWdodChjb2x1bW5SZWYuY3VycmVudD8ub2Zmc2V0SGVpZ2h0ID8/IDApO1xuICAgIH0pO1xuXG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShjb2x1bW5SZWYuY3VycmVudCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29sdW1uUmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcImFuaW1hdGUtbWFycXVlZSBzcGFjZS15LTggcHktNFwiLCBjbGFzc05hbWUpfVxuICAgICAgc3R5bGU9e3sgXCItLW1hcnF1ZWUtZHVyYXRpb25cIjogZHVyYXRpb24gfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuICAgID5cbiAgICAgIHtyZXZpZXdzLmNvbmNhdChyZXZpZXdzKS5tYXAoKGltZ1NyYywgcmV2aWV3SW5kZXgpID0+IChcbiAgICAgICAgPFJldmlld1xuICAgICAgICAgIGtleT17cmV2aWV3SW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtyZXZpZXdDbGFzc05hbWU/LihyZXZpZXdJbmRleCAlIHJldmlld3MubGVuZ3RoKX1cbiAgICAgICAgICBpbWdTcmM9e2ltZ1NyY31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5pbnRlcmZhY2UgUmV2aWV3UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBpbWdTcmM6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gUmV2aWV3KHsgaW1nU3JjLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJldmlld1Byb3BzKSB7XG4gIGNvbnN0IFBPU1NJQkxFX0FOSU1BVElPTl9ERUxBWVMgPSBbXG4gICAgXCIwc1wiLFxuICAgIFwiMC4xc1wiLFxuICAgIFwiMC4yc1wiLFxuICAgIFwiMC4zc1wiLFxuICAgIFwiMC40c1wiLFxuICAgIFwiMC41c1wiLFxuICBdO1xuXG4gIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID1cbiAgICBQT1NTSUJMRV9BTklNQVRJT05fREVMQVlTW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogUE9TU0lCTEVfQU5JTUFUSU9OX0RFTEFZUy5sZW5ndGgpXG4gICAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiYW5pbWF0ZS1mYWRlLWluIHJvdW5kZWQtWzIuMjVyZW1dIGJnLXdoaXRlIHAtNiBvcGFjaXR5LTAgc2hhZG93LXhsIHNoYWRvdy1zbGF0ZS05MDAvNVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICBzdHlsZT17eyBhbmltYXRpb25EZWxheSB9fVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxQaG9uZSBpbWdTcmM9e2ltZ1NyY30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmV2aWV3R3JpZCgpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KGNvbnRhaW5lclJlZiwgeyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuNCB9KTtcbiAgY29uc3QgY29sdW1ucyA9IHNwbGl0QXJyYXkoUEhPTkVTLCAzKTtcbiAgY29uc3QgY29sdW1uMSA9IGNvbHVtbnNbMF07XG4gIGNvbnN0IGNvbHVtbjIgPSBjb2x1bW5zWzFdO1xuICBjb25zdCBjb2x1bW4zID0gc3BsaXRBcnJheShjb2x1bW5zWzJdLCAyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgLW14LTQgbXQtMTYgZ3JpZCBoLVs0OXJlbV0gbWF4LWgtWzE1MHZoXSBncmlkLWNvbHMtMSBpdGVtcy1zdGFydCBnYXAtOCBvdmVyZmxvdy1oaWRkZW4gcHgtNCBzbTptdC0yMCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiXG4gICAgPlxuICAgICAge2lzSW5WaWV3ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxSZXZpZXdDb2x1bW5cbiAgICAgICAgICAgIHJldmlld3M9e1suLi5jb2x1bW4xLCAuLi5jb2x1bW4zLmZsYXQoKSwgLi4uY29sdW1uMl19XG4gICAgICAgICAgICByZXZpZXdDbGFzc05hbWU9eyhyZXZpZXdJbmRleCkgPT5cbiAgICAgICAgICAgICAgY24oe1xuICAgICAgICAgICAgICAgIFwibWQ6aGlkZGVuXCI6IHJldmlld0luZGV4ID49IGNvbHVtbjEubGVuZ3RoICsgY29sdW1uM1swXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgXCJsZzpoaWRkZW5cIjogcmV2aWV3SW5kZXggPj0gY29sdW1uMS5sZW5ndGgsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtc1BlclBpeGVsPXsxMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSZXZpZXdDb2x1bW5cbiAgICAgICAgICAgIHJldmlld3M9e1suLi5jb2x1bW4yLCAuLi5jb2x1bW4zWzFdXX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgICByZXZpZXdDbGFzc05hbWU9eyhyZXZpZXdJbmRleCkgPT5cbiAgICAgICAgICAgICAgcmV2aWV3SW5kZXggPj0gY29sdW1uMi5sZW5ndGggPyBcImxnOmhpZGRlblwiIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXNQZXJQaXhlbD17MTV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmV2aWV3Q29sdW1uXG4gICAgICAgICAgICByZXZpZXdzPXtjb2x1bW4zLmZsYXQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgICBtc1BlclBpeGVsPXsxMH1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXgtMCB0b3AtMCBoLTMyIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1zbGF0ZS0xMDBcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBoLTMyIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS0xMDBcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmV2aWV3cygpIHtcbiAgcmV0dXJuIChcbiAgICA8TWF4V2lkdGhXcmFwcGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LTV4bFwiPlxuICAgICAgPGltZ1xuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBzcmM9XCIvd2hhdC1wZW9wbGUtYXJlLWJ1eWluZy5wbmdcIlxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBzZWxlY3Qtbm9uZSBoaWRkZW4geGw6YmxvY2sgLWxlZnQtMzIgdG9wLTEvM1wiXG4gICAgICAvPlxuXG4gICAgICA8UmV2aWV3R3JpZCAvPlxuICAgIDwvTWF4V2lkdGhXcmFwcGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTWF4V2lkdGhXcmFwcGVyIiwidXNlSW5WaWV3IiwiY24iLCJQaG9uZSIsIlBIT05FUyIsInNwbGl0QXJyYXkiLCJhcnJheSIsIm51bVBhcnRzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImluZGV4IiwicHVzaCIsIlJldmlld0NvbHVtbiIsInJldmlld3MiLCJjbGFzc05hbWUiLCJyZXZpZXdDbGFzc05hbWUiLCJtc1BlclBpeGVsIiwiY29sdW1uUmVmIiwiY29sdW1uSGVpZ2h0Iiwic2V0Q29sdW1uSGVpZ2h0IiwiZHVyYXRpb24iLCJjdXJyZW50IiwicmVzaXplT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJSZXNpemVPYnNlcnZlciIsIm9mZnNldEhlaWdodCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwicmVmIiwic3R5bGUiLCJjb25jYXQiLCJtYXAiLCJpbWdTcmMiLCJyZXZpZXdJbmRleCIsIlJldmlldyIsInByb3BzIiwiUE9TU0lCTEVfQU5JTUFUSU9OX0RFTEFZUyIsImFuaW1hdGlvbkRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUmV2aWV3R3JpZCIsImNvbnRhaW5lclJlZiIsImlzSW5WaWV3Iiwib25jZSIsImFtb3VudCIsImNvbHVtbnMiLCJjb2x1bW4xIiwiY29sdW1uMiIsImNvbHVtbjMiLCJmbGF0IiwiUmV2aWV3cyIsImltZyIsImFyaWEtaGlkZGVuIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Reviews.tsx\n"));

/***/ })

});