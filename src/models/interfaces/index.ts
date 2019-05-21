import { Pos, Size } from '../types';

export interface Drawable {
  position: Pos;
  size: Size;
  draw(p5: any): void;
}

export interface DrawableImg extends Drawable {
  imgUrl: string;
  p5Img: any;
  preload(p5: any): void;
}
