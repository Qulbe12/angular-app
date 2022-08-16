import { AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword } from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  register(model: RegisterModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  forgetPassword(model: ForgetPassword): Observable<AuthUserDto> | Promise<AuthUserDto>
  resetPassword(model: ResetPassword): Observable<string> | string
}
