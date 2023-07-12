import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user =new User();
  msg ='';
  constructor(private _service: RegistrationService, private _router : Router){}
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (      data): void => {
        console.log('Response received');
        this._router.navigate(['/homepage']);
      },
      error => {
        console.log('Exception occurred');
        this.msg = 'Bad credentials, Try again';
      }
    );
  }

}
