
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GeoCodeService {

    constructor(private http: Http) {}

    getGeocode(address: string) {

        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address)                
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));        

    }
}
