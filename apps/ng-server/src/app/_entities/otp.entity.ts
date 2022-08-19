import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class OTP {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    userOtp: string
    @Column()
    createdAt: Date
    // @Column()
    // userHashOtp: string


    @OneToOne(() => User, (user) => user.otp, { cascade: true, eager: true })
    @JoinColumn()
    user: User
}