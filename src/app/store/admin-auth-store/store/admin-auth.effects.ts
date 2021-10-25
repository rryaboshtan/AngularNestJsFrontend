import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  delayWhen,
  first,
  filter,
  tap,
  distinctUntilChanged,
  skip,
} from 'rxjs/operators';
import { AdminAuthService } from '../services/admin-auth.service';
import {
  extractLoginData,
  initAdminAuth,
  login,
  loginFailed,
  loginSuccess,
  logoutSuccess,
} from './admin-auth.actions';
import { fromEvent, of, timer } from 'rxjs';
import { AuthData } from './admin-auth.reducer';
import { select, Store } from '@ngrx/store';
import { getAuthData, isAuth } from './admin-auth.selectors';
import { Router } from '@angular/router';

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
            map((authData: AuthData) => loginSuccess({ authData })),
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
      switchMap(({ authData }) =>
        timer(authData.exp * 1000 - 60 * 1000 - Date.now())
      ),
      switchMap(() =>
        this.store$.pipe(
          select(isAuth),
          first(),
          filter((isAdminAuth) => isAdminAuth)
        )
      ),
      switchMap(() => this.adminAuthService.refresh()),
      map((authData) => loginSuccess({ authData }))
    )
  );

  saveAuthDataToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(({ authData }) => {
          localStorage.setItem('authData', JSON.stringify(authData));
        })
      ),
    { dispatch: false }
  );

  extractLoginData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initAdminAuth, extractLoginData),
      map(() => {
        const authDataString = localStorage.getItem('authData');
        if (!authDataString) {
          return logoutSuccess();
        }

        const authData: AuthData = JSON.parse(authDataString);

        //if the time of expiration less then 10 seconds, make unlogin, because the token refresh time
        //is 60 seconds and it mean that this user are not login
        if (authData.exp * 1000 - 10 * 1000 - Date.now() < 0) {
          return logoutSuccess();
        }
        return loginSuccess({ authData });
      })
    )
  );

  listenStorageEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initAdminAuth),
      switchMap(() => fromEvent(window, 'storage')),
      map(() => extractLoginData())
    )
  );

  listenAuthorizeEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initAdminAuth),
      switchMap(() => this.adminAuthService.isAuth$),
      //when false changes to true, not when we get two true values
      distinctUntilChanged(),
      skip(1),
      tap(isAuthorized => {
        this.router.navigateByUrl(
          isAuthorized ? '/admin' : '/admin/auth/login'
        );
      })
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private adminAuthService: AdminAuthService,
    private store$: Store,
    private router: Router,
  ) {}
}
