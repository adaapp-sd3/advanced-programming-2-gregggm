import { Pos, Size } from './types';
import Field from './Field';
import { Produce } from './enums';

abstract class Crop {
  position: Pos;
  size: Size = { w: 5, h: 5 };
  field: Field;
	yields: Produce;
	fullGrown: boolean = false;

  constructor(field: Field, produce: Produce) {
    this.field = field;
    this.yields = produce;
    this.position = field.getRandomPosition();

    field.addItem(this);
  }

  grow(): void {
    if (!this.fullGrown && this.size.w < 20) {
      this.size.w += 0.005;
      this.size.h += 0.005;
    } else {
			this.fullGrown = true;
		}
	}
}

export default Crop;
