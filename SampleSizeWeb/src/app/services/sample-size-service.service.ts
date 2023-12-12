import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CalculateRequest } from '../model/Request/CalculateRequest';
import { CalculateResponse } from '../model/Response/CalculateResponse';
import { AuthService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class SampleSizeService {

  url: string = '';
  
  //data retrieval
  private dataForm = new BehaviorSubject(null);
  dataForm$ = this.dataForm.asObservable();

  //data request
  private input = new BehaviorSubject(undefined);
  input$ = this.input.asObservable();

  constructor(
    private authService:AuthService,
    private httpClient: HttpClient
  ) { 
    this.url = environment.API_SAMPLE_SIZE + '/SampleSize/GetItemsKnown';//know destiny
    console.log('Url',this.url);
  }

  GetItemsKnown(model: CalculateRequest): Observable<any> {
    // const token = localStorage.getItem('token');
    // console.log('SampleService-token',token);
    
    // if(token){
    //   console.log('aqui');
      return this.httpClient.post<CalculateResponse>(this.url, model);
    // }else{
    //   return of(null);
    // }
  }

  UpdateDataForm(data:any){
    this.dataForm.next(data);
  }

  UpdateInput(data:any){
    this.input.next(data);
  }
}
