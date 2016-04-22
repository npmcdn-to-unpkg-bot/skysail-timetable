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
    templateUrl: 'client/components/html/plans.html'
  })

export class Plans {
  symbols: Array<string>;
  service: StocksService;
  stockForm: any;
  courses: Course[];

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
