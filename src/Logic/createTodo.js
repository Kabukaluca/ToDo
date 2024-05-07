import todoManager from "./todoManager.js";

class Todo {
    constructor(title, description, dueDate, priority, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = this.getStatus(status);
    }

    getStatus(status) {
        return status ? "Complete" : "Incomplete";
    }

    createData() {
        let data = {
            Title: this.title,
            Description: this.description,
            Due: this.dueDate,
            Importance: this.priority,
            status: this.status
        };
        return data;
    };
};

function createTodo(title, description, dueDate, priority, todoStatus) {
    let newTodo = new Todo(title, description, dueDate, priority, todoStatus);
    todoManager.todoAdd(newTodo);
};

export default createTodo;