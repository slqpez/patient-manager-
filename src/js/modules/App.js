import {deleteDate,editDate,schedule} from "../utils/functions.js"
import {list, form} from "../utils/selectors.js"

export default class App{
    constructor(){
        this.initApp()
    }


    initApp(){

        form.addEventListener("submit", schedule);
        list.addEventListener("click", deleteDate);
        list.addEventListener("click", editDate);
        }
}

