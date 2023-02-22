import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStructuresComponent } from './data-structures/data-structures.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CoursesComponent } from './courses/courses.component';
import { RemindersComponent } from './reminders/reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    DataStructuresComponent,
    AppHomeComponent,
    AlgorithmsComponent,
    CoursesComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
