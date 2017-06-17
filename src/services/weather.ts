import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GeoCodeService } from './geocode';

@Injectable()
export class WeatherService {


    place = 'Turku';


    // -----------------------------------------------------------------------------------------------------------
    constructor(private http: Http, private geoCode: GeoCodeService) {


    }


    // -----------------------------------------------------------------------------------------------------------
    getCurrentWeather() {

        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.place}&lang=fi&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
            .map(this.extractWeatherData)
            .catch(this.handleError);        
    } 

    // -----------------------------------------------------------------------------------------------------------
    getForecast() {

        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.place}&lang=fi&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
            .map(this.extractForecastData)
            .catch(this.handleError);        
        
    } 

    // -------------------------------------------------------------
    private extractWeatherData(res: Response) {
        let body = res.json();
        return body || {};
    }

    // -------------------------------------------------------------
    private extractForecastData(res: Response) {
        let body = res.json();
        return body.list || {};
    }

    // -------------------------------------------------------------
    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json || '';
    
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message: error.toString();
        }

        console.log(errMsg);

        return Observable.throw(errMsg);
    }    

    // -----------------------------------------------------------------------------------------------------------
    setPlace(place: string) {
        this.place = place;
    }

    // -----------------------------------------------------------------------------------------------------------
    getPlace() {
        return this.place;
    }

}