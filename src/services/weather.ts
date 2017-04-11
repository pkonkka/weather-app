import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {


    place = 'Turku';


    // -----------------------------------------------------------------------------------------------------------
    constructor(private http: Http) {


    }


    // -----------------------------------------------------------------------------------------------------------
    getCurrentWeather() {

        // if (lat === -1) {
            return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.place}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
                .map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        
        // }
        // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
        //     .map((res: Response) => res.json())
        //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        


    } 

    // -----------------------------------------------------------------------------------------------------------
    getForecast() {

        // if (lat === -1) {
            return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.place}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
                .map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        
        // }
        // return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=bdacc3ee6063dd08e4b8ec16805cdbbc`)                
        //     .map((res: Response) => res.json())
        //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        
        

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