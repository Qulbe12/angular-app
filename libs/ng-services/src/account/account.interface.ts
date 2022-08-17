import { AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword } from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  register(model: RegisterModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  forgetPassword(model: ForgetPassword): Observable<string> | Promise<string>
  resetPassword(model: ResetPassword): Observable<string> |  Promise<string>
}


export abstract class AbstractAccountService implements IAccountService {
  abstract login(model: LoginModel): Observable<AuthUserDto>
  abstract register(model: RegisterModel): Observable<AuthUserDto>
  abstract forgetPassword(model: ForgetPassword): Observable<string>
  abstract resetPassword(model: ResetPassword): Observable<string>
}
