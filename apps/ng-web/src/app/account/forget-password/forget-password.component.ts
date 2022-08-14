import { Component, OnInit } from '@angular/core';
import { AuthService } from "@trucks/ng-services";
import { Router } from "@angular/router";
import { AuthUserDto, ForgetPassword } from "@trucks/core-shared";

@Component({
  selector: 'x-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  constructor(private authService: AuthService, private router: Router) { }


  model = new ForgetPassword()
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.forgetPassword(this.model).subscribe((data) => { console.log(data) })
  }
}
