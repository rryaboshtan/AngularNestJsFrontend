import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPageComponent,
      },
    ]),
  ],
})
export class DashboardModule {}
