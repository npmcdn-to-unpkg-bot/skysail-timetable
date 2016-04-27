System.register(['angular2/angular2', '../services/stocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, angular2_2, stocks_1;
    var Plans;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
                angular2_2 = angular2_1_1;
            },
            function (stocks_1_1) {
                stocks_1 = stocks_1_1;
            }],
        execute: function() {
            Plans = (function () {
                function Plans(service) {
                    this.courses = [
                        { "id": "1", "coursename": "Zumba 01", "timefrom": "10:00", "timeto": "11:00", "dayofweek": "Montag", "room": "Kleine Halle", "trainer": "Ricky", "hasMessage": true },
                        { "id": "2", "coursename": "Step Aerobic", "timefrom": "10:00", "timeto": "11:00", "dayofweek": "Montag", "room": "Reharaum", "trainer": "Sebastian", "hasMessage": true },
                        { "id": "3", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Dienstag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "4", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Donnerstag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "5", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Freitag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "6", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Mittwoch", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "7", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Sonntag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "8", "coursename": "Pilates", "timefrom": "14:00", "timeto": "14:45", "dayofweek": "Sonntag", "room": "Mehrzweckhalle", "trainer": "Ricky", "hasMessage": false },
                        { "id": "9", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true },
                        { "id": "10", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true },
                        { "id": "11", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true },
                        { "id": "12", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true }
                    ];
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
                        templateUrl: 'client/components/html/plans2.html'
                    }), 
                    __metadata('design:paramtypes', [stocks_1.StocksService])
                ], Plans);
                return Plans;
            }());
            exports_1("Plans", Plans);
        }
    }
});
//# sourceMappingURL=plans.js.map