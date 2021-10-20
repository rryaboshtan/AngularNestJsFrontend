import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { login, loginSuccess } from './admin-auth.actions';

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
        switchMap((action) => of(loginSuccess({
            accessToken: 'test'
        })))
    )
  );

  constructor(private actions$: Actions) {}
}
