import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'not-found.module.ts', loadChildren: () => import('./routing/website/routing/not-found/not-found.module').then(m => m.NotFoundModule) }, { path: 'not-found', loadChildren: () => import('./routing/website/routing/not-found/not-found.module').then(m => m.NotFoundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
