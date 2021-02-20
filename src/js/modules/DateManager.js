export default class Dates{
    constructor(){
        this.dates = []
    }

    addDate(date){
        this.dates = [...this.dates, date]
        console.log(this.dates)
    }
}