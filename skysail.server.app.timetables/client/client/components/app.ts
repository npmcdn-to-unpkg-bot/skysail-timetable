import {Component, View} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Manage} from './manage';
import {Home} from './home';
import {SkysailTimetable} from './skysail-timetable.component'

@RouteConfig([
  {path: '/', as: 'Dashboard', component: Dashboard},
  {path: '/manage', as: 'Manage', component: Manage},
  {path: '/home', as: 'Home', component: Home}
])

@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet, RouterLink,SkysailTimetable],
  template: `
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><span class="glyphicon glyphicon-calendar green" aria-hidden="true"></span> skysail kursplan</a>

      </div>
      <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
              <li><a href="#myLogin" data-toggle="modal">Anmelden</a></li>
          </ul>
      </div>
    </div>
  </nav>

  <main class="mdl-layout__content" style="padding: 20px;">
    <router-outlet></router-outlet>
  </main>
  
   new:
  <skysail-timetable>Loading...</skysail-timetable>

<hr>
  <hr>
  <div class="container">
    <div class="myfooter">
      <footer>Copyright &copy; skysail.io 2016...
        <a class="mdl-navigation__link" [router-link]="['/Dashboard']">Dashboard</a>
        <a class="mdl-navigation__link" [router-link]="['/Manage']">Manage</a>
        <a class="mdl-navigation__link" [router-link]="['/Home']">Home</a>
      </footer>
    </div>
  </div>
  `
})
export class App {
}
