import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getAccessToken } from '../store/admin-auth.selectors';
import { first, flatMap } from 'rxjs/operators';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {
  constructor(
    private store$: Store
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.store$.pipe(
      select(getAccessToken),
      first(),
      flatMap((token) => {
        const authRequest = token
          ? request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            })
          : request;
        return next.handle(authRequest);
      })
    );
  }
}
