import { Component, OnInit } from '@angular/core';
import {AuthMockService} from "@trucks/ng-services";
import {Router} from "@angular/router";
import {AuthUserDto, LoginModel, RegisterModel} from "@trucks/core-shared";

@Component({
  selector: 'x-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  {
  constructor(private authService: AuthMockService, private router: Router) { }


  model = new RegisterModel()
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.register(this.model).subscribe((data) => { console.log(data) })
  }
}
