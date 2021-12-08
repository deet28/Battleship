/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n  background-color: white;\\n}\\n.headers{\\n  display:flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\\n}\\n.game-text{\\n  font-size: 22px;\\n}\\n.title{\\n  text-align:center;\\n  font-size: 36px;\\n\\n}\\n.button-div{\\n  margin-top:2rem;\\n  margin-bottom:0%;\\n  display:flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items:center;\\n}\\n.make-player{\\n  width:8rem;\\n  height:2rem;\\n  height:30px;\\n  font-size:18px;\\n}\\n.make-player:hover{\\n  cursor: pointer;\\n}\\n.submit{\\n  width:8rem;\\n  height:2rem;\\n  height:30px;\\n  font-size:18px;\\n}\\n.submit:hover{\\n  cursor: pointer;\\n}\\n.enter-name{\\n  margin-bottom:2rem;\\n  height:1.5rem;\\n  width:15rem;\\n  text-align: center;\\n  font-size: 22px;\\n  border: 1px solid gray;\\n}\\n.axis-button{\\n  width:8rem;\\n  height:2rem;\\n  height:30px;\\n  font-size: 18px;\\n}\\n.axis-button:hover{\\n  cursor: pointer;\\n}\\n.game-div{\\n  display:grid;\\n  grid-template-columns: 1fr 1fr;\\n  justify-content: center;\\n  flex-direction: row;\\n  grid-gap:10px;\\n  min-height: 400px;\\n  min-width:100%;\\n  margin-top:5rem;\\n}\\n\\n.choose-ships-board{\\n  max-height: 600px;\\n  max-width:500px;\\n  border:1px solid black;\\n  grid-template-columns: repeat(10, [col] 1fr);\\n  grid-template-rows: repeat(10, [row] 1fr);\\n}\\n.player-one-board{\\n  max-height: 400px;\\n  max-width:350px;\\n  border:1px solid black;\\n  display:grid;\\n  grid-template-columns: repeat(10, [col] 1fr);\\n  grid-template-rows: repeat(10, [row] 1fr);\\n  margin-left: 7%;\\n}\\n.player-one-tile{\\n  border: 1px solid lightgray;\\n}\\n.place-ship-tile:hover{\\n  cursor:pointer;\\n  border:1px solid black;\\n}\\n.attack-ship-tile:hover{\\n  cursor:pointer;\\n  border: 1px solid black;\\n}\\n\\n.player-two-board{\\n  max-height: 400px;\\n  max-width:350px;\\n  border:1px solid black;\\n  display:grid;\\n  grid-template-columns: repeat(10, [col] 1fr);\\n  grid-template-rows: repeat(10, [row] 1fr);\\n  margin-left:15%;\\n}\\n.player-two-tile{\\n  border: 1px solid lightgray;\\n}\\n.player-names{\\n  display:flex;\\n  flex-direction: row;\\n  align-content: space-evenly;\\n  justify-content: space-evenly;\\n}\\n\\n.start-game{\\n  display:flex;\\n  justify-content: center;\\n  margin-top:3rem;\\n}\\n.start-button{\\n  height:2rem;\\n  width:8rem;\\n  font-size: 18px;\\n}\\n.start-button:hover{\\n  cursor:pointer;\\n}\\n.red-test{\\n  background-color: red;\\n}\\n.attack-landed{\\n  background-color: red;\\n}\\n.attack-missed{\\n  background-color: grey;\\n}\\n.piece-hover{\\n  background-color: green;\\n}\\n.piece-placed{\\n  background-color: blue;\\n}\\n\\n.restart-div{\\n  display:flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.restart{\\n  width:8rem;\\n  height:2rem;\\n  height:30px;\\n  font-size: 18px;\\n  margin-top:1rem;\\n}\\n.restart:hover{\\n  cursor:pointer;\\n}\\n.hidden{\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Factories/gameboard.js":
/*!************************************!*\
  !*** ./src/Factories/gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__ (/*! ./ship */ \"./src/Factories/ship.js\");\nconst Player = __webpack_require__(/*! ./player.js */ \"./src/Factories/player.js\");\n\nclass Gameboard {\n  constructor(){\n    this.ships = {};\n    this.shipsPlaced = 0;\n    this.missedShots = [];\n    this.shipsSunk = 0;\n    this.xAxis = true;\n    this.gameGrid = Array(10).fill().map(()=>Array(10).fill());\n    let placeCount = 0;\n\n    this.ships.carrierShip = new Ship('Carrier',5,true);\n    this.ships.destroyerShip = new Ship('Destroyer',4,false);\n    this.ships.battleShip = new Ship ('Battleship',3,false);\n    this.ships.submarine = new Ship ('Submarine',3,false);\n    this.ships.patrolBoat = new Ship ('Patrol Boat',2,false);\n\n    this.changeShip = function(input){\n      let tempVar = 0;\n      Object.values(input).forEach(val => {\n        if(val.placing == true){\n          val.placing = 'placed';\n         }\n      });\n      Object.values(input).forEach(val => {\n        while(tempVar < 1){\n          if(val.placing === false){\n            val.placing = true;\n            tempVar++;\n          }\n          return tempVar;\n        }\n      });\n    }\n\n    this.placeShips = function(ship,input){\n      if (this.xAxis === true){\n        let coord = this.getCoord (input);\n        let row = coord[0];\n        let col = coord[1];\n        if(ship.length + col > 10){\n          return false; \n        } else if (this.freeSpaceX(ship,row,col) === false){\n          return false;\n        } else {\n          for(let i = 0; i < ship.length; i++){\n            this.gameGrid[row][col+i] = ship.name;\n            let array = [];\n            array[0] = row;\n            array[1] = col+i;\n          }\n          this.shipsPlaced ++;\n          this.changeShip(this.ships);\n          return this.gameGrid;\n        } \n        } else if(this.xAxis === false){  \n          let coord = this.getCoord (input);\n          let row = coord[0];\n          let col = coord[1];\n        if (ship.length + row > 10){\n          return false;\n        } else if (this.freeSpaceY(ship,row,col) === false){\n          return false;\n        } else {\n          for(let i = 0; i < ship.length; i++){\n            this.gameGrid[row+i][col] = ship.name;\n          }\n          this.shipsPlaced++;\n          this.changeShip(this.ships);\n          return this.gameGrid;\n        }  \n      }\n    }\n    \n    this.freeSpaceX = function(ship,row,col){\n      let checkSpace = 0;\n        for(let i = 0; i < ship.length; i++){\n          if (this.gameGrid[row][col+i] === undefined){\n            checkSpace++;\n          }\n        }\n          if(checkSpace === ship.length){\n            checkSpace = 0;\n            return true;\n          }else{\n          return false;\n        } \n      }\n      this.freeSpaceY = function(ship,row,col){\n        let checkSpace = 0;\n        for(let i = 0; i < ship.length; i++){\n          if(this.gameGrid[row+i][col] === undefined){\n            checkSpace++;\n          }\n        }\n          if(checkSpace === ship.length){\n            checkSpace = 0;\n            return true;\n          } else {\n            return false;\n        }\n      }\n\n    this.computerPlaceShips = function(){\n      let input;\n      Object.values(this.ships).forEach(val => {\n      inner:while(placeCount < 5){\n      let random = this.randomCoords();\n      if (random[0] === 0){\n      input = random[1];\n      } else {\n      input = random.join('');\n      this.randomAxis();\n       if(this.placeShips(val,input)===false){\n        continue inner;\n      } else {\n        this.placeShips(val,input);\n        placeCount++;\n        return this.gameGrid;\n        } \n        }  \n      }\n    });\n    return check(this.gameGrid);\n  }\n  this.receiveAttack = function(input){\n    let coords;\n    let row;\n    let col;\n    if (this.getCoord(input)==false){\n      row = input[0];\n      col = input[1];\n    } else {\n      coords = this.getCoord(input);\n      row = coords[0];\n      col = coords[1];\n    }\n      if(this.gameGrid[row][col] == undefined){\n        let miss = [row,col];\n        this.gameGrid[row][col] = 'miss';\n        this.missedShots.push(miss);\n        } else {\n        Object.values(this.ships).forEach(val => {\n          if (val.name == this.gameGrid[row][col]){\n            val.hit();\n            this.gameGrid[row][col] = 'hit';\n            this.sunkShips();\n          }\n        })\n      }\n      return this.gameGrid;\n    }\n\n    this.sunkShips = function (){\n      Object.values(this.ships).forEach(val => {\n        if (val.sunk === true){\n          console.log(val);\n          this.shipsSunk++;\n          }\n        });\n      }\n\n    this.allShipsSunk = function(){\n      if (this.shipsSunk === 5){\n          return true;\n        } else {\n          return false;\n      }\n    }\n    \n    this.getCoord = function(input){\n      let array =[];\n      if(Array.isArray(input)){\n        return false;\n      } else {\n        if(input < 10){\n          array[0] = 0;\n          array[1] = input;\n        } else {\n          let string = input.toString();\n          let doubDigit = Array.from(string);\n          array[0] = parseInt(doubDigit[0]);\n          array[1] = parseInt(doubDigit[1]);\n        }\n      }\n        return array;\n      }\n      \n      this.randomCoords = function(){\n        let a = (Math.floor(Math.random()*10));\n        let b = (Math.floor(Math.random()*10));\n        return [a,b];\n        }\n      this.randomAxis = function(){\n        let a = (Math.floor(Math.random()*2));\n        if (a < 1){\n          this.xAxis = false;\n        } else {\n          this.xAxis = true;\n        }\n        return this.xAxis;\n      }\n      this.changeAxis = function (){\n        if(this.xAxis === true){\n          this.xAxis = false;\n        } else {\n          this.xAxis = true;\n        }\n      }\n    }\n  }\n  \n  function check(input){ \n    let checkArr = [];\n    for(let i = 0; i < input.length; i++){\n      for(let j = 0; j < input[i].length; j++){\n        if (!(input[i][j]===undefined)){\n        checkArr.push(input[i][j]);\n      }\n    }\n  }\n    console.log(checkArr.length);\n}\n\n\n//original gameboard.\n\n//class Gameboard {\n//  constructor(){\n//    this.missedShots = [];\n//    this.ships = [];\n//\n//    this.carrierShip = new Ship('Carrier',5);\n//    this.destroyerShip = new Ship('Destroyer',4);\n//    this.battleShip = new Ship ('Battle Ship',3);\n//    this.submarine = new Ship ('Submarine',3);\n//    this.patrolBoat = new Ship ('Patrol Boat',2);\n//  \n//    this.placeShips = function(){\n//\n//    }\n//    this.canPlace = function(){\n//    \n//    }\n//    this.receiveAttack = function(){\n//\n//    }\n//  }\n//}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://bship/./src/Factories/gameboard.js?");

/***/ }),

/***/ "./src/Factories/player.js":
/*!*********************************!*\
  !*** ./src/Factories/player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/Factories/gameboard.js\");\n//const dropShips = require('../dom');\n\nconst playerOneBoard = document.querySelector('.player-one-board');\nconst playerTwoBoard = document.querySelector('.player-two-board');\n\nclass Player {\n  constructor(name,player){\n    this.name = name;\n    this.player = player;\n    this.gameboard = new Gameboard();\n    this.attacks = [];\n    let newAttack;\n    let tempCount = 0;\n\n    if(this.player == 'One'){\n      this.playerBoard = playerOneBoard\n      this.playerTurn = true;\n    } else {\n      this.playerBoard = playerTwoBoard;\n      this.playerTurn = false;\n    }\n\n    this.makePlayerBoard = function(){\n      if (this.player == 'One'){\n        for(let i = 0; i < 100; i++){\n          let tile = document.createElement('div');\n          tile.classList.add('player-one-tile');\n          tile.classList.add('place-ship-tile');\n          playerOneBoard.appendChild(tile);\n        }\n        return playerOneBoard;\n      \n      } else if (this.player == 'Two') {\n        for(let i = 0; i < 100; i++){\n          let tile = document.createElement('div');\n          tile.classList.add('player-two-tile');\n          playerTwoBoard.appendChild(tile);\n        }\n        return playerTwoBoard;\n      }\n    }\n      \n    this.displayShips = function(){\n      for(let i = 0; i < this.gameboard.gameGrid.length;i++){\n        for(let j = 0; j < this.gameboard.gameGrid[i].length;j++){\n        if(this.gameboard.gameGrid[i][j] == 'hit'){\n          let iter = this.translateCoord(i,j);\n          this.playerBoard.children[iter].classList.remove('piece-placed');\n          this.playerBoard.children[iter].classList.add('attack-landed');\n        } else if (this.gameboard.gameGrid[i][j] == 'miss'){\n          let iter = this.translateCoord(i,j);\n          this.playerBoard.children[iter].classList.add('attack-missed');\n        } else if (!(this.gameboard.gameGrid[i][j] == undefined)&&this.player == 'One'){\n           let iter = this.translateCoord(i,j);\n           this.playerBoard.children[iter].classList.add('piece-placed');\n          }\n        } \n      }\n      return this.playerBoard;\n    }\n    this.turn = function(player,input){\n      if(this.name == 'Computer'){\n        let tempAttack = this.computerAttack();\n        player.gameboard.receiveAttack(tempAttack);\n        tempAttack = 0;\n      } else {\n        input = input;\n        player.gameboard.receiveAttack(input);\n      }\n    }\n    \n    this.computerAttack = function(){\n      outer:while(tempCount < 1){\n        let input = this.randomCoord();\n        if(this.computerAttackCheck(input)===false){\n          continue outer;\n        } else {\n            newAttack = input;\n            tempCount++;\n            this.attacks.push(newAttack);\n            tempCount = 0;\n            return newAttack;\n          }\n        }\n      };\n      \n      this.computerAttackCheck = function(input){\n        let counter = 0;\n        if (this.attacks.length === 0){\n          return true;\n        } else {\n          for(let i = 0; i < this.attacks.length;i++){\n            let attack = this.attacks[i];\n            if(this.arrayEquality(input,attack)===false){\n              counter++;\n              }\n            }\n            if(counter == this.attacks.length){\n              return true;\n          } else {\n            return false;\n          }\n        } \n      }\n      \n      this.arrayEquality = function(a,b){\n        return Array.isArray(a) &&\n          Array.isArray(b) &&\n            a.length === b.length &&\n            a.every((val, index) => val === b[index]);\n      }\n      \n      this.translateCoord = function(i,j){\n        let tempArr = [];\n        tempArr.push(i);\n        tempArr.push(j);\n        let tempVar = 0;\n        if(tempArr[0] < 1){\n          tempVar = j;\n        } else {\n          tempVar = tempArr.join('');\n        }\n          return tempVar;\n      }\n\n      this.randomCoord = function(){\n        let a = (Math.floor(Math.random()*10));\n        let b = (Math.floor(Math.random()*10));\n        return [a,b];\n      }\n    }\n  }\n  module.exports = Player;\n\n\n\n\n//# sourceURL=webpack://bship/./src/Factories/player.js?");

/***/ }),

/***/ "./src/Factories/ship.js":
/*!*******************************!*\
  !*** ./src/Factories/ship.js ***!
  \*******************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(name,length,placing,hits,sunk){\n    this.name = name;\n    this.length = length;\n    this.placing = placing;\n    this.hits = 0;\n    this.sunk = false;\n\n  this.hit = function(){\n    this.hits++;\n    this.isSunk();\n    return this.hits;\n  }\n  this.isSunk = function(){\n    if (this.length === this.hits){\n      return this.sunk = true;\n      }\n    }\n  }\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://bship/./src/Factories/ship.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__ (/*! ./Factories/gameboard.js */ \"./src/Factories/gameboard.js\");\nconst Player = __webpack_require__(/*! ./Factories/player */ \"./src/Factories/player.js\");\n\nconst makePlayer = document.querySelector('.make-player');\nconst enterName = document.querySelector('.enter-name');\nconst submitName = document.querySelector('.submit');\nconst axisButton = document.querySelector('.axis-button');\nconst playerOneBoard = document.querySelector('.player-one-board');\nconst playerTwoBoard = document.querySelector('.player-two-board');\nconst gameText = document.querySelector('.game-text');\nconst restartButton = document.querySelector('.restart');\nlet playerOne;\nlet playerTwo;\n\n//game set up.\n\nfunction startSetUp(){\n  enterName.classList.remove('hidden');\n  makePlayer.classList.add('hidden');\n  submitName.classList.remove('hidden');\n  return enterName;\n}\n\nfunction playerOneCreation(){\n  let name = nameCheck(enterName.value);  \n  playerOne = new Player(name,'One');\n  playerTwo = new Player('Computer','Two');\n  playerOneBoard.classList.remove('hidden');\n  playerTwoBoard.classList.remove('hidden');\n  let playerOneName = document.querySelector('.player-one-name');\n  playerOneName.textContent = name;\n  playerOne.makePlayerBoard();\n  clickToPlace();\n  \n  enterName.classList.add('hidden');\n  submitName.classList.add('hidden');\n  axisButton.classList.remove('hidden');\n  gameText.textContent = 'Click to place your ships.'\n  console.log(playerOne.gameboard.ships);\n}\n\nfunction nameCheck(input){\n  let name;\n  let regex = new RegExp(/^computer$/gi);\n  if(regex.test(input)===true){\n    name = 'Imposter!';\n    return name;\n  } else {\n    name = input;\n    return name;\n  }\n}\n\nfunction playerTwoCreation(){\n  playerTwo = new Player('Computer','Two');\n  playerTwo.makePlayerBoard();\n  playerTwoBoard.classList.remove('hidden');\n  playerTwo.gameboard.computerPlaceShips();\n  playerTwo.displayShips();\n    for(let i = 0; i < playerTwo.playerBoard.children.length;i++){\n      playerOne.playerBoard.children[i].classList.remove('place-ship-tile');\n      playerTwo.playerBoard.children[i].classList.add('attack-ship-tile')\n      playerTwo.playerBoard.children[i].addEventListener('click',gamePlay);\n    }\n  let playerTwoName = document.querySelector('.player-two-name');\n  playerTwoName.textContent = 'Computer';\n  axisButton.classList.add('hidden');\n  gameText.textContent = 'Attack the computer board!'\n};\n\n//functions for game play\n\nfunction gamePlay(e){\n  if(playerOne.playerTurn == true){\n    let attacked = playerTwo;\n    let coord;\n    for (let i = 0; i < playerTwo.playerBoard.children.length;i++){\n      if (e.target == playerTwo.playerBoard.children[i]){\n        coord = i;\n        playerTwo.playerBoard.children[i].removeEventListener('click',gamePlay);\n      }\n    }\n      playerOne.turn(attacked,coord);\n      playerOne.playerTurn = false;\n\n      playerTwo.turn(playerOne);\n      playerOne.playerTurn = true;\n      checkWinner(playerOne);\n      checkWinner(playerTwo);\n    }\n  \n      playerOne.displayShips();\n      playerTwo.displayShips();\n}\n\nfunction checkWinner(input){\n  let count = 0; \n  Object.values(input.gameboard.ships).forEach (val => {\n    if (val.sunk == true){\n      count ++;\n    };\n    if (count === 5){\n      gameText.textContent = `${input.name} has lost! All of their ships have been sunk!`;\n          for (let i = 0; i < playerOne.playerBoard.children.length; i++){\n          playerOne.playerBoard.children[i].removeEventListener('click',gamePlay);\n          for (let i = 0; i < playerTwo.playerBoard.children.length; i++){\n          playerTwo.playerBoard.children[i].removeEventListener('click',gamePlay);\n          restartButton.classList.remove('hidden');\n          restartButton.addEventListener('click',playAgain);\n          }\n        }\n      }\n    })\n}\n\n//function gameFeed(input){\n//  Object.values(input.gameboard.ships).forEach (val => {\n//    if (val.sunk === true){\n//      gameText.textContent = `${input.name}'s ${val.name} has been sunk!`;\n//    }\n//  })\n\n\n//functions for placing ships.\n\nfunction clickToPlace(){\n  for(let i = 0; i < playerOne.playerBoard.children.length; i++){\n    playerOne.playerBoard.children[i].addEventListener('click',dropShips);\n    playerOne.playerBoard.children[i].addEventListener('mouseover',showHover);\n    playerOne.playerBoard.children[i].addEventListener('mouseleave',removeHover);\n  }\n}\n\nfunction dropShips(e){\n  let place;\n  for(let i = 0; i < playerOne.playerBoard.children.length;i++){\n    if (e.target==playerOne.playerBoard.children[i]){\n      place = i; \n    }\n  }\n  Object.values(playerOne.gameboard.ships).forEach(val => {\n    if(val.placing === true){\n      playerOne.gameboard.placeShips(val,place);\n      playerOne.displayShips();\n      if(playerOne.gameboard.shipsPlaced===5){\n        playerTwoCreation();\n      }\n      return playerOne.gameboard;\n    } \n  });\n}\n\nfunction changeAxis () {\n  if(playerOne.gameboard.xAxis == true){\n    playerOne.gameboard.xAxis = false;\n  } else {\n    playerOne.gameboard.xAxis = true;\n  }\n}\n\n//Showing and removing hover over squares when placing ships.\n\nfunction showHover(e){\n  let tempLength;\n  let place;\n    Object.values(playerOne.gameboard.ships).forEach(val => {\n      if(val.placing == true){\n        tempLength = val.length;\n      } \n      if(playerOne.gameboard.xAxis === true){\n        for(let i = 0; i < playerOne.playerBoard.children.length; i++){\n          if(e.target == playerOne.playerBoard.children[i]){\n            place = i;\n            if(noOverLapHoverX(tempLength,place)===false){\n            playerOne.playerBoard.children[i].classList.add('red-test');\n          } else{\n            for(let i = 0; i < tempLength; i++){\n               playerOne.playerBoard.children[place+i].classList.add('piece-hover');\n            }\n          }\n        }\n      }\n    } else if(playerOne.gameboard.xAxis === false){\n      for(let i = 0; i < playerOne.playerBoard.children.length; i++){\n        if(e.target == playerOne.playerBoard.children[i]){\n          place = i;\n            if(noOverLapHoverY(tempLength,place)===false){\n            playerOne.playerBoard.children[i].classList.add('red-test');\n          } else {\n          for(let i = 0; i < tempLength; i++){\n            let tempArr = [i,0];\n            let tempVar = parseInt(tempArr.join(''));\n            playerOne.playerBoard.children[place+tempVar].classList.add('piece-hover');\n            }\n          }\n        }\n      }\n    }\n  });\n}\n\nfunction removeHover(){\n  for(let i = 0; i < playerOne.playerBoard.children.length;i++){\n      playerOne.playerBoard.children[i].classList.remove('piece-hover');\n      playerOne.playerBoard.children[i].classList.remove('red-test');\n   }\n}\n\nfunction noOverLapHoverX (input,coord){\n  let tempVar = coord.toString();\n    if(input === 5){\n      if(tempVar.endsWith(6)===true \n        ||tempVar.endsWith(7)===true\n        ||tempVar.endsWith(8)===true\n        ||tempVar.endsWith(9)===true){\n          return false;    \n        }}\n    else if (input === 4){\n      if(tempVar.endsWith(7)===true\n        ||tempVar.endsWith(8)===true\n        ||tempVar.endsWith(9)===true){\n          return false;\n        }} \n    else if (input === 3){\n      if (tempVar.endsWith(8)===true\n        ||tempVar.endsWith(9)===true){\n          return false;\n        }} \n    else if (input === 2){\n      if(tempVar.endsWith(9)===true){\n          return false;\n      }\n    }\n};\n\nfunction noOverLapHoverY (input,coord){\n    let tempVar = coord.toString();\n      if(input === 5){\n        if(tempVar.startsWith(6)===true \n          ||tempVar.startsWith(7)===true\n          ||tempVar.startsWith(8)===true\n          ||tempVar.startsWith(9)===true){\n            return false;    \n          }}\n      else if (input === 4){\n        if(tempVar.startsWith(7)===true\n          ||tempVar.startsWith(8)===true\n          ||tempVar.startsWith(9)===true){\n            return false;\n          }} \n      else if (input === 3){\n        if (tempVar.startsWith(8)===true\n          ||tempVar.startsWith(9)===true){\n            return false;\n          }} \n      else if (input === 2){\n        if(tempVar.startsWith(9)===true){\n            return false;\n      }\n    }\n};\n\nfunction playAgain(){\n    window.location.reload;\n}\n\n\nmakePlayer.addEventListener('click',startSetUp);\nsubmitName.addEventListener('click',playerOneCreation);\naxisButton.addEventListener('click',changeAxis);\n\nmodule.exports = dropShips;\n\n\n\n//this.computerAttack = function(){\n//  outer:while(tempCount < 1 ){\n//    attackCount = 0;\n//    let input = this.randomCoord();\n//    console.log(input);\n//    for(let i = -1; i < this.attacks.length; i++){\n//      let a = this.attacks[i];\n//        if (this.arrayEquality(input,a)===false){\n//          attackCount++;\n//        } if (attackCount < this.attacks.length-1){\n//          continue outer;\n//        } else {\n//        newAttack = input;\n//        tempCount++;\n//        this.attacks.push(newAttack);\n//        tempCount = 0;\n//        attackCount = 0;\n//        console.log(this.attacks);\n//        return newAttack;\n//      }\n//    }\n//  };\n//}\n\n//# sourceURL=webpack://bship/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Factories_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factories/player.js */ \"./src/Factories/player.js\");\n/* harmony import */ var _Factories_player_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Factories_player_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dom_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://bship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;