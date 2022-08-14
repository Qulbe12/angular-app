import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { User } from './_entities/user.entity';
import { JwtStrategy } from './_strategies/jwt.strategy';



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


@Module({
  imports: [DBConfig, AccountModule],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule { }
