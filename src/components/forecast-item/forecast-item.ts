import { Component, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.html'
})
export class ForecastItemComponent {

  text: string;

  constructor() {
    console.log('Hello ForecastItem Component');
    this.text = 'Hello World';
  }

}
