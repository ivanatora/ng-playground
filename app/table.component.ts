import {Component} from 'angular2/core';

@Component({
    selector: 'table-component',
    templateUrl: 'views/table.component.html'
})

export class TableComponent {
    public aData = [
        ['Names', 'Emails'],
        ['John', 'john@john.com'],
        ['Tom', 'tom@tom.com'],
        ['Alice', 'alice@alice.com']
    ]
}