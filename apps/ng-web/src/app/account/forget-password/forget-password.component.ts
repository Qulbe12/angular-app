import { Component, OnInit } from '@angular/core';
import {AbstractAccountService} from "@trucks/ng-services";
import { Router } from "@angular/router";
import { AuthUserDto, ForgetPassword } from "@trucks/core-shared";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";

@Component({
  selector: 'x-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  constructor(private authService: AbstractAccountService, private router: Router) { }


  model = new ForgetPassword()
  dto: AuthUserDto | null = null;

  submit() {
    // this.authService.forgetPassword(this.model).subscribe((data) => { console.log(data) })
  }
}
