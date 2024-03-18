
class TodoManager {
    constructor() {
        this.todoList = [];
    }

    todoAdd(todo) {
        this.todoList.push(todo);
    }

    todoRemove(todoId) {
        this.todoList = this.todoList.filter(todo => todo.id !== todoId);
    }

    todoToggleStatus(todoId) {
        this.todoList.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            };
        });
    }
};

const todoManager = new TodoManager();
export default todoManager;