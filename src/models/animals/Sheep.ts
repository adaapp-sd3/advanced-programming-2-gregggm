import Animal from '../abstract/Animal';
import Farm from '../Farm';

class Sheep extends Animal {
  name: string = 'Sheep';
  genus: string = 'Sheeps';
  imgUrl: string = '/img/twtr/1f411.png';
  eats: string = 'straw';
  hunger: number = 5;
	farm: Farm;
	
	constructor(farm: Farm) {
    super()
    this.farm = farm
	}
	
	makeSound() {
		return 'Baaaa'
	}

	public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

	draw() {
		this.constrainItem()
    this.doSomethingOccasionally(() => {})
		this.stopForFarmer()
	}
}

export default Sheep;
