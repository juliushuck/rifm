webpackHotUpdate("static/development/pages/material-ui.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/core-js/library/fn/number/is-nan.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/parse-int */ "./node_modules/core-js/library/fn/number/parse-int.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-nan.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-nan.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/core-js/library/modules/es6.number.is-nan.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.isNaN;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/parse-int.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/parse-int.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.parse-int */ "./node_modules/core-js/library/modules/es6.number.parse-int.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-nan.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-nan.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.parse-int.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.parse-int.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./pages/material-ui/index.js":
/*!************************************!*\
  !*** ./pages/material-ui/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/number/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rifm */ "./dist/rifm.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "/Users/bogdancadkin/host/rifm/pages/material-ui/index.js";




var integerAccept = /\d+/g;

var parseInteger = function parseInteger(string) {
  return (string.match(integerAccept) || []).join('');
};

var formatInteger = function formatInteger(string) {
  var parsed = parseInteger(string);

  var number = _babel_runtime_corejs2_core_js_number_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(parsed, 10);

  if (_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default()(number)) {
    return '';
  }

  return number.toLocaleString('en');
};

var Example = function Example() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      number = _React$useState2[0],
      setNumber = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Number format with material-ui text field"), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rifm__WEBPACK_IMPORTED_MODULE_5__["Rifm"], {
    format: parseInteger,
    value: number,
    onChange: setNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref) {
    var value = _ref.value,
        onChange = _ref.onChange;
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
      type: "tel",
      variant: "filled",
      label: "Number input",
      placeholder: "Enter number...",
      value: value,
      onChange: onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }));
};

if (typeof document !== 'undefined') {
  var root = document.getElementById('root');

  if (root) {
    react_dom__WEBPACK_IMPORTED_MODULE_4__["render"](react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Example, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }), root);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=material-ui.js.d78a5f65ea1279dda8be.hot-update.js.map