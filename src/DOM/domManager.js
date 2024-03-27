import { displayAll, displayPriorityFolder, displayCompleted, displayHighPriorities, displayMediumPriorities, displayLowPriorities } from "./displayTodos";

// === EventListener === //
function eventListenersSidebar() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document.getElementById("todo-folder-completed");

    all.addEventListener("click", () => {
        displayAll();
    });

    priorities.addEventListener("click", () => {
        displayPriorityFolder();
        eventListenersPriorities();
    });

    completed.addEventListener("click", () => {
        displayCompleted();
    });
};

function eventListenersPriorities() {
    let highPriority = document.getElementById("high-priority-folder");
    let mediumPriority = document.getElementById("medium-priority-folder");
    let lowPriority = document.getElementById("low-priority-folder");

    highPriority.addEventListener("click", () => {
        displayHighPriorities();
    });

    mediumPriority.addEventListener("click", () => {
        displayMediumPriorities();
    });

    lowPriority.addEventListener("click", () => {
        displayLowPriorities();
    });
};

export { eventListenersSidebar, eventListenersPriorities };