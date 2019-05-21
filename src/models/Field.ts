import { Pos, Size } from './types';
import { Drawable } from './interfaces';
import Animal from './Animal';

class Field implements Drawable {
  position: Pos;
  size: Size;
  animals: Animal[];

  constructor(position: Pos, size: Size) {
    this.position = position;
    this.size = size;
    this.animals = [];
  }

  addAnimal(item: Animal) {
    this.animals.push(item);
  }

  getRandomPosition(): Pos {
    const x =
      Math.floor(
        Math.random() * (this.position.x + this.size.w - this.position.x + 1)
      ) + this.position.x;
    const y =
      Math.floor(
        Math.random() * (this.position.y + this.size.h - this.position.y + 1)
      ) + this.position.y;
    return { x, y };
  }

  draw(p5: any) {
    p5.stroke('#7c4011');
    p5.strokeWeight(10);
    p5.fill('#b58969');
    p5.rect(this.position.x, this.position.y, this.size.w, this.size.h, 10);
  }
}

export default Field;
