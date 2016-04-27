System.register(['angular2/angular2', './summary', '../services/courses'], function(exports_1, context_1) {
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
    var angular2_1, summary_1, courses_1;
    var Dashboard;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (summary_1_1) {
                summary_1 = summary_1_1;
            },
            function (courses_1_1) {
                courses_1 = courses_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(service) {
                    //this.symbols = service.get();
                    //service.load()
                    //.subscribe(courses => this.courses = courses);
                }
                Dashboard = __decorate([
                    angular2_1.Component({
                        selector: 'dashboard',
                        viewBindings: [courses_1.CoursesService]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, angular2_1.NgFor, summary_1.Summary],
                        template: "\n    <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--12-col\" *ng-if=\"!courses\" style=\"text-align: center;\">\n        Loading II\n      </div>\n      hihere\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [courses_1.CoursesService])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});
//# sourceMappingURL=dashboard.js.map