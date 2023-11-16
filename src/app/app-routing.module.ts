import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

import { DataStructuresComponent } from './data-structures/data-structures.component';
import { RemindersComponent } from './reminders/reminders.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';
import { LcPatternsComponent } from './lc-patterns/lc-patterns.component';
import { SystemdesignComponent } from './systemdesign/systemdesign.component';
import { SQLComponent } from './sql/sql.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NosqlComponent } from './nosql/nosql.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'dataStructure', component: DataStructuresComponent },
  { path: 'Algorithms', component: AlgorithmsComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Reminders', component: RemindersComponent },
  { path: 'LeetCode', component: LeetcodeComponent },
  { path: 'LcPatternsComponent', component: LcPatternsComponent },
  { path: 'SQL', component: SQLComponent },
  { path: 'Systemdesign', component: SystemdesignComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'NoSQL', component: NosqlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
