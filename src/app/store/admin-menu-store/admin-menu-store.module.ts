import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { adminMenuReducer, ADMIN_MENU_FEATURE_NAME } from './store/admin-menu.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_MENU_FEATURE_NAME, adminMenuReducer),
  ]
})
export class AdminMenuStoreModule { }
