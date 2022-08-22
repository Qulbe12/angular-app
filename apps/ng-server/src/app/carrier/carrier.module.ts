import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrier } from '../_entities/carrier.entity';
import { User } from '../_entities/user.entity';
import { CarrierController } from './carrier.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Carrier])],
  controllers: [CarrierController],
})
export class CarrierModule { }
