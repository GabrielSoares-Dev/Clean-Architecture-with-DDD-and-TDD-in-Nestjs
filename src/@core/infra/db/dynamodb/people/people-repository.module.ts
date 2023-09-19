import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import { DynamoDBPeopleRepository, PeopleSchema } from '@infra/db'
import { DynamodbConfigModule } from '@infra/config'

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
