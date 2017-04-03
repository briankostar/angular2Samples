import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from './user.interfece';

@Component( {
	selector   :'app-model-form2',
	templateUrl:'model-form2.component.html',
	styleUrls  :[ 'model-form2.component.css' ]
} )
export class ModelForm2Component implements OnInit {
	//form is type of formgroup
	public form:FormGroup;
	public submitted:boolean;
	public events: any[] = [];

	constructor( private fb:FormBuilder ) {

	}

	ngOnInit() {
		//Fromgroup can contain formgroup or formcontrols
		//form control can be declared in 2 ways as seen below
		this.form = this.fb.group( {
			"username":new FormControl( '', [ Validators.required ] ),
			"password":[ 'sdfsffsd', [ Validators.required, Validators.minLength( 6 ) ] ],
			"address" :this.fb.group( {
				"street"  :[ 'sdf', Validators.required ],
				"postcode":new FormControl( 'M5L90X' )
			} )
		} );

		//we can set initial static value like above
		//to set value dynamically - ie after a GET call :
		//by default, form.controls[] is AbstractControl. we can cast it as formcontrol to use specific functions
		( <FormControl>this.form.controls[ 'username' ] )
		//onlySelf is optional. it will only affect the validation of this control and not the parent.
			.setValue( 'John', { onlySelf:true } )

		//to fill whole form:
		const formData = {
			username:'user',
			password:'password',
			address :{
				street  :"324 green st",
				postcode:"12455"
			}
		};
		( <FormGroup>this.form )
			.setValue( formData, { onlySelf:true } );


		this.subToFormChanges();
	}

	//can get form.value and form.valid
	onSubmit( user:User, isValid:boolean ) {
		this.submitted = true;
		console.log( 'submitted!', user, isValid, this.form );
	}

	subToFormChanges(){
		const formValueStream = this.form.valueChanges;
		formValueStream.subscribe(data => this.events.push({event: 'FORM CHANGED', object: data}))
	}
}
