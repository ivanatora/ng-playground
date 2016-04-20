import {Injectable} from 'angular2/core';

import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Expense} from './expense';

@Injectable()

export class ExpenseService {
    private _sApiUrl : string = 'http://life.ivanatora.info/admin/finance/list';
    
    constructor(private _http: Http){}

    load(){
        let params: URLSearchParams = new URLSearchParams();
        params.set('start', 0);
        params.set('limit', 25);

        return this._http.get(this._sApiUrl, {
            search: params
        }).map(res => {
            let data = res.json();
            console.log('got some data', data);
            // return <Weather> {
            //     city: data.name,
            //     temp: data.main.temp,
            //     humidity: data.main.humidity,
            //     pressure: data.main.pressure
            // }
        });
    }
}