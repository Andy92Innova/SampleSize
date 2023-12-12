import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/api/auth/token')) {
      return next.handle(request);
    }

    return this.authService.getToken().pipe(
      switchMap(token=>{
        // console.log('interceptor', token);
        if(token){
          request = request.clone({
            setHeaders:{
              Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}
