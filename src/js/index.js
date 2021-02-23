import UI from "../js/modules/UI.js";
import DateManager from "./modules/DateManager.js";

let editing;
let idSelected;

const ui = new UI();
const dateManager = new DateManager();

const form = document.querySelector("#form");
const list = document.querySelector(".dates");
const btnForm = document.querySelector(".btn-main");

const name = document.querySelector("#name");
const owner = document.querySelector("#owner");
const phone = document.querySelector("#phone");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const notes = document.querySelector("#notes");

form.addEventListener("submit", schedule);
list.addEventListener("click", deleteDate);
list.addEventListener("click", editDate);

function schedule(e) {
  e.preventDefault();

  if(name.value===""||owner.value===""|| phone.value===""|| day.value==="" || hour.value==="" || notes.value===""){
    ui.showMessage("Faltan campos por llenar.", "error")
  }else{
    const dateObj = {
      name: name.value,
      owner: owner.value,
      phone: phone.value,
      day: day.value,
      hour: hour.value,
      notes: notes.value,
    };
  
    if (editing) {
      ui.clearHTML();
      editing = false;
      btnForm.textContent = "Agendar"; 
      dateManager.editDate(idSelected,dateObj)
      ui.refreshList(dateManager.getDates());
      form.reset()
      ui.showMessage("Cita editada correctamente.")

  
      
    } else {
      dateObj.id = Date.now();
      dateManager.addDate(dateObj);
      ui.addToUI(dateObj);
      form.reset();
      ui.showMessage("Cita agregada correctamente.")
    }

    
  }

  
  
}

function deleteDate(e) {
  if (e.target.classList.contains("btn-delete")) {
    const id = e.target.parentNode.getAttribute("data-id");
    dateManager.deleteDate(id);
    ui.clearHTML();
    ui.refreshList(dateManager.getDates());
  }
}

function editDate(e) {
  if (e.target.classList.contains("btn-edit")) {
    editing = true;
    btnForm.textContent = "Guardar cambios";
    const id = e.target.parentNode.getAttribute("data-id");
    idSelected = id
    ui.toEditStatus(id, dateManager.getDates())
    
  }
}
