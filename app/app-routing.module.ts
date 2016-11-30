import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { SimpleFightComponent }  from './simple-fight.component';
import { LessonComponent }  from './lesson.component';
import { InventoryComponent }  from './inventory.component';
import { MapComponent }  from './map.component';
import { AchivesComponent }  from './achives.component';



const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },

  { path: 'achives',     component: AchivesComponent },
  { path: 'map',     component: MapComponent },
  { path: 'inventory',     component: InventoryComponent },
  { path: 'fight',  component: SimpleFightComponent },
  { path: 'lesson',     component: LessonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
