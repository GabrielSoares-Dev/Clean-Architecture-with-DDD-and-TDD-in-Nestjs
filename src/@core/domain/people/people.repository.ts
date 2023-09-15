import type { CreatePeopleDto } from '@domain'
export interface PeopleRepositoryInterface {
  create(people: CreatePeopleDto): Promise<CreatePeopleDto>
}
