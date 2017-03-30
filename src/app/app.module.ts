import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ModelFormComponent } from './model-form/model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    FormValidationComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
