import { Injectable } from '@angular/core';
import  {HttpHeaders} from "@angular/common/http";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthUserDto} from "@trucks/core-shared";

@Injectable()
export class AuthTokenConfiguratorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userAsString = localStorage.getItem('user');
    let token = ''

    if(userAsString) {
      const user : AuthUserDto = JSON.parse(userAsString);
      token = user.token;
    }

    const intercepted = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer ' + token
      })
    });

    return next.handle(intercepted);
  }
}
