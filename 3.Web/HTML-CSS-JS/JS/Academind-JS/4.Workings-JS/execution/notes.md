## Execution of JS Code.

- Two functions exist in the app.js file in this directory.

- When executing the script(app.js), the heap and stack come into play.
    - Heap : stores the defintions of the functions and variables they house.
    - Stack : responsible for how the script is executed. In this example:
        - It houses an anonymous function execution(basically the script wrapped).
        - The greet() function is executed next, pushed on top of the stack.
        - Inside the greet function, the first that happens is the creation of variable by calling another function.
        - The getName() function is loaded on top of the stack and executed.
        - The getName() function also calls another function when creating a variable.
        - The in-built prompt() is pushed on top of the stack and is executed.
        - Propmt() finishes execution and returns a string to the getName() function, hence is popped of the stack.
        - getName() returns the string it recieved to the created variable in the greet() function, and is also popped off the stack.
        - The greet() function doesn't have a return statement, so finishes all code execution, and returns control to the big anonymous function(the script basically). 

### JS is single threaded. Only one thing happens at a time.

- One additional feature : Event Loop - helps for asynchronous programming. 