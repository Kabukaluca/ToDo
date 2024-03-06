import todo_all from "./array.js"

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    createData() {
        let data = {
            Title: this.title,
            Description: this.description,
            Due: this.dueDate,
            Importance: this.priority
        };
        return data;
    };
};

function createTodo(title, description, dueDate, priority) {
    let newTodo = new Todo(title, description, dueDate, priority);
    todo_all.push(newTodo);
};

export default createTodo;