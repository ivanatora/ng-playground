import {Component} from 'angular2/core';
import {Dragula} from '../directives/dragula.directive.ts';
import {DragulaService} from '../providers/dragula.provider.ts';

@Component({
    selector: 'dragula-component',
    templateUrl: 'views/dragula.component.html',
    directives: [
        Dragula
    ],
    providers: [DragulaService]
})

export class DragulaComponent {

}