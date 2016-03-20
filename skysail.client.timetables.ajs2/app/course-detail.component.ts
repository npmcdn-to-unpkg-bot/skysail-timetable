import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'my-course-detail',
  templateUrl: 'app/course-detail.component.html',
  styleUrls: ['app/course-detail.component.css'],
  inputs: ['course']
})
export class CourseDetailComponent implements OnInit {
  course: Course;

  constructor(
    private _courseService: CourseService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._courseService.getCourse(id)
      .then(course => this.course = course);
  }

  goBack() {
    window.history.back();
  }
}
