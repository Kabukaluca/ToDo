import { Button, FormRow, FormRowInput, FormRowSelect, FormRowTextarea, TodoFolder } from "./domClasses";

//# === website Structure / Layout === //
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");


// ## === Content === ## //
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



// ## === Modal === ## //
    // --- newTodoForm --- //
    const formModal = document.createElement("div");
    formModal.setAttribute("id", "form-modal");
    document.body.appendChild(formModal);
    
    const newTodoForm = document.createElement("form");
        newTodoForm.setAttribute("id", "new-todo-form");

    const nameInput = new FormRowInput("Todo:", "text", "Todo", "Todo", "true", "todo-error", "Nothing todo ?");
    const descriptionInput = new FormRowTextarea("Description:", "Description", "About xy..", "errorId");
    const dueDateInput = new FormRowInput("Due:", "date", "Due", "01.10.2030", "true", "due-error");
    const priorityInput = new FormRowSelect("Priority:", "Priority", "required", "How important is this task ?", [{value: "High"}, {value: "Medium"}, {value: "Low"}]);
    const statusInput = new FormRowInput("Complete:", "checkbox", "Complete", "Complete",);

    const submitForm = document.createElement("input");
        submitForm.setAttribute("type", "button");
        submitForm.setAttribute("value", "Create Todo");
        submitForm.setAttribute("id", "new-todo-form-submit-btn")

    // == Append Elements == //
    const displayNewTodoForm = () => {
        formModal.appendChild(newTodoForm);
        formModal.style.display = "block";

        newTodoForm.appendChild(nameInput.createFormRow());
        newTodoForm.appendChild(descriptionInput.createFormRow());
        newTodoForm.appendChild(dueDateInput.createFormRow());
        newTodoForm.appendChild(priorityInput.createFormRow());
        newTodoForm.appendChild(statusInput.createFormRow());
        newTodoForm.appendChild(submitForm);
    };

    const closeNewTodoForm = () => {
        formModal.style.display = "none"
        while (newTodoForm.firstChild) {
            newTodoForm.removeChild(newTodoForm.firstChild);
        };
    };


export { displayContent, displayNewTodoForm, closeNewTodoForm };