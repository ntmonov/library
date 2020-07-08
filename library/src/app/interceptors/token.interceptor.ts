import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  handleError(err: any) {
    this.toastr.error(err.error.message);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('users') || req.url.endsWith('users/login')) {
      return next.handle(req).pipe(
        tap(
          () => {},
          (err: any) => {
            this.toastr.error(err.error.message);
          }
        )
      );
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
