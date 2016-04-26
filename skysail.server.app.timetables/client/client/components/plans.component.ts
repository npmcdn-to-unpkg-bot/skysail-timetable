import {Component, View, NgFor} from 'angular2/angular2';
import {Course} from './course'

@Component({
    selector: 'theplans',
})
@View({
    templateUrl: 'client/components/html/plans2.html',
    directives: [NgFor]
})
export class PlansComponent {
    title: string = "hi"
      courses: Course[] = [
	{"id": "1", "coursename": "Zumba 01", "timefrom": "10:00", "timeto":"11:00", "dayofweek":"Montag", "room": "Kleine Halle", "trainer": "Ricky", "hasMessage":true},
	{"id": "10", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true},
	{"id": "11", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true},
	{"id": "12", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true}
];
}

