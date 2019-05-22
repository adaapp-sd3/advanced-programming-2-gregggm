import Crop from '../Crop';
import { DrawableImg } from '../interfaces';
import Field from '../Field';
import { Produce } from '../enums';

class Wheat extends Crop implements DrawableImg {
  name: string = 'Wheat';
  imgUrl: string = '/img/twtr/1F33E.png';
	p5Img: any;
	yields: Produce = Produce.BREAD;

  constructor(field: Field) {
    super(field, Produce.BREAD);
  }

  preload(p5: any) {
    this.p5Img = p5.loadImage(this.imgUrl);
  }

  draw(p5: any) {
    if (this.field) {
      this.grow();
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

export default Wheat;
