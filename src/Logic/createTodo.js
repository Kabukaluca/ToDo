import todoManager from "./todoManager.js";

class Todo {
    constructor(title, description, dueDate, priority, project, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
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
            Project: this.project,
            status: this.status
        };
        return data;
    };
};

function createTodo(title, description, dueDate, priority, project, todoStatus) {
    let newTodo = new Todo(title, description, dueDate, priority, project, todoStatus);
    todoManager.todoAdd(newTodo);
};

export default createTodo;