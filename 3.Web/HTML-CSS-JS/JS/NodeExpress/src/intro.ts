/**
 * Modules are encapsulated code.
 * Only share the minimum.
 * Modules in NodeJS use commonjs syntax.
 * More or less the same as es6 with monor differences
 * Every file in node is a module.
 */

import { john, peter } from "./variables";
import { sayHi } from "./function";

sayHi(john);
sayHi(peter);
// sayHi(secret); // won't be found
