import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string;
  constructor(private httpClient:HttpClient) { 
    this.url = environment.API_SAMPLE_SIZE + '/auth/token'
  }

  getToken():Observable<any>{
    return this.httpClient.post<any>(this.url, {}).pipe(
      map(data => {
        return data.token
      }),
      catchError(error=>{
        console.log("It isn't possible get token");
        return of(null)
      })
    );
  }
}
