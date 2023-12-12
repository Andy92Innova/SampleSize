import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CalculateRequest } from '../model/Request/CalculateRequest';
import { CalculateResponse } from '../model/Response/CalculateResponse';


@Injectable({
  providedIn: 'root'
})
export class SampleSizeServiceService {

  url: string = '';
  
  //data retrieval
  private dataForm = new BehaviorSubject(null);
  dataForm$ = this.dataForm.asObservable();

  //data request
  private input = new BehaviorSubject(undefined);
  input$ = this.input.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.url = environment.API_SAMPLE_SIZE + '/GetItemsKnown';//know destiny
    console.log('Url',this.url);
  }

  GetItemsKnown(model: CalculateRequest): Observable<any> {
    return this.httpClient.post<CalculateResponse>(this.url, model);
  }

  UpdateDataForm(data:any){
    this.dataForm.next(data);
  }

  UpdateInput(data:any){
    this.input.next(data);
  }
}
