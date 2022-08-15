import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { User } from './_entities/user.entity';
import { JwtStrategy } from './_strategies/jwt.strategy';
import { MailerModule } from '@nestjs-modules/mailer';


const DBConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'truck-app',
  entities: [User],
  synchronize: true,
})

const mailerConfig = MailerModule.forRoot({
  transport: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: 'a7beaf47d739fe',
      pass: '8e5d886f51cc65',
    },

  },
})

@Module({
  imports: [DBConfig, AccountModule, mailerConfig],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule { }
