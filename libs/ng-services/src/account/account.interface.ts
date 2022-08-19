import {
  AuthUserDto,
  ForgetPasswordModel,
  LoginModel,
  Otp,
  RegisterModel,
  ResetPasswordModel,
  Roles,
  SelectRoleModel
} from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  register(model: RegisterModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  forgetPassword(model: ForgetPasswordModel): Observable<boolean> | Promise<boolean>
  resetPassword(model: ResetPasswordModel): Observable<boolean> |  Promise<boolean>
  assignRole(model: SelectRoleModel): Observable<AuthUserDto> |  Promise<AuthUserDto>
}


export abstract class AbstractAccountService implements IAccountService {
  abstract login(model: LoginModel): Observable<AuthUserDto>
  abstract register(model: RegisterModel): Observable<AuthUserDto>
  abstract forgetPassword(model: ForgetPasswordModel): Observable<boolean>
  abstract resetPassword(model: ResetPasswordModel): Observable<boolean>
  abstract assignRole(model: SelectRoleModel): Observable<AuthUserDto>
}
