import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DynamooseModule } from 'nestjs-dynamoose'

@Module({
  imports: [DynamooseModule.forRoot({ local: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
