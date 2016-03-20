import { Course } from './course';
import { COURSES } from './mock-courses';
import { Injectable } from 'angular2/core';

@Injectable()
export class CourseService {
  getCourses() {
    return Promise.resolve(COURSES);
  }

  getCourse(id: number) {
    return Promise.resolve(COURSES).then(
      courses => courses.filter(course => course.id === id)[0]
    );
  }
}