import { Component, Input } from '@angular/core';

@Component({
  selector: 'forecast-day',
  templateUrl: 'forecast-day.html'
})
export class ForecastDayComponent {

  dayForecasts: any;

  @Input() forecast;

  constructor() {

    

  }

}
