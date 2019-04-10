import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layouts/site-header/site-header.component';
import { SiteFooterComponent } from './_layouts/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
