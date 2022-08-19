
import { Injectable } from '@angular/core'
import { AuthUserDto, ForgetPassword, LoginModel, Otp, RegisterModel, ResetPassword, ResetStatus } from '@trucks/core-shared';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { IAccountService } from './account.interface';
@Injectable()
export class AccountService implements IAccountService {


  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>('http://localhost:3333/api/account/login', model)
  }

  forgetPassword(model: ForgetPassword): Observable<void> {

    return this.http.post<void>('http://localhost:3333/api/account/forget-password', model)

  }
  //
  register(model: RegisterModel): Observable<AuthUserDto> {

    return this.http.post<AuthUserDto>('http://localhost:3333/api/account/register', model)

  }

  resetPassword(model: ResetPassword): Observable<ResetStatus> {
    return this.http.post<ResetStatus>('http://localhost:3333/api/account/reset-password', model)
  }


  //

  //
  //
  //
  // forgetPasswordi(model: ForgetPassword): Observable<AuthUserDto> {
  //     const observable = new Observable<AuthUserDto>(observer => {
  //         const dto: AuthUserDto = {
  //
  //             email: model.email,
  //
  //             token: '123',
  //
  //         }
  //         observer.next(dto)
  //     });
  //     return observable;
  // }
  //
  // resetPassword(model: ResetPassword): Observable<string> {
  //     const observable = new Observable<string>(observer => {
  //         const dto = '12345798';
  //         observer.next(dto)
  //     });
  //
  //     return observable;
  // }

}
