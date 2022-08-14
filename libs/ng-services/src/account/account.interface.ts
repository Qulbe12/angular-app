import { AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword } from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | AuthUserDto
  register(model: RegisterModel): Observable<AuthUserDto> | AuthUserDto
  forgetPassword(model: ForgetPassword): Observable<AuthUserDto> | AuthUserDto
  resetPassword(model: ResetPassword): Observable<string> | string
}
