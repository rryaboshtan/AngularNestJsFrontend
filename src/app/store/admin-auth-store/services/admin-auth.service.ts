import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AuthData } from '../store/admin-auth.reducer';
import { getAuthData, isAuth } from '../store/admin-auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  isAuth$ = this.store$.pipe(
    select(getAuthData),
    filter((authData) => authData !== undefined),
    map((authData) => !!authData)
  );

  isGuest$ = this.isAuth$.pipe(map((isAuth) => !isAuth));

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) {}

  login(body: { username: string; password: string }): Observable<AuthData> {
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', body)
      .pipe(
        map((resp) => ({
          ...resp,
          ...this.jwtHelperService.decodeToken(resp.accessToken),
        }))
      );
  }

  refresh(): Observable<AuthData> {
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/refresh', {})
      .pipe(
        map((resp) => ({
          ...resp,
          ...this.jwtHelperService.decodeToken(resp.accessToken),
        }))
      );
  }
}
