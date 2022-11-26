const ul = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form") as HTMLFormElement;
const input = todoForm.querySelector("#todo-input") as HTMLInputElement;
const submitBtn = todoForm.querySelector("#btn");

interface Todo {
  description: string;
  state: State;
}

enum State {
  PROGRESS = "In-Progress",
  DONE = "done",
}

const todos: Todo[] = [];

function createToDo(description: string) {
  const newTodo: Todo = {
    description: description,
    state: State.PROGRESS,
  };

  todos.push(newTodo);

  return newTodo;
}

function createListElement(todo: Todo) {
  const container = document.createElement("div");

  const newLi = document.createElement("li");
  newLi.textContent = todo.description;
  newLi.style.display = "inline-block";

  const checkBox = document.createElement("input") as HTMLInputElement;
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      todo.state = State.DONE;
      this.nextElementSibling?.classList.add("checked");
    } else {
      todo.state = State.PROGRESS;
      checkBox.nextElementSibling?.classList.remove("checked");
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
    const fetchedTodos = JSON.parse(localStorage.getItem("todos")!);

    for (const todo of fetchedTodos) {
      const todoDiv = createListElement(todo);
      ul?.appendChild(todoDiv);
    }
  }
  return;
}

window.addEventListener("load", loadTodosHandler);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userTodo = createToDo(input.value);
  const todoDiv = createListElement(userTodo);

  ul?.appendChild(todoDiv);
  input.value = "";

  saveTodos();
});
