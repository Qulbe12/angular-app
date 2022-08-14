import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FoundationModule } from '../foundation/foundation.module';
import { FormsModule } from '@angular/forms';
import { ResetPassword } from '@trucks/core-shared';
import { AuthMockService, AuthService } from '@trucks/ng-services';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, FoundationModule, AccountRoutingModule, FormsModule],
  providers: [AuthService, ResetPassword, AuthMockService],
})
export class AccountModule {}
