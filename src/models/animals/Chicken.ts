import Animal from '../abstract/Animal';
import Farm from '../Farm';

class Chicken extends Animal {
  name: string = 'Chicken';
  genus: string = 'Chickens';
  imgUrl: string = '/img/twtr/1f414.png';
  eats: string = 'corn';
  hunger: number = 5;
	farm: Farm;
	
	constructor(farm: Farm) {
    super()
    this.farm = farm
	}
	
	makeSound() {
		return 'Cluck!'
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

export default Chicken;
