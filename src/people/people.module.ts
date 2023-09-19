import { Module, forwardRef } from '@nestjs/common'
import { PeopleService } from './people.service'
import { PeopleController } from './people.controller'
import { DynamoDBPeopleRepository } from '@infra'
import { DynamoDBPeopleRepositoryModule } from '../@core/infra/db/dynamodb/people/people-repository.module'
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
