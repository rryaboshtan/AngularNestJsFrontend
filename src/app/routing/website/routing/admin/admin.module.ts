import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { AdminComponent } from './admin.component';
// import { DashboardComponent } from './routing/dashboard/pages/dashboard.component';
import { DashboardPageComponent } from './routing/dashboard/pages/dashboard-page.component';

@NgModule({
  declarations: [
    // AdminComponent,
    // DashboardComponent,
    DashboardPageComponent,
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
        loadChildren: () =>
          import('./routing/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
    ]),
  ],
})
export class AdminModule {}
