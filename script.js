const btn = document.querySelector("[data-form-btn]");

//Arrow funtion
const createTask = (evento) => {
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
    evento.preventDefault();
}

btn.addEventListener("click",createTask);

