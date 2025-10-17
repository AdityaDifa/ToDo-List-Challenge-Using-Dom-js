import CounterWords from "./scripts/CounterWords.js";
import AddTodo from "./scripts/AddTodo.js";
import DeleteList from "./scripts/DeleteList.js";

window.CounterWords = CounterWords;

const form = document.getElementById("todoForm");
form.addEventListener("submit", (e) =>
  AddTodo(e, "inputDeskripsi", "listCards")
);

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", DeleteList);
