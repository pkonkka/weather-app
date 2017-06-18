import { Component, Input, OnChanges } from '@angular/core';

import { WeatherService } from '../../services/weather';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.html'
})
export class ForecastItemComponent implements OnChanges {

  @Input() forecast: any;
  iconPath: string;

  constructor(private weatherService: WeatherService) {
  }

  ngOnChanges() {
    this.iconPath = this.weatherService.getForecastIcon(this.forecast);    
  }
  

}
