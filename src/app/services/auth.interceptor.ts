import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private lgServie:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest=request;
    const token=this.lgServie.getToken();
    if(token!=null){
      console.log("add bearer token in header");
      authRequest=authRequest.clone(
  { 
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  }
      );
    }
    return next.handle(authRequest);
  }
}
export const AuthInterceptorProviders=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
]
