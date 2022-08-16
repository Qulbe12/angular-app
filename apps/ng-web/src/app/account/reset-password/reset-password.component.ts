import { Component } from '@angular/core';
import {AbstractAccountService} from "@trucks/ng-services";
import { Router } from "@angular/router";
import { AuthUserDto, ResetPassword } from "@trucks/core-shared";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";

@Component({
  selector: 'x-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private authService: AbstractAccountService, private router: Router) { }


  model = new ResetPassword()
  dto: AuthUserDto | null = null;

  submit() {
    // this.authService.resetPassword(this.model).subscribe((data) => { console.log(data) })
  }
}
