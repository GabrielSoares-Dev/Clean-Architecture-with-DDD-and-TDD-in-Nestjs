import type { CreatePeopleDto, PeopleRepositoryInterface } from '@domain/people'

export class CreatePeopleUseCase {
  constructor(private peopleRepository: PeopleRepositoryInterface) {}

  async run(people: CreatePeopleDto) {
    return await this.peopleRepository.create(people)
  }
}
