import todoManager from "../Logic/todoManager";

class FormRowInput {
    constructor(labelText, inputType, inputName, inputPlaceholder, inputRequired, errorId, errorMsg) {
        this.labelText = labelText;
        this.inputType = inputType;
        this.inputName = inputName;
        this.inputId = inputName;
        this.inputPlaceholder = inputPlaceholder;
        this.inputRequired = inputRequired;
        this.errorId = errorId;
        this.errorMsg = errorMsg;
    }

    createLabel() {
        const label = document.createElement("label");
        label.textContent = this.labelText;
        label.setAttribute("for", this.inputId);
        return label;
    }

    createInput() {
        const input = document.createElement("input");
        input.setAttribute("type", this.inputType);
        input.setAttribute("name", this.inputName);
        input.setAttribute("id", this.inputId);
        input.setAttribute("placeholder", this.inputPlaceholder);
        if (this.inputRequired) {
            input.setAttribute("required", "")
        };
        return input;
    }

    createErrorField() {
        const errorField = document.createElement("div");
        errorField.classList.add("error-field");
        errorField.setAttribute("id", this.errorId);
        errorField.textContent = this.errorMsg;
        return errorField;
    }

    createFormRow() {
        const label = this.createLabel();
        const br = document.createElement("br");
        const input = this.createInput();
        const errorField = this.createErrorField();
        const formRow = document.createElement("div");
        formRow.classList.add("form-row");
        formRow.appendChild(label);
        formRow.appendChild(br);
        formRow.appendChild(input);
        formRow.appendChild(errorField);
        return formRow;
    }
};

class FormRowSelect {
    constructor(labelText, id, inputRequired, errorId, selectOptions) {
        this.labelText = labelText;
        this.id = id;
        // this.inputPlaceholder = inputPlaceholder;
        this.inputRequired = inputRequired;
        this.errorId = errorId;
        this.selectOptions = selectOptions;
    }

    createLabel() {
        const label = document.createElement("label");
        label.textContent = this.labelText;
        label.setAttribute("for", this.id);
        return label;
    }

    createSelect() {
        const select = document.createElement("select");
        select.setAttribute("id", this.id);
       // select.setAttribute("placeholder", this.inputPlaceholder);
        if (this.inputRequired) {
            select.setAttribute("required", "")
        };
        return select;
    }

    createOptions() {
        const options = this.selectOptions.map(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.value;
            return optionElement;
        });        
        return options;
    }

    createErrorField() {
        const errorField = document.createElement("div");
        errorField.classList.add("error-field");
        errorField.setAttribute("id", this.errorId);
        return errorField;
    }

    createFormRow() {
        const label = this.createLabel();
        const br = document.createElement("br");
        const select = this.createSelect();
        const options = this.createOptions();
        const errorField = this.createErrorField();
        const formRow = document.createElement("div");

        formRow.classList.add("form-row");
        formRow.appendChild(label);
        formRow.appendChild(br);
        formRow.appendChild(select);
        formRow.appendChild(errorField);
        
        options.forEach(option => {
            select.appendChild(option);
        });

        return formRow;
    }
};

class FormRowTextarea {
    constructor(labelText, id, inputPlaceholder, errorId) {
        this.labelText = labelText;
        this.id = id;
        this.inputPlaceholder = inputPlaceholder;
        this.errorId = errorId;
    }

    createLabel() {
        const label = document.createElement("label");
        label.textContent = this.labelText;
        label.setAttribute("for", this.id);
        return label;
    }

    createTextarea() {
        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", this.id);
        textarea.setAttribute("placeholder", this.inputPlaceholder);
        if (this.inputRequired) {
            textarea.setAttribute("required", "")
        };
        return textarea;
    }

    createErrorField() {
        const errorField = document.createElement("div");
        errorField.classList.add("error-field");
        errorField.setAttribute("id", this.errorId);
        return errorField;
    }

    createFormRow() {
        const label = this.createLabel();
        const br = document.createElement("br");
        const textarea = this.createTextarea();
        const errorField = this.createErrorField();
        const formRow = document.createElement("div");
        formRow.classList.add("form-row");
        formRow.appendChild(label);
        formRow.appendChild(br);
        formRow.appendChild(textarea);
        formRow.appendChild(errorField);
        return formRow;
    }
};

class Button {
    constructor (btnName, btnClass, btnId) {
        this.name = btnName;
        this.class = btnClass;
        this.id = btnId;
    }

    createBtn() {
        const button = document.createElement("button");
        button.textContent = (this.name);
        button.classList.add(this.class);
        button.setAttribute("id", this.id);
        return button;
    }
};

class TodoFolder {
    constructor (folderName, folderClass, folderId) {
        this.folderName = folderName;
        this.folderClass = folderClass;
        this.folderId = folderId;
    }

    createFolder () {
        const folder = document.createElement("div");
        folder.textContent= this.folderName;
        folder.classList.add(this.folderClass);
        folder.setAttribute("id", this.folderId);

        return folder;
    }
};

class Display {
    constructor(displayName, filteredArray,) {
        this.name = displayName;
        this.array = filteredArray;
    }

    displayListItem(todo) {
        const listItem = document.createElement("li");
            listItem.classList.add("todo-list-item")
            listItem.setAttribute("list-id", `${todo.id}`);
            listItem.innerHTML = `

            <div class="item-row"> <strong>Title:</strong> <br> - ${todo.title} </div>
                
            <div class="item-row"> <strong>Description:</strong> <br> - ${todo.description} </div>
                
            <div class="item-row"> <strong>Due:</strong> <br> - ${todo.dueDate} </div>
                
            <div class="item-row"> <strong>Priority:</strong> <br> - ${todo.priority} </div>
                
            <div class="item-row"> <strong>Status:</strong> <br> - ${todo.status} </div>
            `;
           
        const removeItem = document.createElement("button");
            removeItem.classList.add("remove-item-btn");
            removeItem.textContent = "Remove";
            removeItem.addEventListener("click", () => {
                this.removeTodoandUpdateDisplay(todo.id);
            });

        /* const editTodo = document.createElement("button");
            editTodo.classList.add("edit-todo-btn");
            editTodo.setAttribute("id", "edit-todo-btn)")
        */
        listItem.appendChild(removeItem);
        return listItem;
    }
    
    removeTodoandUpdateDisplay(todoId) {
        this.array = this.array.filter(todo => todo.id !== todoId);
        this.array.forEach((todo, index) => {
            todo.id = index;
        });
        this.nextId = this.array.length;
        console.log("after removal: ", this.array);
        this.createDisplay();
    }

    clearDisplay() {
        console.log("Display Array:", this.array) //
        const list = document.getElementById("todo-list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        };
    }

    createDisplay() {
        this.clearDisplay();
        const array = this.array;
        const list = document.getElementById("todo-list");
        array.forEach(todo => {
            const listItem = this.displayListItem(todo);
            list.appendChild(listItem);
        });
        return list;
    }
};


export { FormRowInput, FormRowSelect, FormRowTextarea, Button, TodoFolder, Display };