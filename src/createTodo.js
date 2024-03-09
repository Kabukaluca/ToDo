import { todo_all } from "./array";
import sortTodo from "./sortTodo";

class Todo {
    constructor(title, description, dueDate, priority, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
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

function createTodo(title, description, dueDate, priority) {
    let newTodo = new Todo(title, description, dueDate, priority);
    todo_all.push(newTodo);
    sortTodo();
};

export default createTodo;