import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/store/admin-auth-store/store/admin-auth.actions';
import * as AdminAuth from 'src/app/store/admin-auth-store/store/admin-auth.selectors';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.scss'],
})
export class AdminLoginBlockComponent implements OnInit {
  constructor(private store$: Store, private httpClient: HttpClient) { }

  loading$: Observable<boolean> = this.store$.pipe(
    select(AdminAuth.getLoading)
  );
  loaded$: Observable<boolean> = this.store$.pipe(select(AdminAuth.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(
    select(AdminAuth.getServerError)
  );

  serverError = '';

  ngOnInit(): void {}

  onLogin(loginPayload: { login: string; password: string }) {
    console.log('OnLogin', loginPayload);
    // this.serverError += 'F';
    this.store$.dispatch(login(loginPayload));
  }

  testProfile() {
    this.httpClient.get('http://localhost:3000/auth/profile')
      .subscribe(console.log);
  }
}
