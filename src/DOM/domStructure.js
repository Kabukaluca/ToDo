import { TodoFolder } from "./domClasses";

//# === website Structure / Layout === //
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");

//# --- Sidebar --- //
const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    
    // -- Todo Folder -- //
    const allTodo = new TodoFolder("All", "todo-folder-all");
    const priorities = new TodoFolder("Priorities", "todo-folder-priorities");
    const completed = new TodoFolder("Completed", "todo-folder-completed");

// --- Main Content --- //
const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");


// == Append Elements == //
const displayContent = () => {
    sidebar.appendChild(allTodo.createFolder());
    sidebar.appendChild(priorities.createFolder());
    sidebar.appendChild(completed.createFolder());

    content.appendChild(sidebar);
    content.appendChild(mainContent);
};

export default displayContent;