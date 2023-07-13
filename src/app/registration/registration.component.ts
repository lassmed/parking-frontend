import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = new User();
  msg='';
  constructor(private _service: RegistrationService, private _router : Router){}
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this.msg="Registration successful";
      },
      error => {
        console.log("exception occured");
        this.msg=error.error.message;
        
      }
    )
  }


}
