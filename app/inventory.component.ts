import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomSanitizer} from '@angular/platform-browser';

import { Player } from './player';
import { Item } from './item';
import { HeroService } from './hero.service';


const ITEMS: Item[] = [
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 5},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
    { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
    { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
      { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
    { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Палка', cost: 1000, type: 'Оружие', image: 'weapon-1', parameter: "Сила", power: 15},
  { id:1, name:'Меч', cost: 5000, type: 'Оружие', image: 'weapon-2', parameter: "Сила", power: 25},
]



const PLAYER: Player = { 
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






@Component({
  moduleId: module.id,
  selector: 'my-inventory',
  templateUrl: 'inventory.component.html',
  styleUrls: [ 'inventory.component.css' ]
})


export class InventoryComponent implements OnInit {

  isActive = true;

  player = PLAYER;
  choisedItem;


  constructor(
    private router: Router,
    private heroService: HeroService,
    private sanitizer: DomSanitizer) {
  }

  toShop(){
    console.log(123);
    if (this.isActive) {
      this.isActive = false;
    }
    else {
      this.isActive = true;
    }
  }

  ngOnInit(): void {

  }

  takeItem(item){
    this.choisedItem = this.sanitizer.bypassSecurityTrustStyle('url(/images/' + item.image +'.png) no-repeat rgba(0,0,0,0.2)');
    this.player.strength = item.power;
  }


}
