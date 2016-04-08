import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

@Component({
    selector: 'bootstrap-component',
    templateUrl: 'views/visual.component.html'
})

export class VisualComponent {
    myForm: ControlGroup;
    
    constructor(private _formBuilder: FormBuilder){
        this.myForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        })
    }
    
    onSubmit(){
        console.log('form is', this.myForm)
        if (this.myForm.dirty && this.myForm.valid){
            console.log('go! values:', this.myForm.value)
        }
        
    }
}