import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Sheep from './animals/Sheep'
import Chicken from './animals/Chicken'

class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  milk: any
  seeds: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 142,
      objects: []
    },
    sheep: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 42,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bails"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.milk = milk
    this.seeds = seeds
  }
	
  public preload() {
		this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
		let firstFieldH = 175
		
    let secondFieldX = 25
    let secondFieldY = 275
    let secondFieldW = 350
		let secondFieldH = 125

    let thirdFieldX = 475
    let thirdFieldY = 25
    let thirdFieldW = 200
		let thirdFieldH = 325

    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
			this.cows.objects.push(cow)
		}

    for (let i = 0; i < this.sheep.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH
      )
      this.sheep.objects.push(sheep)
		}
		
    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH
      )
			this.chickens.objects.push(chicken)
    }
    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects
      )
    )
    this.fields.push(
      new Field(
        secondFieldX,
        secondFieldY,
        secondFieldW,
        secondFieldH,
        this.sheep.objects
      )
		)
		
    this.fields.push(
      new Field(
        thirdFieldX,
        thirdFieldY,
        thirdFieldW,
        thirdFieldH,
        this.chickens.objects
      )
		)

    this.fields.push(new Field(25, 450, 300, 125))
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
