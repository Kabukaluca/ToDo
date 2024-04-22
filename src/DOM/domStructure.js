import { Button, TodoFolder } from "./domClasses";

//# === website Structure / Layout === //
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");


//# --- Sidebar --- //
const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.setAttribute("id", "sidebar");
    
    // -- Todo Folder -- //
    const allTodo = new TodoFolder("All", "todo-folder", "todo-folder-all");
    const priorities = new TodoFolder("Priorities", "todo-folder", "todo-folder-priorities");
    const completed = new TodoFolder("Completed", "todo-folder", "todo-folder-completed");

    // -- New Todo -- //
    const newTodoBtn = new Button("＋new Todo", "newTodoBtn", "newTodoBtn")


// --- Main Content --- //
const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    mainContent.setAttribute("id", "main-content")

const todoListContainer = document.createElement("ul");
    todoListContainer.classList.add("todo-list");
    todoListContainer.setAttribute("id", "todo-list");

    
// == Append Elements == //
const displayContent = () => {
    sidebar.appendChild(allTodo.createFolder());
    sidebar.appendChild(priorities.createFolder());
    sidebar.appendChild(completed.createFolder());
    sidebar.appendChild(newTodoBtn.createBtn());

    mainContent.appendChild(todoListContainer);

    content.appendChild(sidebar);
    content.appendChild(mainContent);
};

export default displayContent;