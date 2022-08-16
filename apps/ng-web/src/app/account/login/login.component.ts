import { Component, OnInit } from '@angular/core';
import { AuthUserDto, LoginModel } from '@trucks/core-shared';

import { Router } from '@angular/router';
import { AuthService } from '@trucks/ng-services';
import {validate} from 'class-validator'



@Component({
  selector: 'x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  model = new LoginModel();
  dto: AuthUserDto | null = null;
  errors : string[] = []
  loading: boolean = false

  submit() {
      const errs = []
      validate(this.model).then((errors) => {
       if(errors.length > 0){
         errors.map(function(error){
            if(!error.constraints){
              return
            }

           for (const [key, value] of Object.entries(error.constraints) ){
             console.log(value)
           }
         })
       }else{
         this.authService.login(this.model).subscribe(res =>
           console.log(res)
         )
       }
      })
  }
}
