import Farm from './Farm';
import Cow from './animals/Cow';
import Chicken from './animals/Chicken';
import Sheep from './animals/Sheep';
import Field from './Field';
import Farmer from './Farmer';
import Market from './Market';

class GameState {
	[key: string]: any;
	farm: Farm;
	farmer: Farmer;
	market: Market;
	cows: Cow[] = [];
	sheep: Sheep[] = [];
	chickens: Chicken[] = [];
	fields: Field[] = [];

  constructor() {
		this.farm = new Farm({ w: 700, h: 710 });
		this.farmer = new Farmer({ x: 50, y: 50 });
		this.market = new Market({ x: 600, y: 500 });
		this.fields.push(new Field({ x: 25, y: 25 }, { w: 350, h: 175 }));
		this.fields.push(new Field({ x: 25, y: 275 }, { w: 350, h: 125 }));
		this.fields.push(new Field({ x: 475, y: 25 }, { w: 200, h: 325 }));
		this.fields.push(new Field({ x: 25, y: 450 }, { w: 300, h: 125 }));
		for (let i =0; i < 1; i++) {
			this.cows.push(new Cow(this.fields[0]))
		}
		for (let i =0; i < 1; i++) {
			this.sheep.push(new Sheep(this.fields[1]))
		}
		for (let i =0; i < 1; i++) {
			this.chickens.push(new Chicken(this.fields[2]))
		}
	}
}

export default GameState;
