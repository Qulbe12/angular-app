import {Component, OnInit} from '@angular/core';
import {AbstractAccountService} from "@trucks/ng-services";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthUserDto, ResetPasswordModel } from "@trucks/core-shared";
import {AccountMockService} from "../../../../../../libs/ng-services/src/account/account.mock-service";
import {NgBaseComponent} from "../../foundation/ng.base";

@Component({
  selector: 'x-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent extends NgBaseComponent implements OnInit{
  constructor(private authService: AbstractAccountService, private router: Router , private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const email = params['email']
      console.log(params)
      this.model.email = email
    });
    console.log(this.model)
  }

  model = new ResetPasswordModel()
  dto: AuthUserDto | null = null;

  submit() {
    this.busy = true
    this.validate(this.model, () => {
      this.authService.resetPassword(this.model).subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/password-updated']);
        },
        (ex) => this.handleServerErrors(ex)
      ).add(() => this.busy = false)
    })
  }
}
