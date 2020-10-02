import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './app-dashboard/dashboard.component';
import { TopNavComponent } from './app-top-nav/top-nav.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,

    TopNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
