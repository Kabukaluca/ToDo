import { FormRowInput, FormRowTextarea, FormRowSelect } from "./domClasses";

const newTodoModal = document.createElement("div");
    newTodoModal.setAttribute("id", "todo-form-modal");
    newTodoModal.classList.add("modal")
    document.body.appendChild(newTodoModal);
    
const newTodoForm = document.createElement("form");
    newTodoForm.setAttribute("id", "new-todo-form");
    newTodoForm.classList.add("form");

const todoFormNameInput = new FormRowInput("Todo:", "text", "Todo", "Todo", "true", "todo-error", "Nothing todo ?");
const todoFormDescriptionInput = new FormRowTextarea("Description:", "Description", "About xy..", "errorId");
const todoFormDueDateInput = new FormRowInput("Due:", "date", "Due", "01.10.2030", "true", "due-error");
const todoFormPriorityInput = new FormRowSelect("Priority:", "Priority", "required", "How important is this task ?", [{value: "High"}, {value: "Medium"}, {value: "Low"}]);
const todoFormStatusInput = new FormRowInput("Complete:", "checkbox", "Complete", "Complete",);

const submitTodoForm = document.createElement("input");
    submitTodoForm.setAttribute("type", "button");
    submitTodoForm.setAttribute("value", "Create Todo");
    submitTodoForm.setAttribute("id", "new-todo-form-submit-btn")

        // -- Append Elements -- //
        const displayNewTodoForm = () => {
            newTodoModal.appendChild(newTodoForm);
            newTodoModal.style.display = "block";

            newTodoForm.appendChild(todoFormNameInput.createFormRow());
            newTodoForm.appendChild(todoFormDescriptionInput.createFormRow());
            newTodoForm.appendChild(todoFormDueDateInput.createFormRow());
            newTodoForm.appendChild(todoFormPriorityInput.createFormRow());
            newTodoForm.appendChild(todoFormStatusInput.createFormRow());
            newTodoForm.appendChild(submitTodoForm);
        };

    const closeNewTodoForm = () => {
        newTodoModal.style.display = "none"
        while (newTodoForm.firstChild) {
            newTodoForm.removeChild(newTodoForm.firstChild);
        };
    };


// --- new Project Form --- //
const newProjectModal = document.createElement("div");
    newProjectModal.setAttribute("id", "new-project-modal");
    newProjectModal.classList.add("modal");
    document.body.appendChild(newProjectModal);

const newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("id", "new-project-form");
    newProjectForm.classList.add("form");
    const projectFormNameInput = new FormRowInput("Project:", "text", "Project", "Project", "true", "project-error", "Just casual stuff ?");
    
const submitProjectForm = document.createElement("input");
    submitProjectForm.setAttribute("type", "button");
    submitProjectForm.setAttribute("value", "Create Project");
    submitProjectForm.setAttribute("id", "new-project-form-submit-btn")

    // -- Append Elements -- //
    const displayNewProjectForm = () => {
        newProjectModal.appendChild(newProjectForm);
        newProjectModal.style.display = "block";

        newProjectForm.appendChild(projectFormNameInput.createFormRow());
        newProjectForm.appendChild(submitProjectForm);
    };

    const closeNewProjectForm = () => {
        newProjectModal.style.display = "none"
        while (newProjectForm.firstChild) {
            newProjectForm.removeChild(newProjectForm.firstChild);
        };
    };

export { displayNewTodoForm, closeNewTodoForm, displayNewProjectForm, closeNewProjectForm  };