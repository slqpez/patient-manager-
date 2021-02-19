import UI from "../js/modules/UI.js";
import Info from "../js/modules/Info.js";

let editing;

const form = document.querySelector("#form");
const btnMain = document.querySelector(".btn-main");
const dates = document.querySelector(".results");
const ui = new UI();
const info = new Info();

btnMain.addEventListener("click", addDate);
dates.addEventListener("click", deleteDate);
dates.addEventListener("click", editDate);

const name = document.querySelector("#name");
const owner = document.querySelector("#owner");
const phone = document.querySelector("#phone");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const notes = document.querySelector("#notes");



function addDate(e) {
  e.preventDefault();

  const dateInfo = {
    name: name.value,
    owner: owner.value,
    phone: phone.value,
    day: day.value,
    hour: hour.value,
    notes: notes.value,
    
  };
if(editing){
  btnMain.textContent = "Agendar"
  editing = false
  info.editDateInfo(dateInfo)
  ui.cleanHtml();
  ui.addDateToList(info.getDates());
  form.reset()
}else{
  dateInfo.id = Date.now()


   /* if (
    name.value === "" ||
    owner.value === "" ||
    phone.value === "" ||
    day.value === "" ||
    hour.value === "" ||
    notes.value === ""
  ) {
    ui.showMessage("Campos faltantes", "error");
  } else {  */
  ui.cleanHtml();
  info.addDateInfo(dateInfo);

  ui.addDateToList(info.getDates());
  form.reset();
  //}
}
  
}


function deleteDate(e) {
  e.stopPropagation();
  e.preventDefault();
  const id = e.target.parentElement.getAttribute("data-id");
  if (e.target.classList.contains("btn-delete")) {
    ui.cleanHtml();
    info.deleteDateInfo(id);
    ui.addDateToList(ui.deleteDateFromList(id, info.getDates()));
  }
}

function editDate(e) {
  editing= true;
  btnMain.textContent = "Guardar cambios"
  e.stopPropagation();
  e.preventDefault();
  const id = e.target.parentElement.getAttribute("data-id");
  if (e.target.classList.contains("btn-edit")) {
    ui.editDate(id, info.getDates(),name, owner, phone, day, hour, notes);
    
  }
}
