import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'kc'
})
@Injectable()
export class KelvinCelsiusPipe {

  transform(value, args) {
    let celsius = Math.round((Number(value) - 273.15) * 10) / 10;
    let retval = celsius.toString() + ' \xB0C';
    return retval;
  }

}
