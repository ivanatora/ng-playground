import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS}    from 'angular2/http';

@Component({
    selector: 'ajax-component',
    templateUrl: 'views/ajax.component.html',
    providers: [
        HTTP_PROVIDERS
    ]
})

export class AjaxComponent {
    sAjaxResult: string = 'Waiting...';
    
    protected sApiKey : string = '83993ffadaa6893feba5ae755f27f66d';
    protected sApiUrl : string = 'http://api.openweathermap.org/data/2.5/';
    
    bAjaxLoaded = false;
    oAjaxData = {};
    
    
    constructor(protected _http: Http){
        
    }
    
    onClick(){
        let sRequestUrl = this.sApiUrl + 'weather?q=Plovdiv&units=metric&APPID=' + this.sApiKey;
        this._http.get(sRequestUrl).subscribe(res => {
            this.bAjaxLoaded = true;
            this.oAjaxData = res.json();
        })
    }
}