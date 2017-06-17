import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the WindDir pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'dirFi'
})
@Injectable()
export class WindDirPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {

    console.log('Tuulen suunta', value);

    let dirFi = '';
    let numberValue = Number(value);
    if (numberValue >= 0 && numberValue < 22.5 || numberValue >= 337.5) {
      dirFi = 'Pohjoistuulta';
    } else if (numberValue >= 22.5 && numberValue < 67.5) {
      dirFi = 'Koillistuulta';
    } else if (numberValue >= 67.5 && numberValue < 112.5) {
      dirFi ='Itätuulta';
    } else if (numberValue >= 112.5 && numberValue < 157.5) {
      dirFi = 'Kaakkoistuulta';
    } else if (numberValue >= 157.5 && numberValue < 202.5) {
      dirFi = 'Etelätuulta';
    } else if (numberValue >= 202.5 && numberValue < 247.5) {
      dirFi = 'Lounaistuulta';
    } else if (numberValue >= 247.5 && numberValue < 292.5) {
      dirFi = 'Länsituulta';
    } else if (numberValue >= 292.5 && numberValue < 337.5) {
      dirFi = 'Luoteistuulta';
    } else {
      dirFi = 'Tuulen suunta: ???'
    }

    return dirFi;
  }
}
