import {Injectable} from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()

export class WeatherService {
    private _sApiKey : string = '83993ffadaa6893feba5ae755f27f66d';
    private _sApiUrl : string = 'http://api.openweathermap.org/data/2.5/';
    
    constructor(private _http: Http){}
    
    getWeather(){
        let sRequestUrl = this._sApiUrl + 'weather?q=Plovdiv&units=metric&APPID=' + this._sApiKey;
        
        return this._http.get(sRequestUrl);
    }
}