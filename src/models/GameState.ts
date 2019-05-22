import Farm from './Farm';
import Cow from './animals/Cow';
import Chicken from './animals/Chicken';
import Sheep from './animals/Sheep';
import Field from './Field';
import Farmer from './Farmer';
import Market from './Market';
import Corn from './crops/Corn';
import Grass from './crops/Grass';
import Wheat from './crops/Wheat';
import Weather from './Weather';

class GameState {
  [key: string]: any;
  farm: Farm;
  farmer: Farmer;
  market: Market;
  cows: Cow[] = [];
  sheep: Sheep[] = [];
  chickens: Chicken[] = [];
	fields: Field[] = [];
	corn: Corn[] = [];
	grass: Grass[] = [];
	wheat: Wheat[] = [];
	weather: Weather;

  constructor() {
		this.farm = new Farm({ w: 700, h: 710 });
		this.weather = new Weather({ x: 550, y: 680 });		
    this.farmer = new Farmer({ x: 50, y: 50 });
    this.market = new Market({ x: 600, y: 500 });
    this.fields.push(new Field({ x: 25, y: 25 }, { w: 350, h: 175 }));
    this.fields.push(new Field({ x: 25, y: 275 }, { w: 350, h: 125 }));
    this.fields.push(new Field({ x: 475, y: 25 }, { w: 200, h: 325 }));
    this.fields.push(new Field({ x: 25, y: 450 }, { w: 500, h: 200 }));
    for (let i = 0; i < 5; i++) {
      this.cows.push(new Cow(this.fields[0]));
			this.sheep.push(new Sheep(this.fields[1]));
			this.chickens.push(new Chicken(this.fields[2]));
			this.corn.push(new Corn(this.fields[3]));
			this.grass.push(new Grass(this.fields[3]));
			this.wheat.push(new Wheat(this.fields[3]));
    }
	}

  update() {
    for (const key in this) {
      if (key === 'farm') {
        continue;
      }
      if (this[key][0] !== undefined) {
        const { farmer } = this;
        for (const item of this[key]) {
          if (
            farmer.position.x + farmer.size.h / 2 < item.position.x + item.size.w &&
            farmer.position.x + farmer.size.h / 2 > item.position.x &&
            farmer.position.y + farmer.size.w / 2 > item.position.y &&
            farmer.position.y + farmer.size.w / 2< item.position.y + item.size.h
          ) {
            item.isActive = true;
            console.log(item);
          }
        }
      }
    }
  }
}

export default GameState;
