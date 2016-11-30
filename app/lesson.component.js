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
var LEARNER = {
    id: 1,
    text: "\u0422\u0441\u0441\u0441\u0441\u0441\u0441\u0441\n\u0422\u0441\u0441\u0441\u0441\u0441\u0441. \u041F\u0430\u0440\u0435\u043D\u044C?\n\u041A\u0442\u043E \u044F \u0442\u0430\u043A\u043E\u0439 \u043D\u0435 \u0432\u0430\u0436\u043D\u043E?  \u041D\u0430\u0437\u044B\u0432\u0430\u0439 \u043C\u0435\u043D\u044F \u041F\u0438\u0442\u043E\u043D. \u0412 \u044D\u0442\u0438\u0445 \u0434\u0436\u0443\u043D\u0433\u043B\u044F\u0445 \u043E\u043F\u0430\u0441\u043D\u043E \u0445\u043E\u0434\u0438\u0442\u044C \u043E\u0434\u043D\u043E\u043C\u0443, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0442\u0435\u0431\u0435 \u043D\u0443\u0436\u043D\u043E \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C.\n\u0414\u0443\u043C\u0430\u0435\u0448\u044C, \u0447\u0443\u0448\u044C? \u0421\u043A\u043E\u0440\u043E \u0443\u0432\u0438\u0434\u0438\u0448\u044C, \u0447\u0442\u043E \u044D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A. \u041C\u0435\u0441\u0442\u043D\u044B\u0435 \u043C\u043E\u043D\u0441\u0442\u0440\u044B\u2026 \u041D\u0443 \u0442\u044B \u0441\u0430\u043C \u0443\u0432\u0438\u0434\u0438\u0448\u044C.\n\u0418\u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0439\u0442\u0438 \u044D\u0442\u0443 \u0431\u0430\u0448\u043D\u044E, \u0442\u044B \u0434\u043E\u043B\u0436\u0435\u043D \u0437\u043D\u0430\u0442\u044C, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435. \u041F\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u042B\u0415, \u043F\u0430\u0440\u0435\u043D\u044C.\n\u0422\u0430\u043A \u0432\u043E\u0442, \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435  - \u044D\u0442\u043E \u0431\u0443\u043A\u0432\u044B \u0438\u043B\u0438 \u0441\u043B\u043E\u0432\u0430 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0432\u0441\u0435, \u0447\u0442\u043E \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u0438\u0437\u043C\u0435\u0440\u0438\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C.\n\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C, \u0435\u0441\u0442\u044C \u0443 \u0442\u0435\u0431\u044F 3, \u0435\u0441\u0442\u044C \u0443 \u0442\u0435\u0431\u044F 5. \u041D\u0435\u043B\u044C\u0437\u044F \u0432\u0441\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432 \u0443\u043C\u0435. \u041F\u0440\u0438\u0441\u0432\u043E\u0439 \u0431\u0443\u043A\u0432\u0435 \u0430 \u0442\u0440\u043E\u0439\u043A\u0443, b - \u043F\u044F\u0442\u0435\u0440\u043A\u0443. \u0423 \u043D\u0430\u0441 \u044D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043A:\na = 3\nb = 5\n\u0422\u043E\u043B\u044C\u043A\u043E \u043D\u0435 \u043F\u0443\u0442\u0430\u0439 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B.\n\u041E\u0445, \u0432\u0441\u0435, \u044D\u0442\u043E \u043C\u043E\u043D\u0441\u0442\u0440-\u0437\u0435\u0431\u0440\u0430.  \u0417\u0430\u0449\u0438\u0449\u0430\u0439\u0441\u0441\u0441\u0441\u044F\u044F\u044F!"
};
var LessonComponent = (function () {
    function LessonComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.learner = LEARNER;
        this.textArr = this.learner.text.split("\n");
        this.outputText = ['', '', '', '', ''];
        this.counter = 0;
        this.arrCounter = 0;
        this.isVisible = 'visible';
    }
    LessonComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.textArr.length; i++) {
            console.log(this.textArr[i]);
        }
        this.goForward();
    };
    LessonComponent.prototype.goForward = function () {
        if (this.counter === 5) {
            this.outputText = ['', '', '', '', ''];
            this.counter = 0;
        }
        this.outputText[this.counter] = this.textArr[this.arrCounter];
        this.counter += 1;
        this.arrCounter += 1;
        if (this.arrCounter == this.textArr.length) {
            this.isVisible = 'Hidden';
        }
    };
    LessonComponent.prototype.repeat = function () {
        this.outputText = ['', '', '', '', ''];
        this.counter = 0;
        this.isVisible = 'Visible';
        this.arrCounter = 0;
        this.goForward();
    };
    LessonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-lesson',
            templateUrl: 'lesson.component.html',
            styleUrls: ['lesson.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], LessonComponent);
    return LessonComponent;
}());
exports.LessonComponent = LessonComponent;
//# sourceMappingURL=lesson.component.js.map