import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {FormComponent} from './form.component';
import {TableComponent} from './table.component';
import {AjaxComponent} from './ajax.component';
import {VisualComponent} from './visual.component';
import {LoginComponent} from './login.component';
import {ExpensesComponent} from './expenses.component';

import {User} from '../services/user.ts';
import {GlobalService} from '../services/global.service.ts';

@Component({
    selector: 'my-app',
    templateUrl: 'views/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    providers: [
        ROUTER_PROVIDERS, GlobalService
    ]
})

@RouteConfig([
    {
        path: '/form',
        name: 'Form',
        component: FormComponent
    }, {
        path: '/table',
        name: 'Table',
        component: TableComponent
    }, {
        path: '/ajax',
        name: 'Ajax',
        component: AjaxComponent
    }, {
        path: '/visual',
        name: 'Visual',
        component: VisualComponent
    }, {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }, {
        path: '/expenses',
        name: 'Expenses',
        component: ExpensesComponent
    }
])

export class AppComponent implements OnInit {
    public aRoutes = [
        {name: 'Login'},
        {name: 'Form'},
        {name: 'Table'},
        {name: 'Ajax'},
        {name: 'Visual'},
        {name: 'Expenses', is_login_only: true}
    ];
    
    public user: User;
    
    constructor(public router: Router, private _globalService: GlobalService) {}
    
    ngOnInit(){
        this._globalService.user$.subscribe(x => this.user = x)
    }

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}