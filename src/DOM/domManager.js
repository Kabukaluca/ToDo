// import createTodo from "../Logic/createTodo";
import todoManager from "../Logic/todoManager";
import { Display, TodoFolder } from "./domClasses";
import { displayNewTodoForm, closeNewTodoForm } from "./domStructure";
import { checkValidity } from "../Logic/formInputHandler";

// === EventListener === //
function eventListenersSidebar() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document.getElementById("todo-folder-completed");
    let newTodo = document.getElementById("newTodoBtn");

    all.addEventListener("click", () => {
        new Display("displayAll", todoManager.todoList).createDisplay();
    });

    priorities.addEventListener("click", () => {
       const list = document.getElementById("todo-list");

       while (list.firstChild) {
        list.removeChild(list.firstChild);
       };
       const listContainer = document.getElementById("todo-list");

        const highPriorityFolder = new TodoFolder("High", "priority-folder", "high-priority-folder");
        const mediumPriorityFolder = new TodoFolder("Medium", "priority-folder", "medium-priority-folder");
        const lowPriorityFolder = new TodoFolder("Low", "priority-folder", "low-priority-folder");

        listContainer.appendChild(highPriorityFolder.createFolder());
        listContainer.appendChild(mediumPriorityFolder.createFolder());
        listContainer.appendChild(lowPriorityFolder.createFolder());

        eventListenersPriorities();
    });

    completed.addEventListener("click", () => {
        new Display("displayCompleted", todoManager.getTodoByStatus("Complete")).createDisplay();
    });

    newTodo.addEventListener("click", () => {
        displayNewTodoForm();
        eventListenersModal();
    });
};

function eventListenersPriorities() {
    let highPriority = document.getElementById("high-priority-folder");
    let mediumPriority = document.getElementById("medium-priority-folder");
    let lowPriority = document.getElementById("low-priority-folder");

    highPriority.addEventListener("click", () => {
        new Display("displayHighPriorities", todoManager.getTodoByPriority("high")).createDisplay();
    });

    mediumPriority.addEventListener("click", () => {
        new Display("displayMediumPriorities", todoManager.getTodoByPriority("medium")).createDisplay();
    });

    lowPriority.addEventListener("click", () => {
        new Display("displayLowPriorities", todoManager.getTodoByPriority("low")).createDisplay();
    });
};

function eventListenersModal() {
    let formSubmitBtn = document.getElementById("new-todo-form-submit-btn");
    let formModal = document.getElementById("form-modal");

    formSubmitBtn.addEventListener("click", () => {
        checkValidity();
    });
    
    formModal.addEventListener("click", (event) => {
        if (event.target === formModal) {
        closeNewTodoForm();
        };
    });
};

export { eventListenersSidebar, eventListenersPriorities };