import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';
import { AdminAuthService } from '../services/admin-auth.service';
import { login, loginSuccess } from './admin-auth.actions';

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
        switchMap((action) => this.adminAuthService.login({
            login: action.login,
            password: action.password,
        }).pipe(
            map(loginSuccessData => loginSuccess(loginSuccessData))
        ))
    ));

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService,
    ) { }
}
