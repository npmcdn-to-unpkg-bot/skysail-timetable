import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {CoursesComponent} from './components/courses.component';
import {IndexComponent} from './components/index.component';
import {FooterComponent} from './components/footer.component';

import {Navbar} from './components/navbar/navbar.component';

@RouteConfig([
    { path: '/courses', as: 'Courses', component: CoursesComponent },
    { path: '/', as: 'Index', component: IndexComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.template.html',
    providers: [Navbar],
    directives: [RouterOutlet,RouterLink, FooterComponent,Navbar]
})
export class AppComponent { }