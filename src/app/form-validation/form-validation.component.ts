import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
	protected usernameData: String;
	protected passwordData: String;
  constructor() {
  	this.usernameData = 'briank';
  	this.passwordData = 'password';
  }

  ngOnInit() {

  }

  onSubmit() { console.log('form submitted'); }

}
