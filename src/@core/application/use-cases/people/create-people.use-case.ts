import type { CreatePeopleDto, PeopleRepositoryInterface } from '@domain'

export class CreatePeopleUseCase {
  constructor(private peopleRepository: PeopleRepositoryInterface) {}

  async run(people: CreatePeopleDto) {
    return await this.peopleRepository.create(people)
  }
}
