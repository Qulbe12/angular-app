import {Injectable} from '@angular/core'
import {AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword} from "@trucks/core-shared";
import {Observable} from "rxjs";
import {IAccountService} from "./account.interface";

@Injectable()
export class AccountMockService implements IAccountService {

  login(model: LoginModel): Observable<AuthUserDto> {

    return new Observable<AuthUserDto>(observer => {
      const dto: AuthUserDto = {
        name: 'Qulbe Hussain',
        email: "hussain@gmail.com",
        token: '123',
        role: 'Admin'
      }
      observer.next(dto)
    });

  }

  register(model: RegisterModel): Observable<AuthUserDto> {
    return new Observable<AuthUserDto>(observer => {
      const dto: AuthUserDto = {
        name: 'Qulbe Hussain',
        email: "hussain@gmail.com",
        token: '123',
        role: 'Admin'
      }
      observer.next(dto)
    });

  }


  forgetPassword(model: ForgetPassword): Observable<string> {
    const observable = new Observable<string>(observer => {
      const dto = '12345798';
      observer.next(dto)
    });
    return observable;
  }
  //
  //
  //
  //
  //
  //
  //
  // forgetPasswordi(model: ForgetPassword): Observable<AuthUserDto> {
  //   const observable = new Observable<AuthUserDto>(observer => {
  //     const dto: AuthUserDto = {
  //       name: 'ahsan',
  //       email: model.email,
  //       terms: true,
  //       token: '123',
  //       expiry: '12:22',
  //       role: 'Admin'
  //     }
  //     observer.next(dto)
  //   });
  //   return observable;
  // }

  resetPassword(model: ResetPassword): Observable<string> {
    const observable = new Observable<string>(observer => {
      const dto = '12345798';
      observer.next(dto)
    });

    return observable;
  }

}
