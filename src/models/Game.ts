import p5 from 'p5';
import Cow from './animals/Cow';
import Field from './Field';

class Game {
	p5: any;
	cow: Cow;
	field: Field;

	constructor() {
		// this.p5 = new p5(this.sketch)
		this.field = new Field({ x: 10, y: 10 }, { w: 100, h: 100 })
		this.cow = new Cow(this.field)
	}

	sketch = (p: any) => {
		p.preload = () => {
			this.cow.preload(p);
		}

		p.setup = () => {
			p.createCanvas(500, 500)
		}

		p.draw = () => {
			p.background("#78d361")
			this.field.draw(p);
			this.cow.draw(p);
		}
	}
}

export default Game;
