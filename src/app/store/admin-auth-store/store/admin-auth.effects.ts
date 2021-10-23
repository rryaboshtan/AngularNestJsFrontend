import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, switchMap} from 'rxjs/operators';
import { AdminAuthService } from '../services/admin-auth.service';
import { login, loginFailed, loginSuccess } from './admin-auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
        switchMap((action) => this.adminAuthService.login({
            username: action.login,
            password: action.password,
        }).pipe(
            map(loginSuccessData => loginSuccess(loginSuccessData)),
            catchError(error => of(loginFailed({
                serverError: error.message   
            }))
            )
        ))
    ));

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService,
    ) { }
}
