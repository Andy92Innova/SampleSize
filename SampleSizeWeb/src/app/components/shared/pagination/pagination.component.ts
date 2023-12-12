import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from 'src/app/model/Domain/PaginationModel';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination;
  @Input() previous:number = 0;
  @Output() next  = new EventEmitter<number>();

  constructor() { 
    this.pagination = new Pagination(1,1,0);
  }
  
  ngOnInit(): void {
  }
  
  setPreviousPage():void{
    const page = this.pagination.Page-1;
    this.next.emit(page)
  }

  setPage(value:number){
      this.next.emit(value);
  }

  setNextPage():void{
    const page = this.pagination.Page + 1;
    this.next.emit(page)
  }


  getArray(total:number): number[]{
    const valores = Array.from({length:total}, (_, index)=>index+1);
    return valores;
  }


}
