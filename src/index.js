import todo_all from "./array";
import createTodo from "./createTodo";

/* Query Selector 
const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", () => {   });
*/

function newTodo(a, b, c, d) {
    createTodo(a, b, c, d)
}

newTodo("The Odin Project", "Finnish the Odin Project to learn code", "31.12.2024", "High");
console.log(todo_all);