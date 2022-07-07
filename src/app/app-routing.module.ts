import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [// It is defining router
{path: '', component:HomeComponent},
{path: 'about', component:AboutComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
