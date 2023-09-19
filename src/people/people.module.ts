import { Module, forwardRef } from '@nestjs/common'
import { PeopleService } from './people.service'
import { PeopleController } from './people.controller'
import { DynamoDBPeopleRepository } from '@infra/db/dynamodb'
import { DynamoDBPeopleRepositoryModule } from '../@core/infra/db/dynamodb/people/people-repository.module'
import { CreatePeopleUseCase } from '@application/use-cases'
import type { PeopleRepositoryInterface } from '@domain/people'

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
