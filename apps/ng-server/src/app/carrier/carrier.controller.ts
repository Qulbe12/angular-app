import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrierProfileModel, ResetStatus } from '@trucks/core-shared';
import { ICarrierService } from '@trucks/ng-services';

import { Repository } from 'typeorm';
import { Carrier } from '../_entities/carrier.entity';
import { User } from '../_entities/user.entity';
import { JwtAuthGuard } from '../_strategies/jwt.strategy';

@ApiBearerAuth()

@Controller('carrier')
export class CarrierController implements ICarrierService {

    constructor(@InjectRepository(Carrier) private carrierRepo: Repository<Carrier>) { }



    @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Body() model: CarrierProfileModel, @Request() req): Promise<ResetStatus> {

        const newCarrier = this.carrierRepo.create(model)
        newCarrier.user = req.user as User
        await this.carrierRepo.save(newCarrier)

        return { status: 'ok' }
    }







}
