import UI  from  "../js/modules/UI.js"

const form = document.querySelector("#form")
const btnMain = document.querySelector(".btn-main")
console.log(btnMain)

const ui = new UI()

btnMain.addEventListener('click', addDate)

function addDate(e){
    e.preventDefault()
    ui.addDateToList("perru","unloco","4545","la fecha de","la hora","coments")

}