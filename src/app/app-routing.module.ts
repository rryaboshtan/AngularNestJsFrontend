import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'not-found.module.ts', loadChildren: () => import('./routing/website/routing/not-found/not-found.module.ts/not-found.module.ts.module').then(m => m.NotFound.Module.TsModule) }, { path: 'not-found', loadChildren: () => import('./routing/website/routing/not-found/not-found.module').then(m => m.NotFoundModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
