import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.html'
})
export class ForecastItemComponent implements OnChanges {

  @Input() forecast: any;
  iconPath: string;

  constructor() {
  }

  ngOnChanges() {
    this.iconPath = 'http://openweathermap.org/img/w/' + this.forecast.weather[0].icon + '.png';
    
  }
  

}
