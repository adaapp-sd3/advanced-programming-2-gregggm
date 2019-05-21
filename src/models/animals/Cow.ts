import Animal from '../Animal';
import Field from '../Field';
import { DrawableImg } from '../interfaces';

class Cow extends Animal implements DrawableImg {
	name: string = 'cow';
	eats: string = 'straw';
	imgUrl: string = '/img/twtr/1f404.png';
	p5Img: any;

	constructor(field: Field) {
		super(field, 5, 5);
	}

	occasionalActions() {
		console.log('moo')
	}

	preload(p5: any) {
		this.p5Img = p5.loadImage(this.imgUrl);
	}

	draw(p5: any) {
		this.move();
		p5.image(this.p5Img, this.position.x, this.position.y, this.size.w, this.size.h);
	}
}

export default Cow;
