import { Component, OnInit } from '@angular/core';
import { AuthUserDto, LoginModel } from "@trucks/core-shared";

import { Router } from "@angular/router";
import { AuthService } from '@trucks/ng-services';

@Component({
  selector: 'x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }


  model = new LoginModel
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.login(this.model).subscribe((data) => { console.log(data) })
  }
}

