import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { AuthUserDto, LoginModel, RegisterModel } from "@trucks/core-shared";
import { AbstractAccountService } from '@trucks/ng-services';
import { NgBaseComponent } from "../../foundation/ng.base";
import { AccountMockService } from "../../../../../../libs/ng-services/src/account/account.mock-service";

@Component({
  selector: 'x-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends NgBaseComponent {
  constructor(private authService: AbstractAccountService, private router: Router) {
    super()
  }


  model = new RegisterModel()
  dto: AuthUserDto | null = null;

  submit() {
    this.busy = true
    this.validate(this.model, () => {
      this.authService.register(this.model).subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/select-roles']);
          console.log(data)
        },
        (ex) => this.handleServerErrors(ex)
      ).add(() => this.busy = false)
    })


  }

}
