const input = document.querySelector("#msgInput");
const ul = document.querySelector("#todoList");
const btn = document.querySelector("#msgButton");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  if (input.value != "") {
    let list = document.createElement("li");
    list.innerHTML = input.value;
    ul.appendChild(list);
  } else {
    alert("The input field is empty, fill it in and press again!");
  }
  input.value = "";
}
