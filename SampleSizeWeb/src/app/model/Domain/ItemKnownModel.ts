export class ItemKnown{
    
    Index:number | undefined;
    Result:string | undefined;

    constructor(index:number, result:string){
        this.Index = index;
        this.Result = result
    }

    SetItemKnown(index:number, result:string){
        this.Index = index;
        this.Result = result
    }
}