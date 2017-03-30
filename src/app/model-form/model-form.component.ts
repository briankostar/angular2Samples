import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component( {
	selector   :'app-model-form',
	templateUrl:'./model-form.component.html',
	styleUrls  :[ './model-form.component.css' ]
} )
export class ModelFormComponent implements OnInit {
	form:FormGroup;

	username = new FormControl( '', Validators.required );

	constructor( fb:FormBuilder ) {
		//form is a group of form controls
		//form can be instantiated individually or with array notation
		//form control takes initial value, then validators
		this.form = fb.group( {
			"username":this.username,
			"password":[ '', Validators.required ]
		} )
	}

	ngOnInit() {
	}

	onSubmit() {
		console.log( 'form submitted', this.form )
	}



}
