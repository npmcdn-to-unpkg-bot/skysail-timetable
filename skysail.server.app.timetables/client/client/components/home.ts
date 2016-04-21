import {Component, View, NgFor} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder} from 'angular2/angular2';

  @Component({
    selector: 'home'
  })

  @View({
    directives: [NgFor, FORM_DIRECTIVES],
    templateUrl: 'client/components/html/home.html'
  })

export class Home {
}
