"use strict";
const ul = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const input = todoForm.querySelector("#todo-input");
const submitBtn = todoForm.querySelector("#btn");
var State;
(function (State) {
    State["PROGRESS"] = "In-Progress";
    State["DONE"] = "done";
})(State || (State = {}));
const todos = [];
function createToDo(description) {
    const newTodo = {
        description: description,
        state: State.PROGRESS,
    };
    todos.push(newTodo);
    return newTodo;
}
function createListElement(todo) {
    const container = document.createElement("div");
    const newLi = document.createElement("li");
    newLi.textContent = todo.description;
    newLi.style.display = "inline-block";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        var _a, _b;
        if (this.checked) {
            todo.state = State.DONE;
            (_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add("checked");
        }
        else {
            todo.state = State.PROGRESS;
            (_b = checkBox.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.remove("checked");
        }
        saveTodos();
    });
    container.appendChild(checkBox);
    container.appendChild(newLi);
    return container;
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadTodosHandler() {
    if (localStorage.getItem("todos")) {
        const fetchedTodos = JSON.parse(localStorage.getItem("todos"));
        for (const todo of fetchedTodos) {
            const todoDiv = createListElement(todo);
            ul === null || ul === void 0 ? void 0 : ul.appendChild(todoDiv);
        }
    }
    return;
}
window.addEventListener("load", loadTodosHandler);
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userTodo = createToDo(input.value);
    const todoDiv = createListElement(userTodo);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(todoDiv);
    input.value = "";
    saveTodos();
});
