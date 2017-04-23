import { Injectable, Pipe } from '@angular/core';


// Convert unix time to local time
@Pipe({
  name: 'time'
})
@Injectable()
export class TimePipe {

  transform(value, args) {


    // convert time to milliseconds
    let date = new Date(value * 1000);

    // hours
    let hours = date.getHours();

    // minutes
    let minutes = date.getMinutes();

    // result
    let formattedTime = hours + ':' + minutes;

    return formattedTime;



  }

}
