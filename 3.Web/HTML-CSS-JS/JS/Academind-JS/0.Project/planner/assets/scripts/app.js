/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dependencies_projectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencies/projectList.js */ \"./src/dependencies/projectList.js\");\n\n\nclass App {\n  static init() {\n    const activeProjects = new _dependencies_projectList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"active\");\n    const finishedProjects = new _dependencies_projectList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"finished\");\n\n    activeProjects.setSwitchHandler(\n      finishedProjects.addProject.bind(finishedProjects)\n    );\n    finishedProjects.setSwitchHandler(\n      activeProjects.addProject.bind(activeProjects)\n    );\n  }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://planner/./src/app.js?");

/***/ }),

/***/ "./src/dependencies/component.js":
/*!***************************************!*\
  !*** ./src/dependencies/component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Component {\n  constructor(parentElSelector, insertBefore = false) {\n    if (parentElSelector) {\n      this.parentElement = document.getElementById(parentElSelector);\n    } else {\n      this.parentElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n    }\n  }\n\n  attach() {\n    this.parentElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);\n\n\n//# sourceURL=webpack://planner/./src/dependencies/component.js?");

/***/ }),

/***/ "./src/dependencies/domManipulator.js":
/*!********************************************!*\
  !*** ./src/dependencies/domManipulator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DOManipulator {\n  static clearEventListener(element) {\n    const clonedElement = element.cloneNode(true);\n    element.replaceWith(clonedElement);\n\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationTag) {\n    const element = document.getElementById(elementId.toString());\n    const destinationElement = document.querySelector(\n      newDestinationTag.toString()\n    );\n\n    destinationElement.append(element);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOManipulator);\n\n\n//# sourceURL=webpack://planner/./src/dependencies/domManipulator.js?");

/***/ }),

/***/ "./src/dependencies/projectItem.js":
/*!*****************************************!*\
  !*** ./src/dependencies/projectItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator.js */ \"./src/dependencies/domManipulator.js\");\n/* harmony import */ var _toolTip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolTip.js */ \"./src/dependencies/toolTip.js\");\n\n\n\nclass ProjectItem {\n  constructor(id, updatePositionHandler, type) {\n    this.id = id;\n    this.projectElement = document.getElementById(this.id);\n    this.updatePositionHandler = updatePositionHandler;\n    this.hasActiveTooltip = false;\n    this.connectMainBtn(type);\n    this.connectMoreInfoBtn();\n    this.connectDrag();\n  }\n\n  showMoreInfo() {\n    if (this.hasActiveTooltip) {\n      return;\n    }\n\n    const tooltipText =\n      this.projectElement.dataset.extraDesc || \"Nothing to see here.\";\n\n    const tooltip = new _toolTip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      () => {\n        this.hasActiveTooltip = false;\n      },\n      tooltipText.toString(),\n      this.id\n    );\n    tooltip.attach();\n    this.hasActiveTooltip = true;\n  }\n\n  connectMoreInfoBtn() {\n    let moreInfoBtn = this.projectElement.querySelector(\".alt-btn\");\n\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfo.bind(this));\n  }\n\n  connectMainBtn(type) {\n    let mainBtn = this.projectElement.querySelector(\".main-btn\");\n\n    mainBtn = _domManipulator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearEventListener(mainBtn);\n    mainBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\n\n    mainBtn.addEventListener(\n      \"click\",\n      this.updatePositionHandler.bind(null, this.id)\n    );\n  }\n\n  connectDrag() {\n    this.projectElement.addEventListener(\"dragstart\", (event) => {\n      event.dataTransfer.setData(\"text/plain\", this.id);\n      event.dataTransfer.effectAllowed = \"move\";\n    });\n  }\n\n  update(updateListHandler, type) {\n    this.updatePositionHandler = updateListHandler;\n    this.connectMainBtn(type);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectItem);\n\n\n//# sourceURL=webpack://planner/./src/dependencies/projectItem.js?");

/***/ }),

/***/ "./src/dependencies/projectList.js":
/*!*****************************************!*\
  !*** ./src/dependencies/projectList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectItem.js */ \"./src/dependencies/projectItem.js\");\n/* harmony import */ var _domManipulator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulator.js */ \"./src/dependencies/domManipulator.js\");\n\n\n\nclass ProjectList {\n  projects = [];\n\n  constructor(type) {\n    this.type = type;\n\n    const prjItems = document.querySelectorAll(\n      `.${this.type}-projects-list li`\n    );\n\n    for (let prjItem of prjItems) {\n      const projItem = new _projectItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        prjItem.id,\n        this.switchProject.bind(this),\n        this.type\n      );\n      this.projects.push(projItem);\n    }\n\n    this.connectDrop();\n  }\n\n  setSwitchHandler(switchHandler) {\n    this.switchHandler = switchHandler;\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    _domManipulator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].moveElement(project.id, `.${this.type}-projects-list`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\n    this.projects = this.projects.filter((p) => p.id !== projectId);\n  }\n\n  connectDrop() {\n    const list = document.querySelector(`.${this.type}-projects-list`);\n\n    list.addEventListener(\"dragenter\", (event) => {\n      list.parentElement.classList.add(\"droppable\");\n      event.preventDefault();\n    });\n\n    list.addEventListener(\"dragover\", (event) => {\n      event.preventDefault();\n    });\n\n    list.addEventListener(\"dragleave\", (event) => {\n      // To trigger leave events only when the cursor truly leaves the element, and not in child elemement, etc.\n      if (event.relatedTarget.closest(`.${this.type}-projects-list`) !== list) {\n        list.parentElement.classList.remove(\"droppable\");\n      }\n    });\n\n    list.addEventListener(\"drop\", (event) => {\n      list.parentElement.classList.remove(\"droppable\");\n      const draggedProject = event.dataTransfer.getData(\"text/plain\");\n\n      if (this.projects.find((p) => p.id === draggedProject)) {\n        return;\n      }\n\n      document\n        .getElementById(draggedProject)\n        .querySelector(\".main-btn\")\n        .click();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n\n//# sourceURL=webpack://planner/./src/dependencies/projectList.js?");

/***/ }),

/***/ "./src/dependencies/toolTip.js":
/*!*************************************!*\
  !*** ./src/dependencies/toolTip.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./src/dependencies/component.js\");\n\n\nclass ToolTip extends _component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifier, textContent, parentElementSelector) {\n    super(parentElementSelector, false);\n    this.closeNotifier = closeNotifier;\n    this.textContent = textContent;\n    this.show();\n  }\n\n  closeToolTip = () => {\n    this.detach();\n    this.closeNotifier();\n  };\n\n  show() {\n    const tooltipEl = document.createElement(\"div\");\n    tooltipEl.id = \"tool-tip\";\n    tooltipEl.classList.add(\"project-card\");\n\n    tooltipEl.textContent = this.textContent;\n\n    const [parentPosLeft, parentPosTop, parentHeight, parentScrolling] = [\n      this.parentElement.offsetLeft,\n      this.parentElement.offsetTop,\n      this.parentElement.clientHeight,\n      this.parentElement.parentElement.scrollTop,\n    ];\n\n    const toolTipTop = parentPosTop + parentHeight - parentScrolling;\n    const toolTipLeft = parentPosLeft + 5;\n\n    tooltipEl.style.top = toolTipTop + \"px\";\n    tooltipEl.style.left = toolTipLeft + \"px\";\n\n    tooltipEl.addEventListener(\"click\", this.closeToolTip);\n\n    this.element = tooltipEl;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolTip);\n\n\n//# sourceURL=webpack://planner/./src/dependencies/toolTip.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;