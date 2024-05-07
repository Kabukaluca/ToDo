import createTodo from "./Logic/createTodo";
import { displayContent } from "./DOM/domStructure";
import "./style.css";
import { eventListenersSidebar } from "./DOM/domManager";
import { Display } from "./DOM/domClasses";
import todoManager from "./Logic/todoManager";


// EventListener //
document.addEventListener("DOMContentLoaded", () => {
    new Display("displayAll", todoManager.todoList).createDisplay();
});


 // Create new Todos //
createTodo("Low Todo", "This should create a low prio todo", "1.1.23", "low", true);
createTodo("Medium Todo", "This should create a medium prio todo", "13.13.23", "medium", false);
createTodo("The Odin Project", "Finish the Odin Project to learn code", "31.12.2024", "high", false);

// === Console Log & Display === //
document.addEventListener("DOMContentLoaded", () => {
    eventListenersSidebar();
});

displayContent();