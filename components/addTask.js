
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import {readTask} from "./readTasks.js";


export const addTask = (evento) =>{
    evento.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    input.value = "";


    //Fecha
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");


    calendar.value = "";

    if( value === "" || date === ""){
        return;
    }

    //Almacenando Información:
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskObj = {
        value,
        dateFormat
    };

    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    //Inicializar lista vacia:
    list.innerHTML = '';

    //Agregar Tarea por fecha
    readTask();
}



//Arrow funtion
 export const createTask = ({value, dateFormat}) => {
    const task = document.createElement("li");
    task.classList.add('card');


    const taskContent = document.createElement("div");

    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);


    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());

    return task;
}