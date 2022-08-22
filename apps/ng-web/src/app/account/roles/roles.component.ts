import { Component, OnInit } from '@angular/core';
import {
  AuthUserDto,
  ResetPasswordModel,
  Roles,
  SelectRoleModel,
} from '@trucks/core-shared';
import { NgBaseComponent } from '../../foundation/ng.base';
import { AbstractAccountService } from '@trucks/ng-services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'x-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent extends NgBaseComponent {
  constructor(
    private authService: AbstractAccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  model = new SelectRoleModel();

  options = [
    {
      title: 'I am Broker',
      value: 'Broker',
      description: 'A person who buys goods and assets.',
    },
    {
      title: 'I am Carrier',
      value: 'Carrier',
      description: 'A carrier operates trucks.',
    }
  ];

  submit() {
    this.validate(this.model, () => {
      this.busy = true;
      this.authService
        .assignRole(this.model)
        .subscribe(
          (data) => {
            localStorage.setItem('user', JSON.stringify(data));
            const next =
              data.role === 'Carrier'
                ? '/setup-carrier-profile'
                : '/setup-broker-profile';
            this.router.navigate([next]);
            console.log(data.role);
          },
          (ex) => this.handleServerErrors(ex)
        )
        .add(() => (this.busy = false));
    });
  }
}
