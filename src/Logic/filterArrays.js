import todoManager from "./todoManager.js";
import { Display, TodoFolder } from "../DOM/domClasses.js";

const getStructuredTodos = () => {
    return { 
        allTodos: todoManager.todoList,
        completeTodos: todoManager.todoList.filter(todo => todo.status === "completed"),
        highPriorityTodos: todoManager.todoList.filter(todo => todo.priority === "high"),
        mediumPriorityTodos: todoManager.todoList.filter(todo => todo.priority === "medium"),
        lowPriorityTodos: todoManager.todoList.filter(todo => todo.priority === "low"),
    };
};

const singleHigh = todoManager.todoList.filter(todo => todo.priority ==="high");
console.log("Test High Single", todoManager.todoList.filter(todo => todo.priority === "high"));

// === Display === //
const displayAll = new Display("displayAll", todoManager.todoList);
const displayCompleted = new Display("displayCompleted", todoManager.todoList.filter(todo => todo.status === "completed"));


const TestHigh = new Display("HighPrioTest", singleHigh);
const displayHighPriorities = new Display("displayHighPrio", );
console.log(displayAll, displayCompleted, displayHighPriorities, TestHigh);

const displayPriorityFolder = () => {
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
};

const displayMediumPriorities = new Display("mediumPriority", );
const displayLowPriorities = new Display("lowPriority", );


export { 
    getStructuredTodos,
    displayPriorityFolder,
    displayLowPriorities,
    displayMediumPriorities,
    displayHighPriorities,
    displayCompleted,
    displayAll
};


 // --- Class for Creating filters --- //
/*
class Filter {
    constructor(filterBy___, condition) {
        this.filterBy___ = filterBy___;
        this.condition = condition;
        this.newFilter = [];

        /* this.newFilter = 
        filterBy___: (condition) {
            return todoManger.todoList.filter(todo => todo.condition === condition);
        } /*
    }

    // --- Neded ? --- //
    filterByPriority() {
        this.newFilter = filters.filterByPriority(this.condition);
    }

    filterByStatus() {
        this.newFilter = filters.filterByStatus(this.condition);
    }
}; */