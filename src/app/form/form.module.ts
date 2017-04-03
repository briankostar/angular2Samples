import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BaseFormComponent } from "./base-form/base-form.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { ModelFormComponent } from "./model-form/model-form.component";
import { ModelForm2Component } from "./model-form2/model-form2.component";

@NgModule( {
	imports     :[
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations:[
		BaseFormComponent,
		FormValidationComponent,
		ModelFormComponent,
		ModelForm2Component
	],
	exports     :[
		BaseFormComponent,
		FormValidationComponent,
		ModelFormComponent,
		ModelForm2Component
	]
} )
export class FormModule {
}
