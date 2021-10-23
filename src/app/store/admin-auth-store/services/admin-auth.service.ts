import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthData } from '../store/admin-auth.reducer';
import { getAccessToken } from '../store/admin-auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  accessToken?: string;

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) {
    this.store$
      .pipe(select(getAccessToken))
      .subscribe((accessToken) => (this.accessToken = accessToken));
  }

  login(body: {
    username: string;
    password: string;
  }): Observable<{ accessToken: string }> {
    console.log(body);
    return this.httpClient
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', body)
      .pipe(
        map((resp) => ({
          ...resp,
          ...this.jwtHelperService.decodeToken(resp.accessToken),
        }))
      );
  }
}
