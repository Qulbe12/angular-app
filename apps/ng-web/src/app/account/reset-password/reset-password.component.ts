import { Component } from '@angular/core';
import {AbstractAccountService} from "@trucks/ng-services";
import { Router } from "@angular/router";
import { AuthUserDto, ResetPassword } from "@trucks/core-shared";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";
import {NgBaseComponent} from "../../foundation/ng.base";

@Component({
  selector: 'x-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent extends NgBaseComponent{
  constructor(private authService: AbstractAccountService, private router: Router) {
    super()
  }


  model = new ResetPassword()
  dto: AuthUserDto | null = null;

  submit() {

    this.busy = true
    this.validate(this.model, () => {
      this.authService.resetPassword(this.model).subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/login']);
        },
        (ex) => this.handleServerErrors(ex)
      ).add(() => this.busy = false)
    })


  }
}
