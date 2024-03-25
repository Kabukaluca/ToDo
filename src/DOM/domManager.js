import { displayAll, displayPriorities, displayCompleted } from "./displayTodos";

// === EventListener === //
function eventListeners() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document. getElementById("todo-folder-completed");

    all.addEventListener("click", () => {
        displayAll();
    });

    priorities.addEventListener("click", () => {
        displayPriorities();
    });

    completed.addEventListener("click", () => {
        displayCompleted();
    });
};

export default eventListeners;