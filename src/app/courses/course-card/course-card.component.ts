import { Course } from './course.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DesignPatternsComponent } from 'src/app/design-patterns/design-patterns.component';
import { NosqlComponent } from 'src/app/nosql/nosql.component';
import { SQLComponent } from 'src/app/sql/sql.component';
import { SystemdesignComponent } from 'src/app/systemdesign/systemdesign.component';

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
    {
      id: 3,
      title: 'System Design',
      image: 'assets/sd.png',
      component: SystemdesignComponent,
      route: 'Systemdesign',
    },
    {
      id: 4,
      title: 'Design Patterns',
      image: 'assets/designpatterns.jpg',
      component: DesignPatternsComponent,
      route: 'DesignPatterns',
    },
  ];

  constructor(private router: Router) {}

  redirectToCourse(route: string) {
    this.router.navigate([route]);
  }
}
