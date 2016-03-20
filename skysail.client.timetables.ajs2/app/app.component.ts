import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { CourseService } from './course.service';

import { DashboardComponent } from './dashboard.component';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail.component';

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        CourseService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/courses',
        name: 'Courses',
        component: CoursesComponent
    }
])
export class AppComponent {
    title = 'Skysail Courses';
}