import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import {GlobalService} from "../services/global.service.ts";
import {ExpenseService} from "../services/expense.service.ts";

bootstrap(AppComponent, [HTTP_PROVIDERS, GlobalService, ExpenseService]);