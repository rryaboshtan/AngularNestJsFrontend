import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthData } from '../store/admin-auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {}

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
