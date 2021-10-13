import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: 'admin', loadChildren: () => import('./routing/website/routing/admin/admin.module').then(m => m.AdminModule) }]),
    WebsiteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
