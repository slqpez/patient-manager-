import UI from "../js/modules/UI.js";
import DateManager from "./modules/DateManager.js";

const ui = new UI();
const dateManager = new DateManager();

const form = document.querySelector("#form");
const list = document.querySelector(".dates")

const name = document.querySelector("#name");
const owner = document.querySelector("#owner");
const phone = document.querySelector("#phone");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const notes = document.querySelector("#notes");

form.addEventListener("submit", schedule);
list.addEventListener("click", deleteDate);

function schedule(e) {
  e.preventDefault();
  const dateObj = {
    name: name.value,
    owner: owner.value,
    phone: phone.value,
    day: day.value,
    hour: hour.value,
    notes: notes.value,
  };
  dateObj.id = Date.now();

  dateManager.addDate(dateObj);
  ui.addToUI(dateObj);
}

function deleteDate(e){
  if(e.target.classList.contains("btn-delete")){
    const id = e.target.parentNode.getAttribute("data-id")
    dateManager.deleteDate(id)
    ui.clearHTML()
    ui.refreshList(dateManager.getDates())

  }
    
}