"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var stocks_1 = require('../services/stocks');
var Plans = (function () {
    function Plans(service) {
        this.service = service;
        this.symbols = service.get();
        var builder = new angular2_2.FormBuilder();
        this.stockForm = builder.group({
            stock: ['']
        });
    }
    Plans.prototype.add = function () {
        this.symbols.push(this.stockForm.value.stock.toUpperCase());
    };
    Plans.prototype.remove = function (symbol) {
        this.symbols = this.service.remove(symbol);
    };
    Plans = __decorate([
        angular2_1.Component({
            selector: 'plans',
            viewBindings: [stocks_1.StocksService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_2.FORM_DIRECTIVES],
            templateUrl: 'client/components/html/plans.html'
        }), 
        __metadata('design:paramtypes', [stocks_1.StocksService])
    ], Plans);
    return Plans;
}());
exports.Plans = Plans;
//# sourceMappingURL=plans.js.map