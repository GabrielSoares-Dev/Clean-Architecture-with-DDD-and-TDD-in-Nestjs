import type { CreatePeopleDto } from '@domain/people'
export interface PeopleRepositoryInterface {
  create(people: CreatePeopleDto): Promise<CreatePeopleDto>
}
