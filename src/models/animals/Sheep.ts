import Animal from '../Animal';
import Field from '../Field';
import { DrawableImg } from '../interfaces';
import { Produce } from '../enums';

class Sheep extends Animal implements DrawableImg {
  name: string = 'Sheep';
  eats: string = Produce.STRAW;
  imgUrl: string = '/img/twtr/1f411.png';
	p5Img: any;

  constructor(field: Field) {
    super(field, 5, 5, Produce.WOOL);
  }

  occasionalActions() {
    console.log('baa');
  }

  preload(p5: any) {
    this.p5Img = p5.loadImage(this.imgUrl);
  }

  draw(p5: any) {
    if (this.field) {
      this.move();
      p5.image(
        this.p5Img,
        this.position.x,
        this.position.y,
        this.size.w,
        this.size.h
      );
    }
  }
}

export default Sheep;
