import {Injectable} from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {User} from './user';

@Injectable()

export class GlobalService {
    user : User;
    
    setUser(user){
        this.user = user;
    }
        
    
}