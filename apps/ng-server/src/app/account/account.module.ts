import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../_entities/user.entity';
import { AccountController } from './account.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from '../_strategies/jwt.strategy';
@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({ secret: jwtConstant })],
  controllers: [AccountController],
})
export class AccountModule { }
