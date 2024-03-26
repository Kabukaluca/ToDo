import { filteredTasks, filterTodos } from "../Logic/filterArrays"
import todoManager from "../Logic/todoManager";
import { PriorityList } from "./domClasses";


const displayAll = () => {
    clearDisplay();
    const all = todoManager.todoList;
    const list = document.getElementById("todo-list");
    all.forEach(todo => {
        const listItem = displayListItem(todo);
        list.appendChild(listItem);
    });
};

 const displayPriorities = () => {
    clearDisplay();
    const list = document.getElementById("todo-list");
   // const highPriorityTasks = document.createElement
   // const mediumPriorityTasks
   //  const lowPriorityTasks
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

export { displayAll, displayPriorities, displayCompleted };

// const displayAll = new displayList();
const displayHighPriority = new PriorityList("highPriorities", "high-priority-list", filteredTasks.highPriorityTasks);
const displayMediumPriority = new PriorityList("mediumPriorities", "medium-priority-list", filteredTasks.mediumPriorityTasks);
const displayLowPrioritity = new PriorityList("lowPriority", "low-priority-list", filteredTasks.lowPriorityTasks);


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