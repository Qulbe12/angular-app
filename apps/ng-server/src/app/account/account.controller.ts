import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginModel, RegisterModel, ForgetPassword, AuthUserDto, ResetPassword } from '@trucks/core-shared';
'@trucks/core-shared';
import { IAccountService } from '@trucks/ng-services';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../_entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Controller('account')
export class AccountController implements IAccountService {


    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService: JwtService
    ) { }



    @Post('register')
    async register(@Body() model: RegisterModel): Promise<AuthUserDto> {

        const isEmailNotAvailable = await this.userRepo.findOneBy({ email: model.email })
        if (isEmailNotAvailable) {
            throw new HttpException('email already taken , enter other email ', HttpStatus.UNAUTHORIZED)
        }

        const savedUser = await this.userRepo.save(model)
        const payload = { id: savedUser.id, email: savedUser.email, }
        const accessToken = this.jwtService.sign(payload)
        return {
            email: savedUser.email,
            token: accessToken,
        }

    }
    @Post('login')
    async login(@Body() model: LoginModel): Promise<AuthUserDto> {
        const foundUser = await this.userRepo.findOneBy({ email: model.email })
        if (foundUser && foundUser.password == model.password) {
            const payload = { id: foundUser.id, email: foundUser.email, }
            const accessToken = this.jwtService.sign(payload)
            return {
                email: foundUser.email,
                token: accessToken
            }
        } else {
            throw new HttpException('invalid email or password', HttpStatus.UNAUTHORIZED)
        }
    }

    forgetPassword(model: ForgetPassword): AuthUserDto | Observable<AuthUserDto> {
        throw new Error('Method not implemented.');
    }


    resetPassword(model: ResetPassword): string | Observable<string> {
        throw new Error('Method not implemented.');
    }



}












