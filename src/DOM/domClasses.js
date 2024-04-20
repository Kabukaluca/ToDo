class FormRow {
    constructor(labelText, inputType, inputName, inputId, inputPlaceholder, inputRequired, errorId) {
        this.labelText = labelText;
        this.inputType = inputType;
        this.inputName = inputName;
        this.inputId = inputId;
        this.inputPlaceholder = inputPlaceholder;
        this.inputRequired = inputRequired;
        this.errorId = errorId;
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
        return errorField;
    }

    createFormRow() {
        const label = this.createLabel();
        const input = this.createInput();
        const errorField = this.createErrorField();
        const formRow = document.createElement("div");
        formRow.classList.add("form-row");
        formRow.appendChild(label);
        formRow.appendChild(input);
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
        button.textContent(this.name);
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

/* class PriorityList {
    constructor(list, listName, id, filteredArray) {
        this.listName = listName;
        this.id = id;
        this.filteredArray = filteredArray;
        this.list = list;
    }

    createList() {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-list-item");

        list.appendChild(listItem);
    }
} */

class Display {
    constructor(displayName, filteredArray,) {
        this.name = displayName;
        this.array = filteredArray;
    }

    log() {
        console.log(this.array)
    }

    displayListItem(todo) {
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

    clearDisplay() {
        console.log("Display Array:", this.array) //
        const list = document.getElementById("todo-list");
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        };
    }

    createDisplay() {
        console.log("Display Array:", this.array); //
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



export { FormRow, Button, TodoFolder, Display };