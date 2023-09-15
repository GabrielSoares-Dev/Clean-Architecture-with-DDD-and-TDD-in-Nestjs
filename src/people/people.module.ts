import { Module } from '@nestjs/common'
import { PeopleService } from './people.service'
import { PeopleController } from './people.controller'
import {
  DynamoDBPeopleRepository,
  DynamoDBPeopleRepositoryModule,
} from '@infra'
import { CreatePeopleUseCase } from '@application'
import type { PeopleRepositoryInterface } from '@domain'

@Module({
  imports: [DynamoDBPeopleRepositoryModule],
  controllers: [PeopleController],
  providers: [
    PeopleService,
    {
      provide: CreatePeopleUseCase,
      useFactory: (peopleRepository: PeopleRepositoryInterface) => {
        return new CreatePeopleUseCase(peopleRepository)
      },
      inject: [DynamoDBPeopleRepository],
    },
  ],
})
export class PeopleModule {}
