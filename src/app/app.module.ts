import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AdminAuthStoreModule } from './store/admin-auth-store/admin-auth-store.module';
import { EffectsModule } from '@ngrx/effects';
import { AdminHeaderBlockModule } from './routing/view/admin-header-block/admin-header-block.module';
import { GridModule } from './routing/website/routing/admin/routing/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'admin-login-block',
        loadChildren: () =>
          import(
            './routing/view/admin-login-block/admin-login-block.module'
          ).then((m) => m.AdminLoginBlockModule),
      },
      { path: 'form', loadChildren: () => import('./routing/website/routing/admin/routing/form/form.module').then(m => m.FormModule) },
    ]),
    WebsiteModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    AdminAuthStoreModule,
    EffectsModule.forRoot([]),
    AdminHeaderBlockModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
