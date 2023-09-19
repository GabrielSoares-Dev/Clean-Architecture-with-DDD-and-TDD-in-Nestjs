import { DynamooseModule } from 'nestjs-dynamoose'
import { Module } from '@nestjs/common'
import { EnvironmentConfigModule } from '@infra/config/environment/environment.module'

@Module({
  imports: [
    EnvironmentConfigModule,
    DynamooseModule.forRoot({
      local: process.env.DYNAMODB_URL,
    }),
  ],
})
export class DynamodbConfigModule {}
