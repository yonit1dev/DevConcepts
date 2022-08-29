# Some notes on JS workarounds

- JS is built upon, or an interation of a language called ECMA Script.

## ES5 vs ES6

### ES5 : 
- ES5 is an overhaul version integrated into javascript after the initial concept.
- ES5 only had var, not let and const.
- Has some syntax features missing.

### ES6:
- Introduced in 2015, and is another major overhaul.

## Declarations
- var : creates a variable that is scoped functionally and globally.
- let and const : create variables that are local functionally.

- More generally : 
    - var only cares about globally created variables and function scope variables.
    - let and const care about globally created variables and {} scope variables.(not objects).

- Better use let and const for cleaner and optimized code.

## Hoisting
- Hoisting : when JS loads scripts, it first goes over all of the source code, and loads functions and var variables.

## How is code handled in a browser
- Even if the JS code is the same, the execution differs on the browser / js engine.

- The engines parse and execute the js code.
- It constitutes of two processors:
    - Interpreter : parses and loads script, reads, translates into byte code and starts execution.
    - Compiler(JiT) : recieves the byte code from the interpreter and translates into machine code. It is a just in time compilation - starts compiling and executing while the code is being read / executed.
- Machine code is handed over to the computer the browser is running on.

- Browsers also give API's for certain features to access from JS code.

## Code execution / logic within the browser
- It's all about managing memory and order of execution.
- Heap and Stack are involved.
    - Heap : long term memory. Stores memory in system memory.
    - Stack : involved in the execution context. Manages the flow of program execution.

- Refer for notes in the exection folder for more.

## Primitive vs Reference Types / Values
- Primitive are data types such as strings, numbers, booleans, null, undefined and symbol. They're usually stored and managed in the stack.
- A primitive variable stores the value of the primitive itself. When copying a variable to another variable, the value itself is copied.
- Reference types are all objects. They store a reference to a memory location. They don't house the value but a memory address.