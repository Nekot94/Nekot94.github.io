import { Item } from './item'

export class Player {
  id: number;
  name: string;
  health: number;
  strength: number;
  armor: number;
  money: number;
  expirence: number;
  level: number;
  items: Item[];
  images: string;
}