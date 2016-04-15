import {Component} from 'angular2/core';

@Component({
    selector: 'expenses-component',
    templateUrl: 'views/expenses.component.html'
})

export class ExpensesComponent {
    public aData = [
        ['Names', 'Emails'],
        ['John', 'john@john.com'],
        ['Tom', 'tom@tom.com'],
        ['Jill', 'dfjdsfj@adfsdf.com'],
        ['Bill', 'bill@adfsdf.com'],
        ['Alice', 'alice@alice.com']
    ]
}