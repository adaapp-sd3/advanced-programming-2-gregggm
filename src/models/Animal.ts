import { Pos, Size, Vel } from './types';
import Field from './Field';

abstract class Animal {
  position: Pos;
  size: Size = { w: 16, h: 16 };
  velocity: Vel = { x: 0, y: 0 };
  health: number;
  hunger: number;
  field: Field;

  constructor(field: Field, health: number, hunger: number) {
    this.position = field.getRandomPosition();
    this.health = health;
    this.hunger = hunger;
    this.field = field;

		this.doStuffOccasionally();
    field.addAnimal(this);
	}

  private keepWithinField(): void {
    //top
    if (this.position.y < this.field.position.y) {
      this.position.y = this.field.position.y;
      this.velocity.y = -this.velocity.y;
    }
    //bottom
    if (
      this.position.y >
      this.field.position.y + this.field.size.h - this.size.h
    ) {
      this.position.y = this.field.position.y + this.field.size.h - this.size.h;
      this.velocity.y = -this.velocity.y;
    }
    //left
    if (this.position.x < this.field.position.x) {
      this.position.x = this.field.position.x;
      this.velocity.x = -this.velocity.x;
    }
    //right
    if (
      this.position.x >
      this.field.position.x + this.field.size.w - this.size.w
    ) {
      this.position.x = this.field.position.x + this.field.size.w - this.size.w;
      this.velocity.x = -this.velocity.x;
    }
	}

	protected doStuffOccasionally = () => {
			setInterval(() => {
				if (Math.random() < 0.01) {
				this.velocity.x = Math.random() >= 0.5 ? -0.1 : 0.1
				this.velocity.y = Math.random() >= 0.5 ? -0.1 : 0.1
				setTimeout(() => {
					this.velocity.x = 0
					this.velocity.y = 0
				}, 5000)

				this.occasionalActions();
			  }
			}, 100)
	}

	occasionalActions(): void {};

  protected move(): void {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.keepWithinField();
  }

  // abstract feed(): void;
}

export default Animal;
