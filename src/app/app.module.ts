import { LeetcodeComponent } from './leetcode/leetcode.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStructuresComponent } from './data-structures/data-structures.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CoursesComponent } from './courses/courses.component';
import { RemindersComponent } from './reminders/reminders.component';
import { LeetCodeQuestion } from './leetcode/LeetCodeQuestion';
import { SystemdesignComponent } from './systemdesign/systemdesign.component';
import { SQLComponent } from './sql/sql.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { LcPatternsComponent } from './lc-patterns/lc-patterns.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { NosqlComponent } from './nosql/nosql.component';

@NgModule({
  declarations: [
    AppComponent,
    DataStructuresComponent,
    AppHomeComponent,
    AlgorithmsComponent,
    CoursesComponent,
    RemindersComponent,
    LeetcodeComponent,
    SystemdesignComponent,
    SQLComponent,
    AboutMeComponent,
    LcPatternsComponent,
    CourseCardComponent,
    NosqlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HighlightModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
