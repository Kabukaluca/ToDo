import { todo_all, priority_high, priority_medium, priority_low, complete, uncomplete } from "./array";
import createTodo from "./createTodo";

function newTodo(a, b, c, d) {
    createTodo(a, b, c, d)
};

/* Query Selector 
const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", () => {   });
*/

newTodo("Low", "test", "test", "medium", "complete")
newTodo("Medium", "Test", "13.13", "medium", "uncomplete")
newTodo("The Odin Project", "Finish the Odin Project to learn code", "31.12.2024", "high", "uncomplete");
console.log(todo_all, priority_high, priority_medium, priority_low, complete, uncomplete);