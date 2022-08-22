import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Carrier {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    licenceType: string
    @Column()
    licenceNo: string
    @Column()
    companyName: string
    @Column()
    title: string
    @Column()
    stateOperational: string;
    @Column()
    paymentOption: string
    @Column()
    companyEmail: string
    @Column()
    address: string
    @Column()
    companyCellNo: string
    @Column()
    workNo: string
    @Column()
    insuranceCertFile: string
    @Column()
    insuranceAgent: string
    @Column()
    licenseLetterFile: string
    @Column()
    drivingLicFrontFile: string
    @Column()
    drivingLicBackFile: string
    @Column()
    w9FormFile: string
    @Column()
    goalDesc: string

    @OneToOne(() => User, (user) => user.carrier, { cascade: true, eager: true })
    @JoinColumn()
    user: User
}