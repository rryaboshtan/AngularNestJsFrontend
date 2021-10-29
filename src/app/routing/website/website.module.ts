import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminGuestGuard } from './guards/admin-guest.guard';
import { AdminFooterBlockModule } from '../view/admin-footer-block/admin-footer-block.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./routing/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'admin/auth',
        loadChildren: () =>
          import('./routing/admin-auth/admin-auth.module').then(
            (module) => module.AdminLoginModule
          ),
        canLoad: [AdminGuestGuard],
        canActivate: [AdminGuestGuard],
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./routing/admin/admin.module').then(
            (module) => module.AdminModule
          ),
        canLoad: [AdminAuthGuard],
        canActivate: [AdminAuthGuard],
      },
      {
        path: '**',
        loadChildren: () =>
          import('./routing/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ]),
    // AdminFooterBlockModule,
  ],
  providers: [AdminGuestGuard, AdminAuthGuard],
})
export class WebsiteModule {}
