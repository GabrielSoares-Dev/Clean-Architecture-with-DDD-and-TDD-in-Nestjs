import { DynamooseModule } from 'nestjs-dynamoose'
import { Module } from '@nestjs/common'

@Module({
  imports: [DynamooseModule.forRoot({ local: process.env.DYNAMODB_URL })],
})
export class DynamodbModule {}
