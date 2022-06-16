import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isLogged) {
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${this.authService.token}`}
      })
      console.log(request);
    }
    return next.handle(request);
  }
  // ddqsdsqd
}
