import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Enemy } from './enemy';
import { Player } from './player';
import { Chalenge } from './chalenge';
import { Question } from './question'

import { HeroService } from './hero.service';


const PLAYER = { 
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

const ENEMY = { 
  id: 10,
  name: 'Зебруля',
  health: 50,
  strength: 5,
  armor: 1,
  images: 'zebur'
};

const QUESTIONS: Question[] = [
  {id: 1, question: 'Объявите переменную а со значением 2', answer: 'a = 2'},
  {id: 2, question: 'Объявите переменную b со значением 3', answer: 'b = 3'},
  {id: 3, question: 'Объявите переменную c со значением -8', answer: 'c = -8'},
  {id: 4, question: 'Объявите переменную d со значением 44', answer: 'd = 44'},
  {id: 5, question: 'Объявите переменную e со значением 94', answer: 'e = 94'},
  {id: 6, question: 'Объявите переменную a со значением -88', answer: 'a = -88'},
  
];


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'simple-fight.component.html',
  styleUrls: [ 'simple-fight.component.css' ]
})


export class SimpleFightComponent implements OnInit {

  enemy: Enemy = ENEMY;
  player: Player = PLAYER;
  questions: Question[] = QUESTIONS;
  currentQuestion: Question;
  currentQuestionNumber:number = 0;
  win:boolean = false;
  lose:boolean = false;

  currentAnswer:string = '';

  outputString:string = '';

  started = false;

  playerPic:string;
  enemyPic:string;

  playerAnim;
  enemyAnim;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.playerPic = this.givePicPath(this.player.images, 1);
    this.enemyPic = this.givePicPath(this.enemy.images, 1);

  }


  givePicPath(picture, number): string {
    return './images/' + picture  + number + '.png'
  }


  startFight(){
    this.win = false;
    this.lose = false;
    console.log('Бой начался');
    this.started = true;
    this.takeQuestion(this.currentQuestionNumber);
    this.outputString =  this.currentQuestion.question


    var timer = setInterval(() => {
        this.damage(this.enemy,this.player)
        this.playerPic = this.givePicPath(this.player.images, 2);
        this.enemyAnim = 'translateX(-50px)'
        setTimeout(() => {
          this.playerPic = this.givePicPath(this.player.images, 1);
          this.enemyAnim = 'translateX(50px)'
        }, 200);
        if (this.win) {
          clearInterval(timer)
        }

        if (this.player.health <= 0) {
          clearInterval(timer);
          this.youLose();
          return;
        }


    }
      , 1000);

  }



  attack(){
    console.log('Атакуем врага');


    if (this.currentAnswer == this.currentQuestion.answer ){
      this.damage(this.player,this.enemy);
      this.enemyPic = this.givePicPath(this.enemy.images, 2);
      this.playerAnim = 'translateX(50px)'
        setTimeout(() => {
          this.enemyPic = this.givePicPath(this.enemy.images, 1);
          this.playerAnim = 'translateX(-50px)'
        }, 200);
      if (this.enemy.health <= 0) {  
        this.youWin();

        return;
      }
      this.currentQuestionNumber += 1;
      this.currentAnswer = "";


    }



    this.takeQuestion(this.currentQuestionNumber);
    this.outputString =  this.currentQuestion.question;


  }


  damage(agressor,victim){
    victim.health -= agressor.strength - victim.armor;
  }

  takeQuestion(questionNum){
    this.currentQuestion = this.questions[questionNum];
  }



  onKey(event:any) {
    this.currentAnswer = event.target.value;
  }

  youLose(){
    this.started = false;
    this.lose = true;

  }

  youWin(){
    this.win = true;

  }



  restart(){
    let link = ['/fight'];
    console.log(123);
    this.router.navigate(link);
  }

}
