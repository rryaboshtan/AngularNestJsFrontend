import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { adminAuthReducer, ADMIN_AUTH_FEATURE_NAME } from './store/admin-auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_AUTH_FEATURE_NAME, adminAuthReducer),
  ],
})
export class AdminAuthStoreModule {}
