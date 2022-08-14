import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { AuthUserDto, LoginModel, RegisterModel } from "@trucks/core-shared";
import { AuthService } from '@trucks/ng-services';

@Component({
  selector: 'x-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }


  model = new RegisterModel()
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.register(this.model).subscribe((data) => { console.log(data) })
  }
}
