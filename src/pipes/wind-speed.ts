import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
@Injectable()
export class WindSpeedPipe {

  transform(value, args) {
    return Math.round(value);
 
  }
}
