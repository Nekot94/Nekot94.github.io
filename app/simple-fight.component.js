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
var PLAYER = {
    id: 10,
    name: 'Магашка',
    health: 200,
    strength: 10,
    armor: 1,
    money: 5,
    expirence: 0,
    level: 1,
    items: [],
    images: 'chuvachok'
};
var ENEMY = {
    id: 10,
    name: 'Зебруля',
    health: 50,
    strength: 5,
    armor: 1,
    images: 'zebur'
};
var QUESTIONS = [
    { id: 1, question: 'Объявите переменную а со значением 2', answer: 'a = 2' },
    { id: 2, question: 'Объявите переменную b со значением 3', answer: 'b = 3' },
    { id: 3, question: 'Объявите переменную c со значением -8', answer: 'c = -8' },
    { id: 4, question: 'Объявите переменную d со значением 44', answer: 'd = 44' },
    { id: 5, question: 'Объявите переменную e со значением 94', answer: 'e = 94' },
    { id: 6, question: 'Объявите переменную a со значением -88', answer: 'a = -88' },
];
var SimpleFightComponent = (function () {
    function SimpleFightComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.enemy = ENEMY;
        this.player = PLAYER;
        this.questions = QUESTIONS;
        this.currentQuestionNumber = 0;
        this.win = false;
        this.lose = false;
        this.currentAnswer = '';
        this.outputString = '';
        this.started = false;
    }
    SimpleFightComponent.prototype.ngOnInit = function () {
        this.playerPic = this.givePicPath(this.player.images, 1);
        this.enemyPic = this.givePicPath(this.enemy.images, 1);
    };
    SimpleFightComponent.prototype.givePicPath = function (picture, number) {
        return './images/' + picture + number + '.png';
    };
    SimpleFightComponent.prototype.startFight = function () {
        var _this = this;
        this.win = false;
        this.lose = false;
        console.log('Бой начался');
        this.started = true;
        this.takeQuestion(this.currentQuestionNumber);
        this.outputString = this.currentQuestion.question;
        var timer = setInterval(function () {
            _this.damage(_this.enemy, _this.player);
            _this.playerPic = _this.givePicPath(_this.player.images, 2);
            _this.enemyAnim = 'translateX(-50px)';
            setTimeout(function () {
                _this.playerPic = _this.givePicPath(_this.player.images, 1);
                _this.enemyAnim = 'translateX(50px)';
            }, 200);
            if (_this.win) {
                clearInterval(timer);
            }
            if (_this.player.health <= 0) {
                clearInterval(timer);
                _this.youLose();
                return;
            }
        }, 1000);
    };
    SimpleFightComponent.prototype.attack = function () {
        var _this = this;
        console.log('Атакуем врага');
        if (this.currentAnswer == this.currentQuestion.answer) {
            this.damage(this.player, this.enemy);
            this.enemyPic = this.givePicPath(this.enemy.images, 2);
            this.playerAnim = 'translateX(50px)';
            setTimeout(function () {
                _this.enemyPic = _this.givePicPath(_this.enemy.images, 1);
                _this.playerAnim = 'translateX(-50px)';
            }, 200);
            if (this.enemy.health <= 0) {
                this.youWin();
                return;
            }
            this.currentQuestionNumber += 1;
            this.currentAnswer = "";
        }
        this.takeQuestion(this.currentQuestionNumber);
        this.outputString = this.currentQuestion.question;
    };
    SimpleFightComponent.prototype.damage = function (agressor, victim) {
        victim.health -= agressor.strength - victim.armor;
    };
    SimpleFightComponent.prototype.takeQuestion = function (questionNum) {
        this.currentQuestion = this.questions[questionNum];
    };
    SimpleFightComponent.prototype.onKey = function (event) {
        this.currentAnswer = event.target.value;
    };
    SimpleFightComponent.prototype.youLose = function () {
        this.started = false;
        this.lose = true;
    };
    SimpleFightComponent.prototype.youWin = function () {
        this.win = true;
    };
    SimpleFightComponent.prototype.restart = function () {
        var link = ['/fight'];
        console.log(123);
        this.router.navigate(link);
    };
    SimpleFightComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'simple-fight.component.html',
            styleUrls: ['simple-fight.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], SimpleFightComponent);
    return SimpleFightComponent;
}());
exports.SimpleFightComponent = SimpleFightComponent;
//# sourceMappingURL=simple-fight.component.js.map