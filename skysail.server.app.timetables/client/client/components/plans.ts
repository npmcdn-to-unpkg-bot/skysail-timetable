import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder} from 'angular2/angular2';

import {StocksService} from '../services/stocks';
import {Course} from './course';

@Component({
  selector: 'plans',
  viewBindings: [StocksService]
})
@View({
  directives: [NgIf, NgFor, FORM_DIRECTIVES],
  templateUrl: 'client/components/html/plans2.html'
})
export class Plans {
  symbols: Array<string>;
  service: StocksService;
  stockForm: any;
  courses: Course[] = [
	{"id": "1", "coursename": "Zumba 01", "timefrom": "10:00", "timeto":"11:00", "dayofweek":"Montag", "room": "Kleine Halle", "trainer": "Ricky", "hasMessage":true},
	{"id": "2", "coursename": "Step Aerobic", "timefrom": "10:00", "timeto":"11:00", "dayofweek":"Montag", "room": "Reharaum", "trainer": "Sebastian", "hasMessage":true},
	{"id": "3", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Dienstag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "4", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Donnerstag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "5", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Freitag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "6", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Mittwoch", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "7", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Sonntag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "8", "coursename": "Pilates", "timefrom": "14:00", "timeto":"14:45", "dayofweek":"Sonntag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage":false},
	{"id": "9", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true},
	{"id": "10", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true},
	{"id": "11", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true},
	{"id": "12", "coursename": "Zumba 02", "timefrom": "8:00", "timeto":"9:00", "dayofweek":"Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage":true}
];


  constructor(service: StocksService) {
    this.service = service;
    this.symbols = service.get();

    let builder = new FormBuilder();
    this.stockForm = builder.group({
      stock: ['']
    });
  }

  add() {
    this.symbols.push(this.stockForm.value.stock.toUpperCase());
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

}
