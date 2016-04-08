import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS}    from 'angular2/http';
import {WeatherService} from '../services/weather.service.ts';

@Component({
    selector: 'ajax-component',
    templateUrl: 'views/ajax.component.html',
    providers: [
        HTTP_PROVIDERS, WeatherService
    ]
})

export class AjaxComponent {
    bAjaxLoaded = false;
    oAjaxData = null;
    
    constructor(private _http: Http, private _weatherService: WeatherService){
        
    }
    
    onClick(){
        this._weatherService.getWeather().subscribe(
            res => this.oAjaxData = res,
            error => {
                console.error('huh?', error)
//                this.sErrorMessage = <any> error;
            }
        )
    }
}