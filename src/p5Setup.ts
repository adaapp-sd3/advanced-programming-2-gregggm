import Farmer from "./models/Farmer"
import Market from "./models/Market"
import Farm from "./models/Farm"

const makeFarm = (
  farm: Farm,
  farmer: Farmer,
  market: Market,
  setAppState: Function
): Function => {
  const sketch = (p: any) => {
    p.preload = function() {
      // Make P5 available to each instance using the Drawable abstract class
      farmer.myP5 = p
      market.myP5 = p
      farm.myP5 = p

      // set the property using the HasUI abstract class
      farmer.setHandleUpdate = setAppState
      farm.setHandleUpdate = setAppState
      market.setHandleUpdate = setAppState
			
			farm.preload()
      farmer.preload()
      market.preload()
    }

    p.setup = function() {
      p.createCanvas(farm.width, farm.height)
      farmer.farm = farm
      farmer.market = market
      market.farmer = farmer
    }

    p.draw = function() {
			p.background("#78d361")
      farm.draw()
      market.draw()
      farmer.draw()
    }

    p.keyPressed = function() {
      farmer.keyPressed()
    }
  }
  // return a closure to be used in App.js
  return sketch
}

export default makeFarm
