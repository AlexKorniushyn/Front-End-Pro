const input = document.querySelector("#msgInput");
const ul = document.querySelector("#todoList");
const btn = document.querySelector("#msgButton");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  if (input.value != "") {
    let liEl = document.createElement("li");
    liEl.innerHTML = input.value;
    ul.appendChild(liEl);
  } else {
    alert("The input field is empty, fill it in and press again!");
  }
  input.value = "";
}
