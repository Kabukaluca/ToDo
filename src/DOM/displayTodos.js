import { filterTodos, filteredTasks } from "../Logic/filterArrays"
import todoManager from "../Logic/todoManager";
import { TodoFolder, Display } from "./domClasses";

const waitForFiltering = setInterval(() => {
    if (filteredTasks.incompleteTasks !== undefined) {
        clearInterval(waitForFiltering);

        const displayAll = new Display("displayAll", todoManager.todoList);
        const displayCompleted = new Display("displayCompleted", filteredTasks.completeTasks);

        const displayPriorityFolder = () => {
            const list = document.getElementById("todo-list");
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                };
            const highPriorityTasks = new TodoFolder("High", "priority-container", "high-priority-folder");
            const mediumPriorityTasks = new TodoFolder("Medium", "priority-container", "medium-priority-folder");
            const lowPriorityTasks = new TodoFolder("Low", "priority-container", "low-priority-folder");
            
            list.appendChild(highPriorityTasks.createFolder());
            list.appendChild(mediumPriorityTasks.createFolder());
            list.appendChild(lowPriorityTasks.createFolder());
        };

    const displayHighPriorities = new Display("highPriority", filteredTasks.highPriorityTasks);
    const displayMediumPriorities = new Display("mediumPriority", filteredTasks.mediumPriorityTasks);
    const displayLowPriorities = new Display("lowPriority", filteredTasks.lowPriorityTasks);

    console.log("displayJS inside:", displayAll, displayCompleted);


    console.log(filteredTasks, filteredTasks.incompleteTasks);
    
    return(filteredTasks, filteredTasks.incompleteTasks);
    }
}, 100);

// export { displayAll, displayCompleted,  };
