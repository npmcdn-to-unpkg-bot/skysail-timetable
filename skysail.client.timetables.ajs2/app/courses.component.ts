import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Course } from './course';
import { CourseDetailComponent } from './course-detail.component';
import { CourseService } from './course.service';

import { CourseModalComponent } from '../app/modals/course-modal.component';

@Component({
  selector: 'my-courses',
  templateUrl: 'app/courses.component.html',
  styleUrls:  ['app/courses.component.css'],
  directives: [CourseDetailComponent, CourseModalComponent]
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  newCourse: Course = 	{"id": "", "coursename": "", "timefrom": "", "timeto":"", "dayofweek":"", "room": "", "trainer": "", "hasMessage":false};

  constructor(
    private _router: Router,
    private _courseService: CourseService) { }

  getCourses() {
    this._courseService.getCourses().then(courses => this.courses = courses);
  }

  ngOnInit() {
    this.getCourses();
  }

  public onSubmit() {
       //this.submitted = true;
       alert('Your setting: ' + this.newCourse.coursename );
  }

  onSelect(course: Course) { this.selectedCourse = course; }

  gotoDetail() {
    this._router.navigate(['CourseDetail', { id: this.selectedCourse.id }]);
  }
}
