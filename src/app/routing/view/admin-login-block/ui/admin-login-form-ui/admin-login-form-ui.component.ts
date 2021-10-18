import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-login-form-ui',
  templateUrl: './admin-login-form-ui.component.html',
  styleUrls: ['./admin-login-form-ui.component.scss'],
})
export class AdminLoginFormUiComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({});

  // @Input() formError = 'Foo';

  constructor() {}

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
