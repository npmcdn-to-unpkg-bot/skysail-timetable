import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'my-course-modal',
  templateUrl: 'app/modals/course-modal.component.html',
  inputs: ['course']
})

export class CourseModalComponent implements OnInit {
  course: Course;

  constructor(
    private _courseService: CourseService,
    private _routeParams: RouteParams) {
  }

  onSubmit() {
    alert("submitted");
  }

  ngOnInit() {
    //let id = +this._routeParams.get('id');
    //this._courseService.getCourse(id)
    //    .then(course => this.course = course);
  }

}
