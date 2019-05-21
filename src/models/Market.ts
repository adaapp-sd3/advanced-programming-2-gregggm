import { Size, Pos } from './types';
import { DrawableImg } from './interfaces';

class Market implements DrawableImg {
  position: Pos;
  size: Size;
  imgUrl: string = '/img/twtr/1f3e2.png';
  p5Img: any;

  constructor(position: Pos) {
    this.position = position;
    this.size = { w: 60, h: 60 };
	}

	public preload(p5: any) {
    this.p5Img = p5.loadImage(this.imgUrl)
  }

  public draw(p5: any) {
    p5.image(this.p5Img, this.position.x, this.position.y, this.size.w, this.size.h)
  }
}

export default Market;
