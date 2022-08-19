import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FoundationModule } from '../foundation/foundation.module';
import { FormsModule } from '@angular/forms';
import { AbstractAccountService, IAccountService } from '@trucks/ng-services';
import { AccountService } from '@trucks/ng-services';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PartialsModule } from '../partials/partials.module';
import { AccountMockService } from '../../../../../libs/ng-services/src/account/account.mock-service';
import { RolesComponent } from './roles/roles.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { PasswordUpdatedComponent } from './password-updated/password-updated.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    RolesComponent,
    TestOneComponent,
    TestTwoComponent,
    PasswordUpdatedComponent,
  ],
  imports: [
    CommonModule,
    FoundationModule,
    AccountRoutingModule,
    FormsModule,
    PartialsModule,
  ],
  providers: [
    { provide: AbstractAccountService, useClass: AccountMockService },
  ],
})
export class AccountModule {}
