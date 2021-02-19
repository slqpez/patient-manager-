import UI from "../js/modules/UI.js";
import Info from "../js/modules/Info.js";

const form = document.querySelector("#form");
const btnMain = document.querySelector(".btn-main");
const dates = document.querySelector(".results");
const ui = new UI();
const info = new Info();

btnMain.addEventListener("click", addDate);
/* document.addEventListener("DOMContentLoaded", ShowList) */

function addDate(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const owner = document.querySelector("#owner").value;
  const phone = document.querySelector("#phone").value;
  const day = document.querySelector("#day").value;
  const hour = document.querySelector("#hour").value;
  const notes = document.querySelector("#notes").value;

  const dateInfo = {
    name,
    owner,
    phone,
    day,
    hour,
    notes,
    id: Date.now(),
  };

  if (
    name === "" ||
    owner === "" ||
    phone === "" ||
    day === "" ||
    hour === "" ||
    notes === ""
  ) {
    ui.showMessage("Campos faltantes", "error");
  } else {
    ui.cleanHtml();
    info.addDateInfo(dateInfo);

    ui.addDateToList(info.getDates());
    form.reset();
  }
}

dates.addEventListener("click", deleteDate);

function deleteDate(e) {
  e.stopPropagation();
  e.preventDefault();
  const id = e.target.parentElement.getAttribute("data-id");
  if (e.target.classList.contains("btn-delete")) {
    ui.cleanHtml();
    info.deleteDateInfo(id);
    ui.addDateToList(ui.deleteDateFromList(id, info.getDates()));
    console.log(info.getDates());
  }
}
