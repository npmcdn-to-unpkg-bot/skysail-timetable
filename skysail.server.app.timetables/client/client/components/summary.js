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
    var Summary;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            Summary = (function () {
                function Summary() {
                }
                Summary.prototype.isNegative = function () {
                    if (!this.stock || this.stock.change >= 0) {
                        return false;
                    }
                    return true;
                };
                Summary.prototype.isPositive = function () {
                    if (!this.stock || this.stock.change <= 0) {
                        return false;
                    }
                    return true;
                };
                Summary = __decorate([
                    angular2_1.Component({
                        selector: 'summary',
                        properties: ['stock: symbol']
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, angular2_1.NgClass],
                        template: "\n<div class=\"mdl-card stock-card mdl-shadow--2dp\" [ng-class]=\"{increase: isPositive(), decrease: isNegative()}\" style=\"width: 100%;\">\n  <span *ng-if=\"stock\">\n    <div class=\"mdl-card__title\">\n      <h4 style=\"color: #fff; margin: 0\">\n        {{stock.symbol.toUpperCase()}}<br />\n        {{stock.lastTradePriceOnly | currency:'USD':true:'.2'}}<br />\n        {{stock.change | currency:'USD':true:'.2'}} ({{stock.changeInPercent | percent}})\n      </h4>\n    </div>\n  </span>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Summary);
                return Summary;
            }());
            exports_1("Summary", Summary);
        }
    }
});
//# sourceMappingURL=summary.js.map