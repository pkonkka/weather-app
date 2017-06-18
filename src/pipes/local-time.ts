import { Injectable, Pipe } from '@angular/core';
import moment from 'moment';


@Pipe({
  name: 'localtime'
})
@Injectable()
export class LocalTimePipe {

  transform(value, args) {

    // converts utc timestamp to local date with time
    value = value + '';         // make sure it's a string
    var d = moment.utc(value);
      
    // return d.local().format('ddd, llll');
    return d.local().format('ddd, H:mm');
    }
}
