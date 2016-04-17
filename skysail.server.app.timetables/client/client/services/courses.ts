import { Inject } from 'angular2/angular2';
import { Http } from 'angular2/http';

let courses: Array<CourseInterface> = [];

export interface CourseInterface {
  id: string;
  coursename: string;
  dayofweek: string;
}

export class CoursesService {
  http: Http;
  constructor(@Inject(Http) Http) {
      this.http = Http;
  }

  get() {
    return courses;
  }

  add(course) {
    courses.push(course);
    return this.get();
  }

  remove(course) {
    courses.splice(courses.indexOf(course), 1);
    return this.get();
  }

  load() {
    //if (symbols) {
      return this.http.get('http://localhost:2018/Timetables/v1/Timetables/16:0/Courses?media=json')
        // .toRx()
        .map(res => res.json())
        ;
    //}
  }
}
