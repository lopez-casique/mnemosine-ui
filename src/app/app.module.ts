import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesModule} from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import {APP_ROUTING} from './app.routes';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material/material.module';
import {ImageViewerModule} from 'ng2-image-viewer';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // APP_ROUTING,
    PagesModule,
    RouterModule,
    MaterialModule,
    ImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
