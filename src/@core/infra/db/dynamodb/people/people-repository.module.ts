import { Module } from '@nestjs/common'
import { DynamooseModule } from 'nestjs-dynamoose'
import { PeopleSchema } from '@infra'

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'People',
        schema: PeopleSchema,
        options: { tableName: 'peoples' },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DynamoDBPeopleRepositoryModule {}
