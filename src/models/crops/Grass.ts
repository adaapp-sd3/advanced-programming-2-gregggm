import Crop from '../Crop';
import { DrawableImg } from '../interfaces';
import Field from '../Field';
import { Produce } from '../enums';

class Grass extends Crop implements DrawableImg {
  name: string = 'Grass';
  imgUrl: string = '/img/twtr/1F33F.png';
	p5Img: any;
	yields: Produce = Produce.STRAW;

  constructor(field: Field) {
    super(field, Produce.STRAW);
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

export default Grass;
