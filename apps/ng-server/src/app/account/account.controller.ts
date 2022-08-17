import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginModel, RegisterModel, ForgetPassword, AuthUserDto, ResetPassword, Otp, ResetStatus } from '@trucks/core-shared';
'@trucks/core-shared';
import { IAccountService } from '@trucks/ng-services';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../_entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer'
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('account')
export class AccountController implements IAccountService {


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
            name: savedUser.name,
            role: 'dummy'
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
                token: accessToken,
                name: foundUser.name,
                role: 'dummy'
            }
        } else {
            throw new HttpException('invalid email or password', HttpStatus.UNAUTHORIZED)
        }
    }
    @Post('forget-password')
    async forgetPassword(@Body() model: ForgetPassword): Promise<Otp> {

        const found = await this.userRepo.findOneBy({ email: model.email })
        if (!found) {
            throw new HttpException('invalid email', HttpStatus.UNAUTHORIZED)
        }
        else {
            // const payload = { id: found.id, email: found.email, }
            // const accessToken = this.jwtService.sign(payload)
            // this.sendResetLink(found.email)
            const otp = "2234"
            found.otp = otp
            await this.userRepo.save(found)
            return {
                otp: "2234"
            }
        }
    }

    @Post('reset-password')
    async resetPassword(@Body() model: ResetPassword): Promise<ResetStatus> {

        const foundUser = await this.userRepo.findOneBy({ otp: model.otp })
        if (!foundUser) {
            throw new HttpException('invalid email', HttpStatus.UNAUTHORIZED)
        } else {
            foundUser.password = model.password
            await this.userRepo.save(foundUser)
            return {
                status: "password successfully changed please login again with new password"
            }
        }
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












