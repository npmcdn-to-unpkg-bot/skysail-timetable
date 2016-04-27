System.register(['angular2/angular2', 'angular2/router', 'angular2/http', './components/app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular2_1, router_1, http_1, app_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(app_1.App, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, angular2_1.FORM_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map