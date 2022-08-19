import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../_entities/user.entity';
import { AccountController } from './account.controller';

import { jwtConstant } from '../_strategies/jwt.strategy';
import { JwtModule } from "@nestjs/jwt";
import { OTP } from '../_entities/otp.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, OTP]),
  JwtModule.register({ secret: jwtConstant })],
  controllers: [AccountController],
})
export class AccountModule { }
