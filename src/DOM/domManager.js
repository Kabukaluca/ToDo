import { FormRow, Button } from "./domClasses";

// 


// --- Todo Creation Form --- //
const modal = document.createElement("dialog");
    modal.id = "form-modal";

const popup = document.createElement("div");
    popup.classList.add("form-popup");

const title = document.createElement("h2");
    title.classList.add("form-title");

const form = document.createElement("form");
    form.id = "form-create-todo"

const createBtn = new Button ("create", "btn", "btn-create");
const cancelBtn = new Button ("cancel", "btn", "btn-cancel");