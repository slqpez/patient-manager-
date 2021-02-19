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
}
