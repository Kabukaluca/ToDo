import createTodo from "./Logic/createTodo";
import { getStructuredTodos } from "./Logic/filterArrays";
import displayContent from "./DOM/domStructure";
import "./style.css";
import { eventListenersSidebar } from "./DOM/domManager";


// === LOGIC === //
function newTodo(a, b, c, d, e) {
    createTodo(a, b, c, d, e)
};
 // Create new Todos //
newTodo("Low Todo", "This should create a low prio todo", "1.1.23", "low", "complete")
newTodo("Medium Todo", "This should create a medium prio todo", "13.13.23", "medium", "incomplete")
newTodo("The Odin Project", "Finish the Odin Project to learn code", "31.12.2024", "high", "incomplete");




// === Console Log & Display === //
document.addEventListener("DOMContentLoaded", () => {
    eventListenersSidebar();
});

displayContent();
console.log("Test get Structure", getStructuredTodos());