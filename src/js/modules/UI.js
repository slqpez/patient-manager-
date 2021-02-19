export default class UI {
  constructor() {}

  showMessage(msg, type) {
    const form = document.querySelector("form");
    const msgP = document.createElement("p");
    msgP.textContent = msg;
    msgP.className = "msg"
    if (type === "error") {
      msgP.style.color = "red";
    }
    if(!document.querySelector(".msg")){
        form.appendChild(msgP);
    }
    
    
    setTimeout(() => {
        msgP.remove()
    },2000)
  }

  addDateToList(dates) {
    const list = document.querySelector(".dates");
    dates.forEach((date) => {
      list.innerHTML += `<li class="date" data-id=${date.id}>
        <h4 class="date-name">
            ${date.name}
        </h4>
        <p class="date-owner">Propietario: <span class="date-owner-result">${date.owner}</span></p>
        <p class="date-phone">Teléfono: <span class="date-phone-result">${date.phone}</span></p>
        <p class="date-day">Fecha: <span class="date-day-result">${date.day}</span></p>
        <p class="date-hour">Hora: <span class="date-hour-result">${date.hour}</span></p>
        <p class="date-notes">Comentarios: <span class="date-notes-result">${date.notes}</span></p>

        <button class="btn btn-delete">Eliminar</button>
        <button class="btn btn-edit">Editar</button>

    </li>`;
    });
  }

  deleteDateFromList(id, dates) {
    return dates.filter((date) => date.id != id);
  }

  cleanHtml() {
    const list = document.querySelector(".dates");
    while (list.hasChildNodes()) list.firstChild.remove();
  }
}
