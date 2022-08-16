import { AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword } from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | Promise<AuthUserDto>

  // forgetPassword(model: ForgetPassword): Observable<AuthUserDto> | Promise<AuthUserDto>
  // resetPassword(model: ResetPassword): Observable<string> | string
}


export abstract class AbstractAccountService implements IAccountService {
  abstract login(model: LoginModel): Observable<AuthUserDto>
  abstract register(model: RegisterModel): Observable<AuthUserDto>
}
