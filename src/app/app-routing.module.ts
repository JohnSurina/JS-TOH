import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'heroes', component: HeroesComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo:'dashboard', pathMatch:'full'},
      {path: 'detail/:id', component: HeroDetailComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
