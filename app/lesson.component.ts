import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { Learner } from './learner';
import { HeroService } from './hero.service';

const LEARNER = {
  id: 1,
  text: `Тссссссс
Тсссссс. Парень?
Кто я такой не важно?  Называй меня Питон. В этих джунглях опасно ходить одному, поэтому тебе нужно научиться программировать.
Думаешь, чушь? Скоро увидишь, что это не так. Местные монстры… Ну ты сам увидишь.
Итак, чтобы пройти эту башню, ты должен знать, что такое переменные. ПЕРЕМЕННЫЕ, парень.
Так вот, переменные  - это буквы или слова для того, чтобы обозначить все, что мы можем измерить или вычислить.
Представь, есть у тебя 3, есть у тебя 5. Нельзя все держать в уме. Присвой букве а тройку, b - пятерку. У нас это будет так:
a = 3
b = 5
Только не путай большие и маленькие буквы.
Ох, все, это монстр-зебра.  Защищайссссяяя!`

};


@Component({
  moduleId: module.id,
  selector: 'my-lesson',
  templateUrl: 'lesson.component.html',
  styleUrls: [ 'lesson.component.css' ]
})


export class LessonComponent implements OnInit {

  learner:Learner = LEARNER;

  textArr = this.learner.text.split("\n");

  outputText = ['','','','',''];

  counter = 0;
  arrCounter = 0;

  isVisible = 'visible';




  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    for (var i=0; i<this.textArr.length; i++){
       console.log(this.textArr[i]);
     }
   this.goForward()

  }

  goForward() {

    if (this.counter === 5){
      this.outputText = ['','','','',''];
      this.counter = 0;
    }

    this.outputText[this.counter] = this.textArr[this.arrCounter];
    this.counter += 1;
    this.arrCounter += 1
 
    if (this.arrCounter == this.textArr.length){
      this.isVisible = 'Hidden';
    }
  }

  repeat() {
    this.outputText = ['','','','',''];
    this.counter = 0;
    this.isVisible = 'Visible';
    this.arrCounter = 0;
    this.goForward()
  }


}
