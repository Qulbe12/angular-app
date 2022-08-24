import { Body, Controller, HttpException, HttpStatus, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

    constructor(

        @InjectRepository(Carrier) private carrierRepo: Repository<Carrier>,
        @InjectRepository(User) private userRepo: Repository<User>,
    ) { }



    @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Body() model: CarrierProfileModel, @Request() req): Promise<ResetStatus> {

        const user = await this.userRepo.findOneBy({ id: req.user.id })
        const carrier = await user.carrier
        if (carrier) {
            throw new HttpException('carrier already exists', HttpStatus.BAD_REQUEST)
        }
        const isEmailNotAvailable = await this.carrierRepo.findOneBy({ email: model.email })
        if (isEmailNotAvailable) {
            throw new HttpException('email already taken , enter other email ', HttpStatus.BAD_REQUEST)
        }
        const newCarrier = this.carrierRepo.create(model)
        newCarrier.user = Promise.resolve(req.user as User)
        await this.carrierRepo.save(newCarrier)
        return { status: 'ok' }
    }
    @UseGuards(JwtAuthGuard)
    @Post('upload')
    upload() {
        console.log("hits")
    }
    // @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
    // uploadSingle(@UploadedFile() file) {
    //     console.log(file);
    //     throw new HttpException('success', HttpStatus.OK)
    // }







}
