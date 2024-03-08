import { todo_all, priority_high, priority_medium, priority_low } from "./array";
import createTodo from "./createTodo";

function newTodo(a, b, c, d) {
    createTodo(a, b, c, d)
};

newTodo("Low", "test", "test", "low")
newTodo("Medium", "Test", "13.13", "medium")
newTodo("The Odin Project", "Finish the Odin Project to learn code", "31.12.2024", "high");
console.log(todo_all, priority_high, priority_medium, priority_low);