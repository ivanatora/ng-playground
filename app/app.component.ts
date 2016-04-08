import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {FormComponent} from './form.component';
import {TableComponent} from './table.component';
import {AjaxComponent} from './ajax.component';
import {VisualComponent} from './visual.component';

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
    }
])

export class AppComponent {
    public aRoutes = ['Form', 'Table', 'Ajax', 'Visual'];
    
    constructor(public router: Router) {}

    isActive(instruction: any[]): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));
    }
}