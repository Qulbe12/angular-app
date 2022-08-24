
import { Injectable } from '@angular/core';
import {
  AuthUserDto,
  ForgetPasswordModel,
  LoginModel,
  Otp,
  RegisterModel,
  ResetPasswordModel,
  Roles,
  SelectRoleModel,
} from '@trucks/core-shared';


import { Observable } from 'rxjs';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { IAccountService } from './account.interface';
import { NotImplementedException } from '@nestjs/common';
@Injectable()
export class AccountService implements IAccountService {




  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>('http://localhost:3333/api/account/login', model)
  }





  forgetPassword(model: ForgetPasswordModel): Observable<boolean> {
    return this.http.post<boolean>(
      'http://localhost:3333/api/account/forget-password',
      model
    );
  }
  //
  register(model: RegisterModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>(
      'http://localhost:3333/api/account/register',
      model
    );
  }


  resetPassword(model: ResetPasswordModel): Observable<boolean> {
    return this.http.post<boolean>(
      'http://localhost:3333/api/account/reset-password',
      model
    );
  }

  assignRole(model: SelectRoleModel): Observable<AuthUserDto> {
    return this.http.post<AuthUserDto>(
      'http://localhost:3333/api/account/assign-role',
      model
    );
  }
  //

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
