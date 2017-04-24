import { Injectable, Pipe } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'localdate'
})
@Injectable()
export class LocalDatePipe {

  // converts utc timestamp to local date without time
  transform(value, args) {
    value = value + ''; // make sure it's a string
    var d = moment.utc(value);
    
    return d.local().format('ddd, ll');
  }
}
