import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AdminMenuService } from '../service/admin-menu.service';
import { select, Store } from '@ngrx/store';
import { initMenu, initMenuFailed, initMenuSuccess } from './admin-menu.actions';
import { withLatestFrom, filter, switchMap, map, catchError, tap } from 'rxjs/operators';
import { getLoaded, getLoading } from './admin-menu.selectors';
import { of } from 'rxjs';

@Injectable()
export class AdminMenuEffects {
  adminMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initMenu),
      withLatestFrom(
        this.store$.pipe(select(getLoaded)),
        this.store$.pipe(select(getLoading))
      ),
      // _  -  is the action type, which always returns in selector
      filter(([_, loaded, loading]) => !loaded && loading),
      switchMap(() =>
        this.adminMenuService.getMenu().pipe(
          map((data) => initMenuSuccess({ data })),
          catchError((error) =>
            of(initMenuFailed({ serverError: error.serverError }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private adminMenuService: AdminMenuService,
    private store$: Store
  ) {}
}
