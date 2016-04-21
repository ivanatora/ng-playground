import {bootstrap} from 'angular2/platform/browser';
import {provide, ComponentRef} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import {GlobalService} from "../services/global.service.ts";
import {ExpenseService} from "../services/expense.service.ts";
import {Auth} from "./auth.ts";
import {appInjector} from './app-injector.ts';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, GlobalService, ExpenseService, Auth]).then((appRef: ComponentRef) => {
    // store a reference to the application injector
    appInjector(appRef.injector);
});