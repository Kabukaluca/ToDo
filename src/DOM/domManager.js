import todoManager from "../Logic/todoManager";
import { Display, TodoFolder } from "./domClasses";
import { displayNewTodoForm, closeNewTodoForm, displayNewProjectForm, closeNewProjectForm } from "../DOM/formModals.js";
import { checkTodoInputValidity, checkProjectInputValidity } from "../Logic/formInputHandler";

// === EventListener === //
function eventListenersSidebar() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document.getElementById("todo-folder-completed");
    let newTodo = document.getElementById("new-todo-btn");
    let newProject = document.getElementById("new-project-btn");

    all.addEventListener("click", () => {
        new Display("displayAll", todoManager.todoList).createDisplay();
        setCurrentProjectName("All Todo's");
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
        setCurrentProjectName("Priorities");
        eventListenersPriorities();
    });

    completed.addEventListener("click", () => {
        new Display("displayCompleted", todoManager.getTodoByStatus("Complete")).createDisplay();
        setCurrentProjectName("Completed");
    });

    newTodo.addEventListener("click", () => {
        displayNewTodoForm();
        eventListenersTodoModal();
    });

    newProject.addEventListener("click", () => {
        displayNewProjectForm();
        eventListenersProjectModal();
    })
};

function eventListenersPriorities() {
    let highPriority = document.getElementById("high-priority-folder");
    let mediumPriority = document.getElementById("medium-priority-folder");
    let lowPriority = document.getElementById("low-priority-folder");

    highPriority.addEventListener("click", () => {
        new Display("displayHighPriorities", todoManager.getTodoByPriority("high")).createDisplay();
        setCurrentProjectName("High Priority");
    });

    mediumPriority.addEventListener("click", () => {
        new Display("displayMediumPriorities", todoManager.getTodoByPriority("medium")).createDisplay();
        setCurrentProjectName("Medium Priority");
    });

    lowPriority.addEventListener("click", () => {
        new Display("displayLowPriorities", todoManager.getTodoByPriority("low")).createDisplay();
        setCurrentProjectName("Low Priority");
    });
};

function eventListenersTodoModal() {
    let todoFormSubmitBtn = document.getElementById("new-todo-form-submit-btn");
    let todoFormModal = document.getElementById("todo-form-modal");

    todoFormSubmitBtn.addEventListener("click", () => {
        checkTodoInputValidity();
    });
    
    todoFormModal.addEventListener("click", (event) => {
        if (event.target === todoFormModal) {
        closeNewTodoForm();
        };
    });
};

function eventListenersProjectModal() {
    let projectFormSubmitBtn = document.getElementById("new-project-form-submit-btn");
    let projectFormModal = document.getElementById("new-project-modal");

    projectFormSubmitBtn.addEventListener("click", () => {
        checkProjectInputValidity();
    });
    
    projectFormModal.addEventListener("click", (event) => {
        if (event.target === projectFormModal) {
        closeNewProjectForm();
        };
    }); 
};

function setCurrentProjectName(name) {
    let currentProjectName = document.getElementById("current-folder-name");
    currentProjectName.textContent = name;
}
    
export { eventListenersSidebar, eventListenersPriorities };