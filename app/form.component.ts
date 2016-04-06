import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';

@Component({
    selector: 'form-component',
    templateUrl: 'views/form.component.html'
})

export class FormComponent {
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