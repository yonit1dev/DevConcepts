"use strict";
/**
 * Modules are encapsulated code.
 * Only share the minimum.
 * Modules in NodeJS use commonjs syntax.
 * More or less the same as es6 with monor differences
 * Every file in node is a module.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const function_1 = require("./function");
(0, function_1.sayHi)(variables_1.john);
(0, function_1.sayHi)(variables_1.peter);
// sayHi(secret); // won't be found
