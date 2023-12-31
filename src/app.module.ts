import { EnvironmentConfigModule } from '@infra/config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PeopleModule } from './people/people.module'

@Module({
  imports: [EnvironmentConfigModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
