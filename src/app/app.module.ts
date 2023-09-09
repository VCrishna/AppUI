import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStructuresComponent } from './data-structures/data-structures.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CoursesComponent } from './courses/courses.component';
import { RemindersComponent } from './reminders/reminders.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';
import { SystemdesignComponent } from './systemdesign/systemdesign.component';

@NgModule({
  declarations: [
    AppComponent,
    DataStructuresComponent,
    AppHomeComponent,
    AlgorithmsComponent,
    CoursesComponent,
    RemindersComponent,
    LeetcodeComponent,
    SystemdesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
