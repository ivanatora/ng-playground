import {Component} from 'angular2/core';

@Component({
    selector: 'table-component',
    templateUrl: 'views/table.component.html'
})

export class TableComponent {
    public aData = [
        ['Names', 'Emails', 'Phone'],
        ['John', 'john@john.com', 456],
        ['Tom', 'tom@tom.com', 34534],
        ['Jill', 'dfjdsfj@adfsdf.com', 546456],
        ['Bill', 'bill@adfsdf.com', 3421],
        ['Alice', 'alice@alice.com', 245]
    ]
}