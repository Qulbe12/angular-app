import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {RolesComponent} from "./roles/roles.component";
import {TestOneComponent} from "./test-one/test-one.component";
import {TestTwoComponent} from "./test-two/test-two.component";
import {PasswordUpdatedComponent} from "./password-updated/password-updated.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register' , component: RegisterComponent},
  {path:'forget-password' , component: ForgetPasswordComponent},
  {path: 'reset-password/:email' , component: ResetPasswordComponent},
  {path: 'select-roles' , component: RolesComponent},
  {path: 'test-one' , component: TestOneComponent},
  {path: 'test-two/:email/:id' , component: TestTwoComponent},
  {path: 'password-updated' , component: PasswordUpdatedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
