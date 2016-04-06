import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {FormComponent} from './form.component';
import {TableComponent} from './table.component';

@Component({
    selector: 'my-app',
    templateUrl: 'views/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/form',
        name: 'Form',
        component: FormComponent
    },{
        path: '/table',
        name: 'Table',
        component: TableComponent
    }
])

export class AppComponent {
    public aRoutes = ['Form', 'Table'];
}