import { Course } from './course.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NosqlComponent } from 'src/app/nosql/nosql.component';
import { SQLComponent } from 'src/app/sql/sql.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  courses: Course[] = [
    {
      id: 1,
      title: 'Structured Query Language',
      image: 'assets/SQL.png',
      component: SQLComponent,
      route: 'SQL',
    },
    {
      id: 2,
      title: 'NoSQL',
      image: 'assets/NoSQL.jpeg',
      component: NosqlComponent,
      route: 'NoSQL',
    },
  ];

  constructor(private router: Router) {}

  redirectToCourse(route: string) {
    this.router.navigate([route]);
  }
}
