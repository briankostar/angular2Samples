import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormModule } from "./form/form.module";

import { AppComponent } from './app.component';

@NgModule( {
	imports     :[
		BrowserModule,
		HttpModule,
		FormModule
	],
	declarations:[
		AppComponent
	],
	providers:[],
	bootstrap:[ AppComponent ]
} )
export class AppModule {
}
