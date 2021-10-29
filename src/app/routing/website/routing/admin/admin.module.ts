import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminFooterBlockModule } from 'src/app/routing/view/admin-footer-block/admin-footer-block.module';
import { AdminHeaderBlockModule } from 'src/app/routing/view/admin-header-block/admin-header-block.module';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        component: AdminPageComponent,
        loadChildren: () =>
          import('./routing/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
    ]),
    AdminHeaderBlockModule,
    AdminFooterBlockModule,
  ],
})
export class AdminModule {}
