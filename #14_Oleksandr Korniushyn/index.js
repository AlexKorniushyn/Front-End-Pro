const FORM_SELECT = "#todoForm";
const UL_SELECT = "#todoList";
const DONE_SELECT = "done";
const DELETE_BTN_SELECT = "deleteBtn";
const TODO_ITEM_SELECT = "todoItem";

const form = document.querySelector(FORM_SELECT);
const ul = document.querySelector(UL_SELECT);

form.addEventListener("submit", onSubmitClick);
ul.addEventListener("click", onUlClick);

function onSubmitClick(e) {
  e.preventDefault();

  const formElements = form.elements;
  const todo = getFormData(formElements);
  if (!isTodoValid(todo)) {
    showError("The input field is empty, fill it in and press again!");
    return;
  }
  renderTodo(todo);
  clearFormData(formElements);
}

function onUlClick(e) {
  const todoItemEl = getTodoItemEl(e.target);

  if (todoItemEl) {
    if (isDeleteBtn(e.target)) {
      deleteTodoEl(todoItemEl);
    } else {
      toggleDone(todoItemEl);
    }
  }
}

function isTodoValid(todo) {
  return todo.message !== "";
}

function renderTodo(todo) {
  const html = generateTodoHtml(todo);

  ul.insertAdjacentHTML("beforeend", html);
}

function generateTodoHtml(todo) {
  const done = todo.done ? ` ${DONE_SELECT}` : "";

  return `
    <li class="todoItem${done}">
      ${todo.message}
      <button class="${DELETE_BTN_SELECT}"><span>[Delete]</span></button>
    </li>
  `;
}

function getTodoItemEl(el) {
  return el.closest(`.${TODO_ITEM_SELECT}`);
}

function isDeleteBtn(el) {
  return el.closest(`.${DELETE_BTN_SELECT}`);
}

function deleteTodoEl(el) {
  return el.remove();
}

function toggleDone(el) {
  return el.classList.toggle(DONE_SELECT);
}
