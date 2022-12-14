import { Column, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carrier } from "./carrier.entity";
import { OTP } from "./otp.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    password: string
    @Column()
    role: string
    @Column()
    terms: boolean

    @OneToOne(() => OTP, (otp) => otp.user)
    @JoinTable()
    otp: Promise<OTP>


    @OneToOne(() => Carrier, (carrier) => carrier.user)
    @JoinTable()
    carrier: Promise<Carrier>
}