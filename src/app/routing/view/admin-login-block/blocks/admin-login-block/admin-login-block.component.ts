import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AdminAuth from 'src/app/store/admin-auth-store/store/admin-auth.selectors';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.scss'],
})
export class AdminLoginBlockComponent implements OnInit {
  constructor(private store$: Store) {}

  loading$: Observable<boolean> = this.store$.pipe(select(AdminAuth.getLoading));
  loaded$: Observable<boolean> = this.store$.pipe(select(AdminAuth.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(select(AdminAuth.getServerError));

  serverError = '';

  ngOnInit(): void {}

  onLogin(value: any) {
    console.log('OnLogin', value);
    this.serverError += 'F';
  }
}
