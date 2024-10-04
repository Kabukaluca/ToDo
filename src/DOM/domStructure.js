import { Button, TodoFolder } from "./domClasses";

//# === website Structure / Layout === //
const header = document.getElementById("header");
const content = document.getElementById("content");
    // const sidebar = document.createElement("div");
const footer = document.getElementById("footer");


// ## === Header === ## //

const headerElement = document.createElement("div");
    headerElement.setAttribute("id", "header-content");

    // -- Current Folder Name -- //
    const currentFolderName = document.createElement("div");
        currentFolderName.classList.add("header-elements");
        currentFolderName.setAttribute("id", "current-folder-name");
        currentFolderName.textContent = "All Todo's"; // set initial folderName

    // -- New Todo -- //
    const newTodoBtn = new Button("＋new Todo", "header-elements", "new-todo-btn");
    
    // == Append Elements == //
    //headerElement.appendChild(headerLogo);
    headerElement.appendChild(currentFolderName);
    headerElement.appendChild(newTodoBtn.createBtn());


// ## === Content === ## //
    //# --- Sidebar --- #//
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
        sidebar.setAttribute("id", "sidebar");
        
    // -- App Name -- //
        const appLogo = document.createElement("div");
        // appLogo.classList.add("header-elements");
        appLogo.setAttribute("id", "app-logo");
        appLogo.textContent = "TaskTango"; // set name for Website in header

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
        sidebar.appendChild(appLogo);
        sidebar.appendChild(allTodo.createFolder());
        sidebar.appendChild(priorities.createFolder());
        sidebar.appendChild(completed.createFolder());
        sidebar.appendChild(newProjectBtn.createBtn());
        mainContent.appendChild(todoListContainer);

        content.appendChild(sidebar);
        content.appendChild(mainContent)
        content.appendChild(headerElement);
    };

export { displayContent };