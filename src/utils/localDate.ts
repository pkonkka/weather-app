import moment from 'moment';

export function localDate(value) {
    value = value + ''; // make sure it's a string
    var d = moment.utc(value);
    
    return d.local().format('ddd, ll');
  }