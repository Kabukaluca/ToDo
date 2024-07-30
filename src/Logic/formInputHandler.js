import createTodo from "./createTodo";
import { closeNewProjectForm, closeNewTodoForm } from "../DOM/formModals.js";
import todoManager from "./todoManager";
import { Display, Project } from "../DOM/domClasses";

const initialProjects = [
    { value: "" },
    { value: "Odin Project" },
    { value: "University" },
];

const updateProjectList = (newProject) => {
        initialProjects.push({ value: newProject });
};

const checkTodoInputValidity = () => {
        let todoName = document.getElementById("Todo").value;
        let todoDescription = document.getElementById("Description").value;
        let todoDue = document.getElementById("Due").value;
        let todoPriority = document.getElementById("Priority").value;
        let todoProject = document.getElementById("todo-form-project-select").value
        // let todoStatus = document.getElementById("Complete").checked;

        if (todoName === "") {
            const error = document.getElementById("todo-error");
            error.textContent = "Nothing todo, eh?";
        };
        if (todoDue === "") {
            const error = document.getElementById("due-error");
            error.textContent = "No deadline, eh?";
            return
        } else {
            createTodo(todoName, todoDescription, todoDue, todoPriority, todoProject, /* todoStatus */);
            console.log(todoManager.todoList);
            new Display("displayAll", todoManager.todoList).createDisplay();
            closeNewTodoForm();
        };
}; 

const checkProjectInputValidity = () => {
    let projectInput = document.getElementById("project");
    
    if(!projectInput) {
        console.log("Project input element not found");
        return;
    }

    let projectName = projectInput.value;
    
    if (projectName === "") {
        const error = document.getElementById("project-error");
        error.textContent = "Just casual stuff, eh?";
    } else {
        const project = new Project(projectName);
        project.createNewProject();
        updateProjectList(projectName);
        
        closeNewProjectForm();
    }
};

export { checkTodoInputValidity, checkProjectInputValidity, initialProjects};