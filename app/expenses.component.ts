import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS}    from 'angular2/http';
import {ExpenseService} from '../services/expense.service.ts';
import {Expense} from '../services/expense.ts';

import {CanActivate, ROUTER_PROVIDERS} from 'angular2/router';
import {isLoggedIn} from './is-logged-in.ts';

@Component({
    selector: 'expenses-component',
    templateUrl: 'views/expenses.component.html',
    providers: [ROUTER_PROVIDERS]
})
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
    return isLoggedIn(next, previous);
})

export class ExpensesComponent implements OnInit{
    public aPageData = [];

    constructor(private _http: Http, private _es: ExpenseService){}

    ngOnInit(){
        this._es.load().subscribe(res => this.aPageData = res.data);
    }

}