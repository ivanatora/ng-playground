import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

import {User} from './user';

@Injectable()

export class GlobalService {
    
    public user$;
    private _userObserver: Observer;
    private _user = null;
    
    constructor(){
        this.user$ = new Observable(observer => this._userObserver = observer).share();
    }
    
    setUser(user: User){
        this._user = user;
        this._userObserver.next(user);
    }
    
}