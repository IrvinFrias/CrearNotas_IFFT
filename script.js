//Immediately invoked function expression IIFE ( () => {})();

import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";


const btn = document.querySelector("[data-form-btn]");

//Arrow funtion
const createTask = (evento) => {
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card'); // Agrega clase a Etiqueta.
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete()); //icono check
    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    input.value = "";
    evento.preventDefault();
}

btn.addEventListener("click",createTask);


