import { InfraModule } from '@infra'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { PeopleModule } from './people/people.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InfraModule,
    PeopleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
