import { Drawable } from './interfaces';
import { Pos, Size, WeatherItem } from './types';

class Weather implements Drawable {
  apiURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9c26f7fe93b97abbb58de7cc9d7afa4f&units=metric';
  position: Pos;
  size: Size = { w: 15, h: 15 };
  weather: string = '';
  temperature: string = '';
  clouds: WeatherItem[] = [
    { x: 100, y: 100, size: 1.5 },
    { x: 209, y: 678, size: 1.5 },
    { x: 234, y: 165, size: 1.3 },
    { x: 478, y: 578, size: 1.7 },
    { x: 598, y: 345, size: 1.8 },
    { x: 600, y: 50, size: 1.9 },
    { x: 235, y: 321, size: 1.2 }
	];
	rain: WeatherItem[] = [];

  constructor(position: Pos) {
    this.position = position;

		this.fetchWeather();
		setInterval(this.fetchWeather.bind(this), 100000);
		
		for (let i = 0; i < 500; i++) {
			this.rain.push({ x: Math.random() * 700, y: Math.random() * 700, size: 2})
		}
  }

  fetchWeather() {
    fetch(this.apiURL)
      .then(res => res.json())
      .then(data => {
        const {
          weather: [{ main }],
          main: { temp }
        } = data;
        this.weather = main;
        this.temperature = temp.toString();
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  drawClouds(p5: any) {
    this.clouds.forEach((cloud: WeatherItem) => draw(cloud));
    function draw(cloud: WeatherItem) {
      p5.fill(255, 255, 255);
      p5.arc(
        cloud.x,
        cloud.y,
        25 * cloud.size,
        20 * cloud.size,
        p5.PI + p5.TWO_PI,
        p5.TWO_PI
      );
      p5.arc(
        cloud.x + 10,
        cloud.y,
        25 * cloud.size,
        45 * cloud.size,
        p5.PI + p5.TWO_PI,
        p5.TWO_PI
      );
      p5.arc(
        cloud.x + 25,
        cloud.y,
        25 * cloud.size,
        35 * cloud.size,
        p5.PI + p5.TWO_PI,
        p5.TWO_PI
      );
      p5.arc(
        cloud.x + 40,
        cloud.y,
        30 * cloud.size,
        20 * cloud.size,
        p5.PI + p5.TWO_PI,
        p5.TWO_PI
      );
    }
  }

  drawRain(p5: any) {
		p5.fill(66, 206, 244);
		this.rain.forEach(raindrop => p5.circle(raindrop.x, raindrop.y, raindrop.size));
	}

  draw(p5: any) {
    p5.textSize(this.size.w);
    p5.noStroke();
    p5.fill(255, 255, 255);
    p5.text(this.weather, this.position.x, this.position.y + 20);
    p5.text(`${this.temperature} celcius`, this.position.x, this.position.y);
    switch (this.weather) {
      case 'Clear':
        break;
      case 'Clouds':
        this.drawClouds(p5);
        break;
      case 'Rain':
        this.drawRain(p5);
        break;

      default:
        break;
    }
  }
}

export default Weather;
