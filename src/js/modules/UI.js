export default class UI{

    constructor(){}

    addDateToList(name,owner,phone,day,hour,notes){
        const list = document.querySelector(".dates")
        list.innerHTML += `<li class="date">
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

    </li>`
    }
}