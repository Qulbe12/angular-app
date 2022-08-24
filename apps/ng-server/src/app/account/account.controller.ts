import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { LoginModel, RegisterModel, AuthUserDto, Otp, ResetStatus, ForgetPasswordModel, ResetPasswordModel, SelectRoleModel } from '@trucks/core-shared';

'@trucks/core-shared';
import { IAccountService } from '@trucks/ng-services';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../_entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer'
import { ApiBearerAuth } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { OTP } from '../_entities/otp.entity';
import { JwtAuthGuard } from '../_strategies/jwt.strategy';

@ApiBearerAuth()
@Controller('account')
export class AccountController implements IAccountService {


    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(OTP) private otpRepo: Repository<OTP>,
        private jwtService: JwtService,
        private mailerService: MailerService
    ) {
        // userRepo.clear()
        // otpRepo.clear()
    }

    @UseGuards(JwtAuthGuard)
    @Post('assign-role')
    async assignRole(@Body() model: SelectRoleModel, @Request() req): Promise<AuthUserDto> {

        const authUser = req.user as User
        authUser.role = model.role
        const payload = { id: authUser.id, email: authUser.email, }
        const accessToken = this.jwtService.sign(payload)
        await this.userRepo.save(authUser)
        return {
            name: authUser.name,
            email: authUser.email,
            token: accessToken,
            role: authUser.role
        }


    }





    @Post('register')
    async register(@Body() model: RegisterModel): Promise<AuthUserDto> {

        const isEmailNotAvailable = await this.userRepo.findOneBy({ email: model.email })
        if (isEmailNotAvailable) {
            throw new HttpException('email already taken , enter other email ', HttpStatus.BAD_REQUEST)
        }

        const { name, email } = model
        const password = bcrypt.hashSync(model.password, 10)
        const createUser = this.userRepo.create({ name, email, password })
        const savedUser = await this.userRepo.save(createUser)
        const payload = { id: savedUser.id, email: savedUser.email, }
        const accessToken = this.jwtService.sign(payload)
        return {
            name: savedUser.name,
            email: savedUser.email,
            token: accessToken,
            role: savedUser.role
        }

    }



    @Post('login')
    async login(@Body() model: LoginModel): Promise<AuthUserDto> {
        const foundUser = await this.userRepo.findOneBy({ email: model.email })
        if (foundUser && await bcrypt.compare(model.password, foundUser.password)) {
            const payload = { id: foundUser.id, email: foundUser.email, }
            const accessToken = this.jwtService.sign(payload)
            return {
                email: foundUser.email,
                token: accessToken,
                name: foundUser.name,
                role: foundUser.role
            }

        } else {
            throw new HttpException('invalid email or password', HttpStatus.UNAUTHORIZED)
        }
    }




    @Post('forget-password')
    async forgetPassword(@Body() model: ForgetPasswordModel): Promise<boolean> {

        const foundUser = await this.userRepo.findOneBy({ email: model.email })
        if (!foundUser) {
            throw new HttpException('invalid email', HttpStatus.UNAUTHORIZED)
        }
        const deleteExistingOtp = await foundUser.otp
        if (deleteExistingOtp) {
            await this.otpRepo.delete(deleteExistingOtp.id)
        }
        const newOtp = new OTP
        newOtp.userOtp = Math.floor(100000 + Math.random() * 900000).toString()
        console.log(newOtp.userOtp)
        newOtp.userOtp = bcrypt.hashSync(newOtp.userOtp, 10)
        newOtp.user = foundUser
        newOtp.createdAt = new Date()
        newOtp.createdAt.setMinutes(newOtp.createdAt.getMinutes() + 30); // timestamp
        newOtp.createdAt = new Date(newOtp.createdAt)
        // send otp to user email
        // this.sendResetLink(found.email)
        await this.otpRepo.save(newOtp)
        throw new HttpException('success', HttpStatus.OK)
    }



    @Post('reset-password')
    async resetPassword(@Body() model: ResetPasswordModel): Promise<boolean> {

        const user = await this.userRepo.findOneBy({ email: model.email })
        if (!user) {
            throw new HttpException('invalid email', HttpStatus.UNAUTHORIZED)
        }
        const date = new Date()
        const foundOtp = await user.otp
        if (!foundOtp || foundOtp.createdAt < date) {
            throw new HttpException('invalid otp or expired ', HttpStatus.UNAUTHORIZED)
        }

        foundOtp.user.password = bcrypt.hashSync(model.password, 10)
        await this.userRepo.save(foundOtp.user)
        await this.otpRepo.delete(foundOtp.id)
        throw new HttpException('success', HttpStatus.OK)





    }








    // helpers
    // send email ,, email template has to be made yet
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












