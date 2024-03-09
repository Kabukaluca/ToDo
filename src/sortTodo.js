import { todo_all, priority_high, priority_medium, priority_low } from "./array";
import clearArrays from "./clearArrays";

const sortTodo = () => {
    clearArrays();

    function sort(todo, index) {
        const priority = todo.priority;

        if (priority === "high") {
            priority_high.push(todo);
            console.log(index)
        };

        if (priority === "medium") {
            priority_medium.push(todo);
            console.log(index)
        };

        if (priority === "low") {
            priority_low.push(todo);
        };
    };
    todo_all.forEach(sort);
};

export default sortTodo;