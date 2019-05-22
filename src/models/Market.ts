import { Size, Pos } from './types';
import { DrawableImg } from './interfaces';

class Market implements DrawableImg {
  position: Pos;
  size: Size;
  imgUrl: string = '/img/twtr/1f3e2.png';
  p5Img: any;
  exchangeRateURL: string =
    'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=GBP&to_currency=JPY&apikey=808RDJN2IHEZM2G7';
  exchangeRate: string = '';

  constructor(position: Pos) {
    this.position = position;
		this.size = { w: 60, h: 60 };
		
		this.fetchExchangeRate();
		setInterval(this.fetchExchangeRate.bind(this), 100000);
  }

  fetchExchangeRate() {
    fetch(this.exchangeRateURL)
      .then(res => res.json())
      .then(data => {
				console.log(data);
        this.exchangeRate = data['Realtime Currency Exchange Rate']['5. Exchange Rate'].replace(/^0+(\d)|(\d)0+$/gm, '$1$2');;
      }).catch(err => console.error(err));;
  }

  public preload(p5: any) {
    this.p5Img = p5.loadImage(this.imgUrl);
  }

  public draw(p5: any) {
    p5.image(
      this.p5Img,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
		);
		p5.noStroke();
		p5.fill(255,255,255);
		p5.textSize(10);
		p5.text(`£1 = ${this.exchangeRate} farm coins`, this.position.x - 20, this.position.y + 75)
  }
}

export default Market;
