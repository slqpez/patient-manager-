export default class Info{
    constructor(){
        this._dates = []
    }


    getDates(){
        return this._dates
    }
    addDateInfo(date){
        this._dates.push(date)
    
    }
    deleteDateInfo(id){
       this._dates = this._dates.filter(date=>date.id != id)
    }

    editDateInfo(dateToEdit){
        this._dates = this._dates.map(date=> date.id ===dateToEdit.id? date: dateToEdit)
    }
}
