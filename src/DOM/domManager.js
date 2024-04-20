import { displayAll, displayPriorityFolder, displayCompleted, displayHighPriorities, displayMediumPriorities, displayLowPriorities } from "../Logic/filterArrays";

// === EventListener === //
function eventListenersSidebar() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document.getElementById("todo-folder-completed");

    all.addEventListener("click", () => {
        displayAll.createDisplay();
    });

    priorities.addEventListener("click", () => {
        displayPriorityFolder();
        eventListenersPriorities();
    });

    completed.addEventListener("click", () => {
        displayCompleted.log();
        displayCompleted.createDisplay();
    });
};

function eventListenersPriorities() {
    let highPriority = document.getElementById("high-priority-folder");
    let mediumPriority = document.getElementById("medium-priority-folder");
    let lowPriority = document.getElementById("low-priority-folder");

    highPriority.addEventListener("click", () => {
        displayHighPriorities.createDisplay();
    });

    mediumPriority.addEventListener("click", () => {
        displayMediumPriorities.createDisplay();
    });

    lowPriority.addEventListener("click", () => {
        displayLowPriorities.createDisplay();
    });
};

export { eventListenersSidebar, eventListenersPriorities };