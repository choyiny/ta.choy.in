import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  MatInputModule
} from '@angular/material';
import { IndexComponent } from './index/index.component';
import { Cscc01Component } from './cscc01/cscc01.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClientModule} from '@angular/common/http';
import { AttendanceComponent } from './cscc01/attendance/attendance.component';

@NgModule({
  entryComponents: [
    AttendanceComponent
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    Cscc01Component,
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
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
