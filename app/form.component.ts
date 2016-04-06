import {Component} from 'angular2/core';

@Component({
    selector: 'form-component',
    templateUrl: 'views/form.component.html'
})

export class FormComponent {
    
    onSubmit(value: string){
        console.log('da vidim?', value)
    }
}