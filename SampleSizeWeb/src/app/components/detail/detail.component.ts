import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputModel } from 'src/app/model/Domain/InputModel';
import { ItemKnown } from 'src/app/model/Domain/ItemKnownModel';
import { Pagination } from 'src/app/model/Domain/PaginationModel';
import { CalculateRequest } from 'src/app/model/Request/CalculateRequest';
import { SampleSizeServiceService } from 'src/app/service/sample-size-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   data: any;
   pagination: Pagination;

  constructor(
    private router:Router,
    private sampleSizeService:SampleSizeServiceService
  ) { 
    this.pagination = new Pagination(1,1,0);
  }

  ngOnInit(): void {
    this.sampleSizeService.dataForm$.subscribe(data=>{
      console.log(data);

      if(data != null){
        this.setDataRetrieved(data);
      }
      else{

          const input = JSON.parse(localStorage.getItem("request") as string);
          this.sampleSizeService.UpdateInput(input);
          this.getData(1);
      }
    });
  }

  setNavigate(value:string){
    this.router.navigate([value]);
  }

  setPagination(pagination:any){
    this.pagination.TotalPages = pagination.totalPages
    this.pagination.Page = pagination.page;
    this.pagination.Previous = pagination.previous;
  }

  setNextPage(value:number){
    this.getData(value)
  }

  getData(nextPage:number){
    this.pagination.Next = nextPage;

    this.sampleSizeService.input$.subscribe(input => {
      const model = new CalculateRequest(input, this.pagination);

      this.sampleSizeService.GetItemsKnown(model).subscribe(data=>{
        this.setDataRetrieved(data);
      });
    })    
  }

  setDataRetrieved(data:any){
      this.data = data;
      this.setPagination(this.data?.pagination);
  }


}
