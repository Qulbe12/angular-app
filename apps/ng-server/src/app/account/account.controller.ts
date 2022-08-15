import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginModel, RegisterModel, ForgetPassword, AuthUserDto, ResetPassword } from '@trucks/core-shared';
'@trucks/core-shared';
import { IAccountService } from '@trucks/ng-services';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../_entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer'


@Controller('account')
export class AccountController {


    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService: JwtService,
        private mailerService: MailerService
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
    @Post('forget')
    async forgetPassword(@Body() model: ForgetPassword) {

        const found = await this.userRepo.findOneBy({ email: model.email })
        if (!found) {
            throw new HttpException('invalid email', HttpStatus.UNAUTHORIZED)
        }
        else {
            const payload = { id: found.id, email: found.email, }
            const accessToken = this.jwtService.sign(payload)
            this.sendResetLink(found.email)
            return {
                email: found.email,
                token: accessToken
            }
        }
    }


    resetPassword(model: ResetPassword): string | Observable<string> {
        throw new Error('Method not implemented.');
    }































    // helpers
    sendResetLink(toEmail: string) {
        this.mailerService
            .sendMail({
                to: toEmail, // list of receivers
                from: 'noreply@nestjs.com', // sender address
                subject: 'Testing Nest MailerModule ✔', // Subject line
                text: 'welcome', // plaintext body
                html: '<a href="http://localhost:4200/resetpassword">Open Link</a>', // HTML body content
            })
            .then((pass) => { console.log(pass) })
            .catch((err) => { console.log(err) });
    }



}












