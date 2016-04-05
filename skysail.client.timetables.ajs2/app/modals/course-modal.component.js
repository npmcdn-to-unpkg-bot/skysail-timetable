System.register(['angular2/core', 'angular2/router', '../course.service'], function(exports_1, context_1) {
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
    var core_1, router_1, course_service_1;
    var CourseModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CourseModalComponent = (function () {
                function CourseModalComponent(_courseService, _routeParams) {
                    this._courseService = _courseService;
                    this._routeParams = _routeParams;
                }
                CourseModalComponent.prototype.onSubmit = function () {
                    alert("submitted");
                };
                CourseModalComponent.prototype.ngOnInit = function () {
                    //let id = +this._routeParams.get('id');
                    //this._courseService.getCourse(id)
                    //    .then(course => this.course = course);
                };
                CourseModalComponent = __decorate([
                    core_1.Component({
                        selector: 'my-course-modal',
                        templateUrl: 'app/modals/course-modal.component.html',
                        inputs: ['course']
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService, router_1.RouteParams])
                ], CourseModalComponent);
                return CourseModalComponent;
            }());
            exports_1("CourseModalComponent", CourseModalComponent);
        }
    }
});
//# sourceMappingURL=course-modal.component.js.map