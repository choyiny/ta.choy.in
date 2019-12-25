import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import { IndexComponent } from './index/index.component';
import { Cscc01Component } from './cscc01/cscc01.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import { AttendanceComponent } from './cscc01/attendance/attendance.component';
import {Cscc09Component} from './cscc09/cscc09.component';
import {Cscd01Component} from './cscd01/cscd01.component';

@NgModule({
  entryComponents: [
    AttendanceComponent
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    Cscc01Component,
    Cscc09Component,
    Cscd01Component,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MarkdownModule.forRoot(),
    AngularMaterialModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
