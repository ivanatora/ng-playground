import {Injectable, OnInit} from 'angular2/core';

import {Http, Response, URLSearchParams, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {Expense} from './expense';
import {GlobalService} from '../services/global.service.ts';

@Injectable()

export class ExpenseService implements OnInit {
    private _sApiUrl : string = 'http://life.ivanatora.info/admin/finance/list';
    public user = null;
    
    constructor(private _http: Http, private _gs: GlobalService){
        this._gs.user$.subscribe(x => this.user = x)
        this.user = this._gs.getUser();
    }

    load(){
        if (this.user == null) return;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var oParams = {
            start: 0,
            limit: 25,
            jwt: this.user.jwt
        }

        var sParams = this.serialize(oParams);

        return this._http.post(this._sApiUrl, sParams, {headers: headers}).map(res => res.json());
    }

    serialize(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
}