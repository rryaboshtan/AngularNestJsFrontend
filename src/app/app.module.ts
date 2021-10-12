import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFound } from './routing/website/routing/not-found/not-found.module.ts/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFound.Module.TsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
