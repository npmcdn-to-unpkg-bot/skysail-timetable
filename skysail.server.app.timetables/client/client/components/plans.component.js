System.register(['angular2/angular2'], function(exports_1, context_1) {
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
    var angular2_1;
    var PlansComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            PlansComponent = (function () {
                function PlansComponent() {
                    this.title = "hi";
                    this.courses = [
                        { "id": "1", "coursename": "Zumba 01", "timefrom": "10:00", "timeto": "11:00", "dayofweek": "Montag", "room": "Kleine Halle", "trainer": "Ricky", "hasMessage": true },
                        { "id": "10", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true },
                        { "id": "11", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true },
                        { "id": "12", "coursename": "Zumba 02", "timefrom": "8:00", "timeto": "9:00", "dayofweek": "Samstag", "room": "Große Halle", "trainer": "Carola", "hasMessage": true }
                    ];
                }
                PlansComponent = __decorate([
                    angular2_1.Component({
                        selector: 'theplans',
                    }),
                    angular2_1.View({
                        templateUrl: 'client/components/html/plans2.html',
                        directives: [angular2_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlansComponent);
                return PlansComponent;
            }());
            exports_1("PlansComponent", PlansComponent);
        }
    }
});
//# sourceMappingURL=plans.component.js.map