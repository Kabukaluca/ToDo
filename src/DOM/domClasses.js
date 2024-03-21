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
    constructor (folderName, folderId) {
        this.folderName = folderName;
        this.folderId = folderId;
    }

    createFolder () {
        const folder = document.createElement("div");
        folder.textContent(this.folderName);
        folder.classList.add("todo-folder");
        folder.setAttribute("id", this.folderId);

        return folder;
    }
};

export { FormRow, Button, TodoFolder };