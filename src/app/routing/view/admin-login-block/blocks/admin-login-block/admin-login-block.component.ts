import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.scss'],
})
export class AdminLoginBlockComponent implements OnInit {
  serverError = '';

  constructor() {}

  ngOnInit(): void {}

  onLogin(value: any) {
    console.log('OnLogin', value);
    this.serverError += 'F';
  }
}
