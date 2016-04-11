import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

import {Http, Response, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
    selector: 'login-component',
    templateUrl: 'views/login.component.html',
    providers: [
        HTTP_PROVIDERS
    ]
})

export class LoginComponent {
    myForm: ControlGroup;
    
    constructor(private _formBuilder: FormBuilder, private _http: Http){
        this.myForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    
    onSubmit(){
        let sRequestUrl = 'http://life.ivanatora.info/admin/users/login'

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var oParams = {
            'User[username]': this.myForm.value.username,
            'User[password]': this.myForm.value.password,
            'return_ajax': 1,
        }
        var sParams = this.serialize(oParams);

        this._http.post(sRequestUrl, sParams, {headers: headers}).subscribe(res => {
            var data = res.json();
            console.log('incoming', data) 
            if (data.success){
                
            }
        });
        
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