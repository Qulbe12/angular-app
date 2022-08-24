import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Carrier {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    licenseType: string
    @Column()
    licenseNo: string
    @Column()
    companyName: string
    @Column()
    title: string
    @Column()
    stateOperational: string;
    @Column()
    paymentOption: string
    @Column()
    email: string
    @Column()
    address: string
    @Column()
    cellNo: string
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


    @OneToOne(() => User, (user) => user.carrier, { cascade: true })
    @JoinColumn()
    user: Promise<User>
}
