
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class GeoCodeService {

    // -------------------------------------------------------------------------
    constructor(private http: Http) {}

    // -------------------------------------------------------------------------
    getGeocode(address: string) {

        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address)                
            .map(this.extractData)
            .catch(this.handleError);        

    }

    // -------------------------------------------------------------
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
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


}
