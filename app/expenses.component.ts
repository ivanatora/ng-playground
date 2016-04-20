import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS}    from 'angular2/http';
import {ExpenseService} from '../services/expense.service.ts';
import {Expense} from '../services/expense.ts';

@Component({
    selector: 'expenses-component',
    templateUrl: 'views/expenses.component.html',
    providers: []
})

export class ExpensesComponent implements OnInit{
    public aPageData = [];

    constructor(private _http: Http, private _es: ExpenseService){}

    ngOnInit(){
        // this._es.load().subscribe(res => this.aPageData = res);
    }

    onClick(){
        this._es.load().subscribe(res => this.aPageData = res);
    }
}