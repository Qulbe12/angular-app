
import { Injectable } from '@angular/core'
import { AuthUserDto, ForgetPassword, LoginModel, RegisterModel, ResetPassword } from '@trucks/core-shared';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { IAccountService } from './account.interface';
@Injectable()
export class AuthService implements IAccountService {


    constructor(private http: HttpClient) { }

    forgetPassword(model: ForgetPassword): Observable<AuthUserDto> {

        return this.http.post<AuthUserDto>('http://localhost:3333/api/account/forget', model)

    }

    register(model: RegisterModel): Observable<AuthUserDto> {

        return this.http.post<AuthUserDto>('http://localhost:3333/api/account/register', model)

    }

    login(model: LoginModel): Observable<AuthUserDto> {

        return this.http.post<AuthUserDto>('http://localhost:3333/api/account/login', model)
    }



    forgetPasswordi(model: ForgetPassword): Observable<AuthUserDto> {
        const observable = new Observable<AuthUserDto>(observer => {
            const dto: AuthUserDto = {

                email: model.email,

                token: '123',

            }
            observer.next(dto)
        });
        return observable;
    }

    resetPassword(model: ResetPassword): Observable<string> {
        const observable = new Observable<string>(observer => {
            const dto = '12345798';
            observer.next(dto)
        });

        return observable;
    }

}
