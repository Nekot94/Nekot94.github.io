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
var platform_browser_1 = require('@angular/platform-browser');
var hero_service_1 = require('./hero.service');
var ITEMS = [
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 5 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15 },
    { id: 1, name: 'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25 },
];
var PLAYER = {
    id: 10,
    name: 'Магашка',
    health: 200,
    strength: 10,
    armor: 1,
    money: 5,
    expirence: 0,
    level: 1,
    items: ITEMS,
    images: 'chuvachok'
};
var InventoryComponent = (function () {
    function InventoryComponent(router, heroService, sanitizer) {
        this.router = router;
        this.heroService = heroService;
        this.sanitizer = sanitizer;
        this.isActive = true;
        this.player = PLAYER;
    }
    InventoryComponent.prototype.toShop = function () {
        console.log(123);
        if (this.isActive) {
            this.isActive = false;
        }
        else {
            this.isActive = true;
        }
    };
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent.prototype.takeItem = function (item) {
        this.choisedItem = this.sanitizer.bypassSecurityTrustStyle('url(/images/' + item.image + '.png) no-repeat rgba(0,0,0,0.2)');
        this.player.strength = item.power;
    };
    InventoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-inventory',
            templateUrl: 'inventory.component.html',
            styleUrls: ['inventory.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, platform_browser_1.DomSanitizer])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;
//# sourceMappingURL=inventory.component.js.map