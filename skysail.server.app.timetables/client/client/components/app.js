System.register(['angular2/angular2', 'angular2/router', './dashboard', './plans.component', './home', './skysail-timetable.component'], function(exports_1, context_1) {
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
    var angular2_1, router_1, dashboard_1, plans_component_1, home_1, skysail_timetable_component_1;
    var App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (plans_component_1_1) {
                plans_component_1 = plans_component_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (skysail_timetable_component_1_1) {
                skysail_timetable_component_1 = skysail_timetable_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    router_1.RouteConfig([
                        { path: '/', as: 'Dashboard', component: dashboard_1.Dashboard },
                        // {path: '/plans', as: 'Plans', component: Plans},
                        { path: '/plansComponent', as: 'PlansComponent', component: plans_component_1.PlansComponent },
                        { path: '/home', as: 'Home', component: home_1.Home }
                    ]),
                    angular2_1.Component({
                        selector: 'app'
                    }),
                    angular2_1.View({
                        directives: [router_1.RouterOutlet, router_1.RouterLink, skysail_timetable_component_1.SkysailTimetable],
                        template: "\n  <!--<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\"><span class=\"glyphicon glyphicon-calendar green\" aria-hidden=\"true\"></span> skysail kursplan</a>\n\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#myLogin\" data-toggle=\"modal\">Anmelden</a></li>\n          </ul>\n      </div>\n    </div>\n  </nav>-->\n\n  <main class=\"mdl-layout__content\" style=\"padding: 20px;\">\n    <router-outlet></router-outlet>\n  </main>\n  \n   new:\n  <skysail-timetable>Loading...</skysail-timetable>\n\n<hr>\n  <hr>\n  <div class=\"container\">\n    <div class=\"myfooter\">\n      <footer>Copyright &copy; skysail.io 2016...\n        <a class=\"mdl-navigation__link\" [router-link]=\"['/Dashboard']\">Dashboard</a>\n        <a class=\"mdl-navigation__link\" [router-link]=\"['/PlansComponent']\">PlansII</a>\n        <a class=\"mdl-navigation__link\" [router-link]=\"['/Home']\">Home</a>\n      </footer>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map