import { Component, OnInit } from '@angular/core';
import {AuthUserDto, LoginModel} from "@trucks/core-shared";
import {AuthMockService} from "@trucks/ng-services";
import {Router} from "@angular/router";

@Component({
  selector: 'x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private authService: AuthMockService, private router: Router) { }


  model = new LoginModel
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.login(this.model).subscribe((data) => { console.log(data) })
  }
}

