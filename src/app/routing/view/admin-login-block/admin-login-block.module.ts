import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginBlockComponent } from './blocks/admin-login-block/admin-login-block.component';
import { AdminLoginFormUiComponent } from './ui/admin-login-form-ui/admin-login-form-ui.component';


const routes: Routes = [
  { path: '', component: AdminLoginBlockComponent }
];

@NgModule({
  declarations: [
    AdminLoginBlockComponent,
    AdminLoginFormUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AdminLoginBlockComponent
  ]
})
export class AdminLoginBlockModule { }
