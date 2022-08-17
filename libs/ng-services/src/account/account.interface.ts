import {AuthUserDto, ForgetPassword, LoginModel, Otp, RegisterModel, ResetPassword, ResetStatus} from "@trucks/core-shared";
import { Observable } from "rxjs";

export interface IAccountService {
  login(model: LoginModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  register(model: RegisterModel): Observable<AuthUserDto> | Promise<AuthUserDto>
  forgetPassword(model: ForgetPassword): Observable<Otp> | Promise<Otp>
  resetPassword(model: ResetPassword): Observable<ResetStatus> |  Promise<ResetStatus>
}


export abstract class AbstractAccountService implements IAccountService {
  abstract login(model: LoginModel): Observable<AuthUserDto>
  abstract register(model: RegisterModel): Observable<AuthUserDto>
  abstract forgetPassword(model: ForgetPassword): Observable<Otp>
  abstract resetPassword(model: ResetPassword): Observable<ResetStatus>
}
