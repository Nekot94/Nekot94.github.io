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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var AchivesComponent = (function () {
    function AchivesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    AchivesComponent.prototype.ngOnInit = function () {
    };
    AchivesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-achives',
            templateUrl: 'achives.component.html',
            styleUrls: ['achives.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], AchivesComponent);
    return AchivesComponent;
}());
exports.AchivesComponent = AchivesComponent;
//# sourceMappingURL=achives.component.js.map