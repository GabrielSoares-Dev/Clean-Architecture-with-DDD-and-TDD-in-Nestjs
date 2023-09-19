import { InjectModel, Model } from 'nestjs-dynamoose'
import { PeopleRepositoryInterface, People } from '@domain/people'
import type { CreatePeopleDto } from '@domain/people'
import type { People as PeopleInterfaceModel, PeopleKey } from '@infra/db'

export class DynamoDBPeopleRepository implements PeopleRepositoryInterface {
  constructor(
    @InjectModel('People')
    private readonly peopleModel: Model<PeopleInterfaceModel, PeopleKey>,
  ) {}

  async create(people: CreatePeopleDto): Promise<CreatePeopleDto> {
    const peopleData = new People(
      people.name,
      people.age,
      people.profession,
    ).toObject()

    return (
      await this.peopleModel.create(peopleData)
    ).toJSON() as CreatePeopleDto
  }
}
