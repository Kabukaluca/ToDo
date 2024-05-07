import createTodo from "./createTodo";
import { closeNewTodoForm } from "../DOM/domStructure";
import todoManager from "./todoManager";


const checkValidity = () => {
    const todoForm = document.getElementById("new-todo-form");
    
        let todoName = document.getElementById("Todo").value;
        let todoDescription = document.getElementById("Description").value;
        let todoDue = document.getElementById("Due").value;
        let todoPriority = document.getElementById("Priority").value;
        let todoStatus = document.getElementById("Complete").checked;

        if (todoName === "") {
            const error = document.getElementById("todo-error");
            error.textContent = "Nothing todo, eh?";
        };
        if (todoDue === "") {
            const error = document.getElementById("due-error");
            error.textContent = "No deadline, eh?";
            return
        } else {
            createTodo(todoName, todoDescription, todoDue, todoPriority, todoStatus);
            console.log(todoManager.todoList);
            closeNewTodoForm();
        };
}; 


export { checkValidity };