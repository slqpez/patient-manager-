import UI from "../js/modules/UI.js";
import Info from "../js/modules/Info.js";

const form = document.querySelector("#form");
const btnMain = document.querySelector(".btn-main");
const ui = new UI();
const info = new Info();

btnMain.addEventListener("click", addDate);
document.addEventListener("DOMContentLoaded", ShowList)

function addDate(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const owner = document.querySelector("#owner").value;
  const phone = document.querySelector("#phone").value;
  const day = document.querySelector("#day").value;
  const hour = document.querySelector("#hour").value;
  const notes = document.querySelector("#notes").value;
  ui.cleanHtml()

  const dateInfo = {
    name,
    owner,
    phone,
    day,
    hour,
    notes,
    id:  Date.now(),
  };

  info.addDateInfo(dateInfo)
  
    ui.addDateToList(info.getDates()); 
  
   
  
}

function ShowList(){
    console.log(info.getDates())
}
