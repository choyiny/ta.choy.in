import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {Cscc01Component} from './cscc01/cscc01.component';
import {Cscc09Component} from './cscc09/cscc09.component';
import {Cscd01Component} from './cscd01/cscd01.component';

const routes: Routes = [
  {
    component: IndexComponent,
    path: ''
  },
  {
    path: 'c01',
    component: Cscc01Component
  },
  {
    path: 'c09',
    component: Cscc09Component
  },
  {
    path: 'd01',
    component: Cscd01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
