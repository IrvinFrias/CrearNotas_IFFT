//Immediately invoked function expression IIFE ( () => {})();
import {readTask} from "./components/readTasks.js";
import {addTask} from "./components/addTask.js";

const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click",addTask);

readTask();


