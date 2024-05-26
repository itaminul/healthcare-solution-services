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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Reviews: function() { return /* binding */ Reviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaxWidthWrapper */ \"(app-pages-browser)/./src/components/MaxWidthWrapper.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ Reviews auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst PHONES = [\n    \"/image/brain.png\",\n    \"/image/certificate.png\",\n    \"/image/doctor.png\",\n    \"/image/kidneys.png\",\n    \"/image/kidneys.png\",\n    \"/image/kidneys.png\",\n    \"/image/kidneys.png\"\n];\nfunction splitArray(array, numParts) {\n    const result = [];\n    for(let i = 0; i < array.length; i++){\n        const index = i % numParts;\n        if (!result[index]) {\n            result[index] = [];\n        }\n        result[index].push(array[i]);\n    }\n    return result;\n}\nfunction ReviewColumn(param) {\n    let { reviews, className, reviewClassName, msPerPixel = 0 } = param;\n    _s();\n    const columnRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [columnHeight, setColumnHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const duration = \"\".concat(columnHeight * msPerPixel, \"ms\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!columnRef.current) return;\n        const resizeObserver = new window.ResizeObserver(()=>{\n            var _columnRef_current;\n            var _columnRef_current_offsetHeight;\n            setColumnHeight((_columnRef_current_offsetHeight = (_columnRef_current = columnRef.current) === null || _columnRef_current === void 0 ? void 0 : _columnRef_current.offsetHeight) !== null && _columnRef_current_offsetHeight !== void 0 ? _columnRef_current_offsetHeight : 0);\n        });\n        resizeObserver.observe(columnRef.current);\n        return ()=>{\n            resizeObserver.disconnect();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: columnRef,\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"animate-marquee space-y-8 py-4\", className),\n        style: {\n            \"--marquee-duration\": duration\n        },\n        children: reviews.concat(reviews).map((imgSrc, reviewIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Review, {\n                className: reviewClassName === null || reviewClassName === void 0 ? void 0 : reviewClassName(reviewIndex % reviews.length),\n                imgSrc: imgSrc\n            }, reviewIndex, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(ReviewColumn, \"mkt8yNzb30lZ75hp9nBj47jSc3c=\");\n_c = ReviewColumn;\nfunction Review(param) {\n    let { imgSrc, className, ...props } = param;\n    const POSSIBLE_ANIMATION_DELAYS = [\n        \"0s\",\n        \"0.1s\",\n        \"0.2s\",\n        \"0.3s\",\n        \"0.4s\",\n        \"0.5s\"\n    ];\n    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5\", className),\n        style: {\n            animationDelay\n        },\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            Src: imgSrc\n        }, void 0, false, {\n            fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Review;\nfunction ReviewGrid() {\n    _s1();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(containerRef, {\n        once: true,\n        amount: 0.4\n    });\n    const columns = splitArray(PHONES, 3);\n    const column1 = columns[0];\n    const column2 = columns[1];\n    const column3 = splitArray(columns[2], 2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3\",\n        children: [\n            isInView ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: [\n                            ...column1,\n                            ...column3.flat(),\n                            ...column2\n                        ],\n                        reviewClassName: (reviewIndex)=>(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)({\n                                \"md:hidden\": reviewIndex >= column1.length + column3[0].length,\n                                \"lg:hidden\": reviewIndex >= column1.length\n                            }),\n                        msPerPixel: 10\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: [\n                            ...column2,\n                            ...column3[1]\n                        ],\n                        className: \"hidden md:block\",\n                        reviewClassName: (reviewIndex)=>reviewIndex >= column2.length ? \"lg:hidden\" : \"\",\n                        msPerPixel: 15\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewColumn, {\n                        reviews: column3.flat(),\n                        className: \"hidden md:block\",\n                        msPerPixel: 10\n                    }, void 0, false, {\n                        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_s1(ReviewGrid, \"hvnFWowFZr91hrGSGv4CrGY9JhA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c2 = ReviewGrid;\nfunction Reviews() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"relative max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                \"aria-hidden\": \"true\",\n                src: \"/what-people-are-buying.png\",\n                className: \"absolute select-none hidden xl:block -left-32 top-1/3\"\n            }, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReviewGrid, {}, void 0, false, {\n                fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/aminul/BEND/front/healthcare-solution-services/src/components/Reviews.tsx\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, this);\n}\n_c3 = Reviews;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ReviewColumn\");\n$RefreshReg$(_c1, \"Review\");\n$RefreshReg$(_c2, \"ReviewGrid\");\n$RefreshReg$(_c3, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Jldmlld3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVvRTtBQUNwQjtBQUNOO0FBQ1Q7QUFHakMsTUFBTU0sU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQyxXQUFjQyxLQUFlLEVBQUVDLFFBQWdCO0lBQ3RELE1BQU1DLFNBQTBCLEVBQUU7SUFFbEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1JLE1BQU0sRUFBRUQsSUFBSztRQUNyQyxNQUFNRSxRQUFRRixJQUFJRjtRQUNsQixJQUFJLENBQUNDLE1BQU0sQ0FBQ0csTUFBTSxFQUFFO1lBQ2xCSCxNQUFNLENBQUNHLE1BQU0sR0FBRyxFQUFFO1FBQ3BCO1FBQ0FILE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0csRUFBRTtJQUM3QjtJQUVBLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTSyxhQUFhLEtBVXJCO1FBVnFCLEVBQ3BCQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsZUFBZSxFQUNmQyxhQUFhLENBQUMsRUFNZixHQVZxQjs7SUFXcEIsTUFBTUMsWUFBWW5CLDZDQUFNQSxDQUF3QjtJQUNoRCxNQUFNLENBQUNvQixjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1xQixXQUFXLEdBQTZCLE9BQTFCRixlQUFlRixZQUFXO0lBRTlDbkIsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNvQixVQUFVSSxPQUFPLEVBQUU7UUFFeEIsTUFBTUMsaUJBQWlCLElBQUlDLE9BQU9DLGNBQWMsQ0FBQztnQkFDL0JQO2dCQUFBQTtZQUFoQkUsZ0JBQWdCRixDQUFBQSxtQ0FBQUEscUJBQUFBLFVBQVVJLE9BQU8sY0FBakJKLHlDQUFBQSxtQkFBbUJRLFlBQVksY0FBL0JSLDZDQUFBQSxrQ0FBbUM7UUFDckQ7UUFFQUssZUFBZUksT0FBTyxDQUFDVCxVQUFVSSxPQUFPO1FBRXhDLE9BQU87WUFDTEMsZUFBZUssVUFBVTtRQUMzQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxLQUFLWjtRQUNMSCxXQUFXWiw4Q0FBRUEsQ0FBQyxrQ0FBa0NZO1FBQ2hEZ0IsT0FBTztZQUFFLHNCQUFzQlY7UUFBUztrQkFFdkNQLFFBQVFrQixNQUFNLENBQUNsQixTQUFTbUIsR0FBRyxDQUFDLENBQUNDLFFBQVFDLDRCQUNwQyw4REFBQ0M7Z0JBRUNyQixTQUFTLEVBQUVDLDRCQUFBQSxzQ0FBQUEsZ0JBQWtCbUIsY0FBY3JCLFFBQVFKLE1BQU07Z0JBQ3pEd0IsUUFBUUE7ZUFGSEM7Ozs7Ozs7Ozs7QUFPZjtHQTVDU3RCO0tBQUFBO0FBa0RULFNBQVN1QixPQUFPLEtBQTRDO1FBQTVDLEVBQUVGLE1BQU0sRUFBRW5CLFNBQVMsRUFBRSxHQUFHc0IsT0FBb0IsR0FBNUM7SUFDZCxNQUFNQyw0QkFBNEI7UUFDaEM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNQyxpQkFDSkQseUJBQXlCLENBQ3ZCRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osMEJBQTBCNUIsTUFBTSxFQUM1RDtJQUVILHFCQUNFLDhEQUFDbUI7UUFDQ2QsV0FBV1osOENBQUVBLENBQ1gseUZBQ0FZO1FBRUZnQixPQUFPO1lBQUVRO1FBQWU7UUFDdkIsR0FBR0YsS0FBSztrQkFFVCw0RUFBQ007WUFBSUMsS0FBS1Y7Ozs7Ozs7Ozs7O0FBR2hCO01BM0JTRTtBQTZCVCxTQUFTUzs7SUFDUCxNQUFNQyxlQUFlL0MsNkNBQU1BLENBQXdCO0lBQ25ELE1BQU1nRCxXQUFXN0Msd0RBQVNBLENBQUM0QyxjQUFjO1FBQUVFLE1BQU07UUFBTUMsUUFBUTtJQUFJO0lBQ25FLE1BQU1DLFVBQVU3QyxXQUFXRCxRQUFRO0lBQ25DLE1BQU0rQyxVQUFVRCxPQUFPLENBQUMsRUFBRTtJQUMxQixNQUFNRSxVQUFVRixPQUFPLENBQUMsRUFBRTtJQUMxQixNQUFNRyxVQUFVaEQsV0FBVzZDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7SUFFdkMscUJBQ0UsOERBQUNyQjtRQUNDQyxLQUFLZ0I7UUFDTC9CLFdBQVU7O1lBRVRnQyx5QkFDQzs7a0NBQ0UsOERBQUNsQzt3QkFDQ0MsU0FBUzsrQkFBSXFDOytCQUFZRSxRQUFRQyxJQUFJOytCQUFPRjt5QkFBUTt3QkFDcERwQyxpQkFBaUIsQ0FBQ21CLGNBQ2hCaEMsOENBQUVBLENBQUM7Z0NBQ0QsYUFBYWdDLGVBQWVnQixRQUFRekMsTUFBTSxHQUFHMkMsT0FBTyxDQUFDLEVBQUUsQ0FBQzNDLE1BQU07Z0NBQzlELGFBQWF5QixlQUFlZ0IsUUFBUXpDLE1BQU07NEJBQzVDO3dCQUVGTyxZQUFZOzs7Ozs7a0NBRWQsOERBQUNKO3dCQUNDQyxTQUFTOytCQUFJc0M7K0JBQVlDLE9BQU8sQ0FBQyxFQUFFO3lCQUFDO3dCQUNwQ3RDLFdBQVU7d0JBQ1ZDLGlCQUFpQixDQUFDbUIsY0FDaEJBLGVBQWVpQixRQUFRMUMsTUFBTSxHQUFHLGNBQWM7d0JBRWhETyxZQUFZOzs7Ozs7a0NBRWQsOERBQUNKO3dCQUNDQyxTQUFTdUMsUUFBUUMsSUFBSTt3QkFDckJ2QyxXQUFVO3dCQUNWRSxZQUFZOzs7Ozs7OytCQUdkOzBCQUNKLDhEQUFDWTtnQkFBSWQsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDYztnQkFBSWQsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCO0lBNUNTOEI7O1FBRVUzQyxvREFBU0E7OztNQUZuQjJDO0FBOENGLFNBQVNVO0lBQ2QscUJBQ0UsOERBQUN0RCx3REFBZUE7UUFBQ2MsV0FBVTs7MEJBQ3pCLDhEQUFDNEI7Z0JBQ0NhLGVBQVk7Z0JBQ1pDLEtBQUk7Z0JBQ0oxQyxXQUFVOzs7Ozs7MEJBR1osOERBQUM4Qjs7Ozs7Ozs7Ozs7QUFHUDtNQVpnQlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3cy50c3g/OThiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1heFdpZHRoV3JhcHBlciBmcm9tIFwiLi9NYXhXaWR0aFdyYXBwZXJcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IFBob25lIGZyb20gXCIuL1Bob25lXCI7XG5cbmNvbnN0IFBIT05FUyA9IFtcbiAgXCIvaW1hZ2UvYnJhaW4ucG5nXCIsXG4gIFwiL2ltYWdlL2NlcnRpZmljYXRlLnBuZ1wiLFxuICBcIi9pbWFnZS9kb2N0b3IucG5nXCIsXG4gIFwiL2ltYWdlL2tpZG5leXMucG5nXCIsXG4gIFwiL2ltYWdlL2tpZG5leXMucG5nXCIsXG4gIFwiL2ltYWdlL2tpZG5leXMucG5nXCIsXG4gIFwiL2ltYWdlL2tpZG5leXMucG5nXCIsXG5dO1xuXG5mdW5jdGlvbiBzcGxpdEFycmF5PFQ+KGFycmF5OiBBcnJheTxUPiwgbnVtUGFydHM6IG51bWJlcikge1xuICBjb25zdCByZXN1bHQ6IEFycmF5PEFycmF5PFQ+PiA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbmRleCA9IGkgJSBudW1QYXJ0cztcbiAgICBpZiAoIXJlc3VsdFtpbmRleF0pIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBbXTtcbiAgICB9XG4gICAgcmVzdWx0W2luZGV4XS5wdXNoKGFycmF5W2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIFJldmlld0NvbHVtbih7XG4gIHJldmlld3MsXG4gIGNsYXNzTmFtZSxcbiAgcmV2aWV3Q2xhc3NOYW1lLFxuICBtc1BlclBpeGVsID0gMCxcbn06IHtcbiAgcmV2aWV3czogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcmV2aWV3Q2xhc3NOYW1lPzogKHJldmlld0luZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgbXNQZXJQaXhlbD86IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgY29sdW1uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjb2x1bW5IZWlnaHQsIHNldENvbHVtbkhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZHVyYXRpb24gPSBgJHtjb2x1bW5IZWlnaHQgKiBtc1BlclBpeGVsfW1zYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY29sdW1uUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBzZXRDb2x1bW5IZWlnaHQoY29sdW1uUmVmLmN1cnJlbnQ/Lm9mZnNldEhlaWdodCA/PyAwKTtcbiAgICB9KTtcblxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY29sdW1uUmVmLmN1cnJlbnQpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e2NvbHVtblJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJhbmltYXRlLW1hcnF1ZWUgc3BhY2UteS04IHB5LTRcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHN0eWxlPXt7IFwiLS1tYXJxdWVlLWR1cmF0aW9uXCI6IGR1cmF0aW9uIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc31cbiAgICA+XG4gICAgICB7cmV2aWV3cy5jb25jYXQocmV2aWV3cykubWFwKChpbWdTcmMsIHJldmlld0luZGV4KSA9PiAoXG4gICAgICAgIDxSZXZpZXdcbiAgICAgICAgICBrZXk9e3Jldmlld0luZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT17cmV2aWV3Q2xhc3NOYW1lPy4ocmV2aWV3SW5kZXggJSByZXZpZXdzLmxlbmd0aCl9XG4gICAgICAgICAgaW1nU3JjPXtpbWdTcmN9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIFJldmlld1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFJldmlldyh7IGltZ1NyYywgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZXZpZXdQcm9wcykge1xuICBjb25zdCBQT1NTSUJMRV9BTklNQVRJT05fREVMQVlTID0gW1xuICAgIFwiMHNcIixcbiAgICBcIjAuMXNcIixcbiAgICBcIjAuMnNcIixcbiAgICBcIjAuM3NcIixcbiAgICBcIjAuNHNcIixcbiAgICBcIjAuNXNcIixcbiAgXTtcblxuICBjb25zdCBhbmltYXRpb25EZWxheSA9XG4gICAgUE9TU0lCTEVfQU5JTUFUSU9OX0RFTEFZU1tcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFBPU1NJQkxFX0FOSU1BVElPTl9ERUxBWVMubGVuZ3RoKVxuICAgIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImFuaW1hdGUtZmFkZS1pbiByb3VuZGVkLVsyLjI1cmVtXSBiZy13aGl0ZSBwLTYgb3BhY2l0eS0wIHNoYWRvdy14bCBzaGFkb3ctc2xhdGUtOTAwLzVcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXkgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aW1nIFNyYz17aW1nU3JjfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBSZXZpZXdHcmlkKCkge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcoY29udGFpbmVyUmVmLCB7IG9uY2U6IHRydWUsIGFtb3VudDogMC40IH0pO1xuICBjb25zdCBjb2x1bW5zID0gc3BsaXRBcnJheShQSE9ORVMsIDMpO1xuICBjb25zdCBjb2x1bW4xID0gY29sdW1uc1swXTtcbiAgY29uc3QgY29sdW1uMiA9IGNvbHVtbnNbMV07XG4gIGNvbnN0IGNvbHVtbjMgPSBzcGxpdEFycmF5KGNvbHVtbnNbMl0sIDIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSAtbXgtNCBtdC0xNiBncmlkIGgtWzQ5cmVtXSBtYXgtaC1bMTUwdmhdIGdyaWQtY29scy0xIGl0ZW1zLXN0YXJ0IGdhcC04IG92ZXJmbG93LWhpZGRlbiBweC00IHNtOm10LTIwIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCJcbiAgICA+XG4gICAgICB7aXNJblZpZXcgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFJldmlld0NvbHVtblxuICAgICAgICAgICAgcmV2aWV3cz17Wy4uLmNvbHVtbjEsIC4uLmNvbHVtbjMuZmxhdCgpLCAuLi5jb2x1bW4yXX1cbiAgICAgICAgICAgIHJldmlld0NsYXNzTmFtZT17KHJldmlld0luZGV4KSA9PlxuICAgICAgICAgICAgICBjbih7XG4gICAgICAgICAgICAgICAgXCJtZDpoaWRkZW5cIjogcmV2aWV3SW5kZXggPj0gY29sdW1uMS5sZW5ndGggKyBjb2x1bW4zWzBdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBcImxnOmhpZGRlblwiOiByZXZpZXdJbmRleCA+PSBjb2x1bW4xLmxlbmd0aCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1zUGVyUGl4ZWw9ezEwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJldmlld0NvbHVtblxuICAgICAgICAgICAgcmV2aWV3cz17Wy4uLmNvbHVtbjIsIC4uLmNvbHVtbjNbMV1dfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgIHJldmlld0NsYXNzTmFtZT17KHJldmlld0luZGV4KSA9PlxuICAgICAgICAgICAgICByZXZpZXdJbmRleCA+PSBjb2x1bW4yLmxlbmd0aCA/IFwibGc6aGlkZGVuXCIgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtc1BlclBpeGVsPXsxNX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSZXZpZXdDb2x1bW5cbiAgICAgICAgICAgIHJldmlld3M9e2NvbHVtbjMuZmxhdCgpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgIG1zUGVyUGl4ZWw9ezEwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteC0wIHRvcC0wIGgtMzIgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXNsYXRlLTEwMFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGgtMzIgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTEwMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXZpZXdzKCkge1xuICByZXR1cm4gKFxuICAgIDxNYXhXaWR0aFdyYXBwZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctNXhsXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIHNyYz1cIi93aGF0LXBlb3BsZS1hcmUtYnV5aW5nLnBuZ1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNlbGVjdC1ub25lIGhpZGRlbiB4bDpibG9jayAtbGVmdC0zMiB0b3AtMS8zXCJcbiAgICAgIC8+XG5cbiAgICAgIDxSZXZpZXdHcmlkIC8+XG4gICAgPC9NYXhXaWR0aFdyYXBwZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXhXaWR0aFdyYXBwZXIiLCJ1c2VJblZpZXciLCJjbiIsIlBIT05FUyIsInNwbGl0QXJyYXkiLCJhcnJheSIsIm51bVBhcnRzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImluZGV4IiwicHVzaCIsIlJldmlld0NvbHVtbiIsInJldmlld3MiLCJjbGFzc05hbWUiLCJyZXZpZXdDbGFzc05hbWUiLCJtc1BlclBpeGVsIiwiY29sdW1uUmVmIiwiY29sdW1uSGVpZ2h0Iiwic2V0Q29sdW1uSGVpZ2h0IiwiZHVyYXRpb24iLCJjdXJyZW50IiwicmVzaXplT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJSZXNpemVPYnNlcnZlciIsIm9mZnNldEhlaWdodCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZGl2IiwicmVmIiwic3R5bGUiLCJjb25jYXQiLCJtYXAiLCJpbWdTcmMiLCJyZXZpZXdJbmRleCIsIlJldmlldyIsInByb3BzIiwiUE9TU0lCTEVfQU5JTUFUSU9OX0RFTEFZUyIsImFuaW1hdGlvbkRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW1nIiwiU3JjIiwiUmV2aWV3R3JpZCIsImNvbnRhaW5lclJlZiIsImlzSW5WaWV3Iiwib25jZSIsImFtb3VudCIsImNvbHVtbnMiLCJjb2x1bW4xIiwiY29sdW1uMiIsImNvbHVtbjMiLCJmbGF0IiwiUmV2aWV3cyIsImFyaWEtaGlkZGVuIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Reviews.tsx\n"));

/***/ })

});