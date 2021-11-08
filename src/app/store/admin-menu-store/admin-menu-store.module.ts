import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { adminMenuReducer, ADMIN_MENU_FEATURE_NAME } from './store/admin-menu.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_MENU_FEATURE_NAME, adminMenuReducer),
    HttpClientModule,
  ]
})
export class AdminMenuStoreModule { }
