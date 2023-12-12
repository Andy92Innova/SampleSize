export class Pagination{
    TotalPages:number = 1;
    Page:number = 1;
    Next:number = 1;
    Previous:number = 0;

    constructor(page:number, next:number, previous:number){
        this.Page = page;
        this.Next = next;
        this.Previous = previous;
    }

    SetPagination(page:number, previous:number, next:number ){
        this.Page = page;
        this.Previous = previous;
        this.Next = next;
    }
}