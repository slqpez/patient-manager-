export default class Dates{
    constructor(){
        this.dates = []
    }

    addDate(date){
        this.dates = [...this.dates, date]
        
    }

    deleteDate(id){
        this.dates = this.dates.filter(date=>date.id !== Number(id))
    }
   getDates(){
       return this.dates;
   }
}