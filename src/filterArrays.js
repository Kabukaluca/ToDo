import { todo_all } from "./index.js";
export { filterTodos, filteredTasks };


let filteredTasks = [];

const filters = {
    filterByDueDate: (dueDate) => {
        return todo_all.filter(todo => todo.dueDate === dueDate);
    },
    filterByPriority: (priority) => {
        return todo_all.filter(todo => todo.priority === priority);
    },
    filterByStatus: (todoStatus) => {
        return todo_all.filter(todo => todo.status === todoStatus);
    },
};

function filterTodos() {
    filteredTasks.highPriorityTasks = filters.filterByPriority("high");
    filteredTasks.mediumPriorityTasks = filters.filterByPriority("medium");
    filteredTasks.lowPriorityTasks = filters.filterByPriority("low");

    filteredTasks.completeTasks = filters.filterByStatus("complete");
    filteredTasks.incompleteTasks = filters.filterByStatus("incomplete");
};


 // --- Class for Creating filters --- //
/*
class filterdTask {
    constructor(newFilterName, condition) {
        this.newFilter = newFilterName;
        this.condition = condition;
        this.newFilter = [];
    }

    filterByPriority() {
        this.newFilter = filters.filterByPriority(this.condition);
    }

    filterByStatus() {
        this.newFilter = filters.filterByStatus(this.condition);
    }
}; */