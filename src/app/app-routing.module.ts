import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

import { DataStructuresComponent } from "./data-structures/data-structures.component";
import { RemindersComponent } from './reminders/reminders.component';

const routes: Routes = [
  {path:'',component: AppHomeComponent},
  {path:'dataStructure',component:DataStructuresComponent},
  {path:'Algorithms',component:AlgorithmsComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Reminders',component:RemindersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
