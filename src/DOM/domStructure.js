import { Button, TodoFolder } from "./domClasses";

//# === website Structure / Layout === //
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");


// ## === Header === ## //

    // -- App Name -- //
    const headerLogo = document.createElement("div");
        headerLogo.classList.add("header-logo");
        headerLogo.setAttribute("id", "header-logo");
        headerLogo.textContent = "TaskTango"; // set name for Website in header

    // -- Current Folder Name -- //
    const currentFolderName = document.createElement("div");
        currentFolderName.classList.add("current-folder-name");
        currentFolderName.setAttribute("id", "current-folder-name");
        currentFolderName.textContent = "All Todo's";

    // -- New Todo -- //
    const newTodoBtn = new Button("＋new Todo", "new-element-btn", "new-todo-btn");
    
    // == Append Elements == //
    header.appendChild(headerLogo);
    header.appendChild(currentFolderName);
    header.appendChild(newTodoBtn.createBtn());


// ## === Content === ## //
    //# --- Sidebar --- #//
    const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
        sidebar.setAttribute("id", "sidebar");
        
        // -- Todo Folder -- //
        const allTodo = new TodoFolder("All", "todo-folder", "todo-folder-all");
        const priorities = new TodoFolder("Priorities", "todo-folder", "todo-folder-priorities");
        const completed = new TodoFolder("Completed", "todo-folder", "todo-folder-completed");

        // -- New Project -- //
        const newProjectBtn = new Button("＋new Project", "new-element-btn", "new-project-btn");

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
        sidebar.appendChild(newProjectBtn.createBtn());
        mainContent.appendChild(todoListContainer);

        content.appendChild(sidebar);
        content.appendChild(mainContent);
    };

export { displayContent };