import { Size, Pos } from "./types";
import { Drawable } from "./interfaces";

class Farm implements Drawable {
	position: Pos = { x: 0, y: 0 };
	size: Size;

	constructor(size: Size) {
		this.size = size;
	}

	draw(p5: any) {
		p5.background('#78d361');
	}
}

export default Farm;
