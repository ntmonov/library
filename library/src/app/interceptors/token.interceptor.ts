import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('users') || req.url.endsWith('users/login')) {
      return next.handle(req);
    }
    req = req.clone({
      setHeaders: {
        Authorization: 'Token ' + sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });
    return next.handle(req);
  }
}
