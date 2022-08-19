import { Component, OnInit } from '@angular/core';
import { AbstractAccountService } from "@trucks/ng-services";
import { Router } from "@angular/router";

import { AuthUserDto, ForgetPasswordModel } from "@trucks/core-shared";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";
import {NgBaseComponent} from "../../foundation/ng.base";



@Component({
  selector: 'x-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent extends NgBaseComponent {
  constructor(private authService: AbstractAccountService, private router: Router) {
    super()
  }


  model = new ForgetPasswordModel()
  dto: AuthUserDto | null = null;

  submit() {
    this.busy = true
    this.validate(this.model, () => {
      this.authService.forgetPassword(this.model).subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/reset-password' , this.model.email]);
          console.log(data)
        },
        (ex) => this.handleServerErrors(ex)
      ).add(() => this.busy = false)
    })
  }

}
