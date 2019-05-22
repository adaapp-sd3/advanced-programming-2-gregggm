import { Size, Pos, Inventory } from './types';
import { DrawableImg } from './interfaces';
import { Produce } from './enums';

class Farmer implements DrawableImg {
  position: Pos;
  size: Size;
  imgUrl: string = '/img/farmer.png';
	p5Img: any;
	inventory: Inventory = {
		[Produce.BEEF]: 0,
		[Produce.MILK]: 0,
		[Produce.LAMB]: 0,
		[Produce.CORN]: 0,
		[Produce.STRAW]: 0,
		[Produce.BREAD]: 0,
		[Produce.WOOL]: 0,
		[Produce.EGGS]: 0,
		[Produce.CHICKEN]: 0
	}

  constructor(position: Pos) {
    this.position = position;
    this.size = { w: 72, h: 72 };
  }

  preload(p5: any) {
    this.p5Img = p5.loadImage(this.imgUrl);
  }

  move(p5: any) {
    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      this.position.x = this.position.x + 3;
    }
    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      this.position.x = this.position.x - 3;
    }
    if (p5.keyIsDown(p5.DOWN_ARROW)) {
      this.position.y = this.position.y + 3;
    }
    if (p5.keyIsDown(p5.UP_ARROW)) {
      this.position.y = this.position.y - 3;
    }
  }

  draw(p5: any) {
    this.move(p5);
    const bobAmount = Math.sin(p5.millis() / 60) * 3;
    p5.image(
      this.p5Img,
      this.position.x,
      this.position.y + bobAmount,
      this.size.w,
      this.size.h
    );
  }
}

export default Farmer;
