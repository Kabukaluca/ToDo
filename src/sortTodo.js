import { todo_all, priority_high, priority_medium, priority_low, complete, uncomplete } from "./array";
import clearArrays from "./clearArrays";

const sortTodo = () => {
    clearArrays();

    function sort(todo, index) {
        const priority = todo.priority;
        const todoStatus = todo.status;

        if (priority === "high") {
            priority_high.push(todo);
        };

        if (priority === "medium") {
            priority_medium.push(todo);
        };

        if (priority === "low") {
            priority_low.push(todo);
        };

        if (todoStatus === "complete") {
            complete.push(todo);
        } else {
            uncomplete.push(todo);
        };
    };
    todo_all.forEach(sort);
};

export default sortTodo;