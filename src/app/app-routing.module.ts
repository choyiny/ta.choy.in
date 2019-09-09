import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {Cscc01Component} from './cscc01/cscc01.component';

const routes: Routes = [
  {
    component: IndexComponent,
    path: ''
  },
  {
    path: 'c01',
    component: Cscc01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
