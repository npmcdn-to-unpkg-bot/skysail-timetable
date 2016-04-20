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
var router_1 = require('angular2/router');
var dashboard_1 = require('./dashboard');
var manage_1 = require('./manage');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: dashboard_1.Dashboard },
            { path: '/manage', as: 'Manage', component: manage_1.Manage }
        ]),
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\"><span class=\"glyphicon glyphicon-calendar green\" aria-hidden=\"true\"></span> skysail kursplan</a>\n\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#myLogin\" data-toggle=\"modal\">Anmelden</a></li>\n              <li><a href=\"/courses\">[Angemeldet]</a></li>\n              <li><a href=\"/dashboard\">[Abgemeldet]</a></li>\n          </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <span class=\"mdl-layout-title\">Stock Tracker!</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Dashboard']\">Dashboard</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Manage']\">Manage</a>\n        </nav>\n      </div>\n    </header>\n    <main class=\"mdl-layout__content\" style=\"padding: 20px;\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n\n  <hr>\n  <div class=\"container\">\n    <div class=\"myfooter\">\n      <footer>Copyright &copy; skysail.io 2016</footer>\n    </div>\n  </div>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=../components/app.js.map