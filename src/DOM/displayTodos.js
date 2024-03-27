import { filteredTasks, filterTodos } from "../Logic/filterArrays"
import todoManager from "../Logic/todoManager";
import { TodoFolder } from "./domClasses";
import { eventListenersPriorities } from "./domManager";

const displayAll = () => {
    clearDisplay();
    const all = todoManager.todoList;
    const list = document.getElementById("todo-list");
    all.forEach(todo => {
        const listItem = displayListItem(todo);
        list.appendChild(listItem);
    });
};

 const displayPriorityFolder = () => {
    clearDisplay();
    const list = document.getElementById("todo-list");
    const highPriorityTasks = new TodoFolder("High", "priority-container", "high-priority-folder");
    const mediumPriorityTasks = new TodoFolder("Medium", "priority-container", "medium-priority-folder");
    const lowPriorityTasks = new TodoFolder("Low", "priority-container", "low-priority-folder");

    list.appendChild(highPriorityTasks.createFolder());
    list.appendChild(mediumPriorityTasks.createFolder());
    list.appendChild(lowPriorityTasks.createFolder());
};
    const displayHighPriorities = () => {
        clearDisplay();
        const high = filteredTasks.highPriorityTasks;
        const list = document.getElementById("todo-list");
        high.forEach(todo => {
            const listItem = displayListItem(todo);
            list.appendChild(listItem);
        });
    };
    const displayMediumPriorities = () => {
        clearDisplay();
        const medium = filteredTasks.mediumPriorityTasks;
        const list = document.getElementById("todo-list");
        medium.forEach(todo => {
            const listItem = displayListItem(todo);
            list.appendChild(listItem);
        });
    };
    const displayLowPriorities = () => {
        clearDisplay();
        const low = filteredTasks.lowPriorityTasks;
        const list = document.getElementById("todo-list");
        low.forEach(todo => {
            const listItem = displayListItem(todo);
            list.appendChild(listItem);
        });
    };

const displayCompleted = () => {
    clearDisplay();
    const completed = filteredTasks.completeTasks;
    const list = document.getElementById("todo-list");
    completed.forEach(todo => {
        const listItem = displayListItem(todo);
        list.appendChild(listItem);
    });
};

export { displayAll, displayPriorityFolder, displayCompleted, displayHighPriorities, displayMediumPriorities, displayLowPriorities };

const displayListItem = (todo) => {
    const listItem = document.createElement("li");
        listItem.classList.add("todo-list-item")
        listItem.innerHTML = `
            <strong>Title:</strong> ${todo.title}<br>
            <strong>Description:</strong> ${todo.description}<br>
            <strong>Due:</strong> ${todo.dueDate}<br>
            <strong>Priority:</strong> ${todo.priority}<br>
            <strong>Status:</strong> ${todo.status}<br>
        `;
    return listItem;
};

const clearDisplay = () => {
    const list = document.getElementById("todo-list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };
};