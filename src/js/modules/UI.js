export default class UI {
  addToUI(date) {
    const { name, owner, phone, day, hour, notes, id } = date;
    const list = document.querySelector(".dates");
    list.innerHTML += `<li class="date" data-id=${id}>
           <h4 class="date-name">
               ${name}
           </h4>
           <p class="date-owner">Propietario: <span class="date-owner-result">${owner}</span></p>
           <p class="date-phone">Teléfono: <span class="date-phone-result">${phone}</span></p>
           <p class="date-day">Fecha: <span class="date-day-result">${day}</span></p>
           <p class="date-hour">Hora: <span class="date-hour-result">${hour}</span></p>
           <p class="date-notes">Comentarios: <span class="date-notes-result">${notes}</span></p>
           <button class="btn btn-delete">Eliminar</button>
           <button class="btn btn-edit">Editar</button>
       </li>`;
  }

  clearHTML() {
    const list = document.querySelector(".dates");
    while (list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }

  refreshList(dates) {
    dates.forEach((date) => this.addToUI(date));
  }

  toEditStatus(id, dates) {
    const name = document.querySelector("#name");
    const owner = document.querySelector("#owner");
    const phone = document.querySelector("#phone");
    const day = document.querySelector("#day");
    const hour = document.querySelector("#hour");
    const notes = document.querySelector("#notes");
    const dateToEdit = dates.filter((date) => date.id === Number(id));
    name.value = dateToEdit[0].name;
    owner.value = dateToEdit[0].owner;
    phone.value = dateToEdit[0].phone;
    day.value = dateToEdit[0].day;
    hour.value = dateToEdit[0].hour;
    notes.value = dateToEdit[0].notes;
    id = dateToEdit[0].id;
  }
}
