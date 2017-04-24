import { Component, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: 'forecast-item.html'
})
export class ForecastItemComponent {

  @Input() forecast: any;

  constructor() {
  }

}
