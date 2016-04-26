var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var PlansComponent = (function () {
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
})();
exports.PlansComponent = PlansComponent;

//# sourceMappingURL=../components/plans.component.js.map