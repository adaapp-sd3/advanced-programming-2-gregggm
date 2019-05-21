import GameState from '../models/GameState';
import p5 from 'p5';
import { Drawable } from '../models/interfaces';

class GameDrawer {
  gameState: GameState;
  updateDashboard: Function;
  drawOrder: string[] = [
    'farm',
    'fields',
    'cows',
    'sheep',
    'chickens',
    'market',
    'farmer'
  ];

  constructor(gameState: GameState, updateDashboard: Function) {
    this.gameState = gameState;
    this.updateDashboard = updateDashboard;
    global.game = gameState;
    new p5(this.sketch, <HTMLElement>document.querySelector('.sketch'));
  }

  sketch = (p: any) => {
    p.preload = () => {
      this.preloadImages(p);
    };

    p.setup = () => {
      p.createCanvas(700, 710);
    };

    p.draw = () => {
      this.drawGame(p);
    };
  };

  preloadImages(p: any): void {
    for (const key in this.gameState) {
      if (this.gameState[key] instanceof Array) {
        for (const item of this.gameState[key]) {
          if ('preload' in item) {
            item.preload(p);
          }
        }
      } else {
        if ('preload' in this.gameState[key]) {
          this.gameState[key].preload(p);
        }
      }
    }
  }

  drawGame(p: any): void {
		this.updateDashboard();
    for (const item of this.drawOrder) {
      if (this.gameState[item]) {
        if (this.gameState[item] instanceof Array) {
          this.gameState[item].forEach((item: Drawable) => {
            item.draw(p);
          });
        } else {
          if ('draw' in this.gameState[item]) {
            this.gameState[item].draw(p);
          }
        }
      }
    }
  }
}

export default GameDrawer;
