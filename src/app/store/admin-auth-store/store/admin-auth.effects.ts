import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, delay, delayWhen } from 'rxjs/operators';
import { AdminAuthService } from '../services/admin-auth.service';
import { login, loginFailed, loginSuccess } from './admin-auth.actions';
import { of, timer } from 'rxjs';
import { AuthData } from './admin-auth.reducer';

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.adminAuthService
          .login({
            username: action.login,
            password: action.password,
          })
          .pipe(
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData)),
            catchError((error) =>
              of(
                loginFailed({
                  serverError: error.message,
                })
              )
            )
          )
      )
    )
  );

  refresh$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
        delayWhen((action: AuthData) => timer(
          action.exp * 1000 - 60 * 1000 - Date.now() 
      )),
      switchMap(() =>
        this.adminAuthService
          .refresh()
          .pipe(
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private adminAuthService: AdminAuthService
  ) {}
}
