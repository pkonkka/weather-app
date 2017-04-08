import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {


    // -----------------------------------------------------------------------------------------------------------
    constructor(private http: Http) {


    }


    // -----------------------------------------------------------------------------------------------------------
    getCurrentWeather(city: string) {

        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        
    } 

    // -----------------------------------------------------------------------------------------------------------
    getForecast(city: string) {

        return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        
    } 


}