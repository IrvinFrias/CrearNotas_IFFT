//Immediately invoked function expression IIFE
( () => {

const btn = document.querySelector("[data-form-btn]");

//Arrow funtion
const createTask = (evento) => {
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li"); //1. Crear Etiqueta
    task.classList.add('card'); // Agrega clase a Etiqueta.

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    const content = `
                    
                
                <i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content; //2. Asignar contenido a la etiqueta
    task.appendChild(taskContent);
    list.appendChild(task); //3. Agregar hijo a un etiqueta existente
    input.value = "";
    evento.preventDefault();
}

btn.addEventListener("click",createTask);



const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener("click", completeTask)
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle('complteIcon');
    element.classList.toggle('far');
}

})();

