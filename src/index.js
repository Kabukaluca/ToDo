import createTodo from "./Logic/createTodo";
import todoManager from "./Logic/todoManager";
import { filteredTasks } from "./Logic/filterArrays";

import "./style.css";
// === LOGIC === //
function newTodo(a, b, c, d, e) {
    createTodo(a, b, c, d, e)
};

newTodo("Low Todo", "This should create a low prio todo", "1.1.23", "low", "complete")
newTodo("Medium Todo", "This should create a medium prio todo", "13.13.23", "medium", "incomplete")
newTodo("The Odin Project", "Finish the Odin Project to learn code", "31.12.2024", "high", "incomplete");

console.log(
    todoManager.todoList,
    filteredTasks,
    // filteredTasks.highPriorityTasks,
);


// === DOM === //
