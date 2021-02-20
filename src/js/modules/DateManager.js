export default class DateManager {
  constructor() {
    this.dates = [];
  }

  addDate(date) {
    this.dates = [...this.dates, date];
  }

  deleteDate(id) {
    this.dates = this.dates.filter((date) => date.id !== Number(id));
  }
   editDate(id, dateToEdit){
      this.dates = this.dates.map(date=>{
        if(date.id===Number(id)){
            date = dateToEdit
            //date.id = id
        }else{
            date=date 
      }
      })
    
  } 
  getDates() {
    return this.dates;
  }
}
