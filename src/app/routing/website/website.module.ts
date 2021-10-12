import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './routing/not-found/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        loadChildren: () =>
          import('./routing/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ]),
  ],
})
export class WebsiteModule {}
