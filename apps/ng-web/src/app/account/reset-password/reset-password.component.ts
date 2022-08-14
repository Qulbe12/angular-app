import { Component } from '@angular/core';
import { AuthService } from "@trucks/ng-services";
import { Router } from "@angular/router";
import { AuthUserDto, ResetPassword } from "@trucks/core-shared";

@Component({
  selector: 'x-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private authService: AuthService, private router: Router) { }


  model = new ResetPassword()
  dto: AuthUserDto | null = null;

  submit() {
    this.authService.resetPassword(this.model).subscribe((data) => { console.log(data) })
  }
}
