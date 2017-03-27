import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
