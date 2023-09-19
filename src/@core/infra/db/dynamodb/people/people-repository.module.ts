import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import {
  DynamoDBPeopleRepository,
  PeopleSchema,
  DynamodbConfigModule,
} from '@infra'

@Module({
  imports: [
    DynamodbConfigModule,
    DynamooseModule.forFeature([
      {
        name: 'People',
        schema: PeopleSchema,
        options: { tableName: 'peoples' },
      },
    ]),
  ],
  providers: [DynamoDBPeopleRepository],
  exports: [DynamoDBPeopleRepository],
})
export class DynamoDBPeopleRepositoryModule {}
