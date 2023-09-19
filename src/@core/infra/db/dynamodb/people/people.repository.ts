import { InjectModel, Model } from 'nestjs-dynamoose'
import { PeopleRepositoryInterface, People } from '@domain'
import { Injectable } from '@nestjs/common'
import type { CreatePeopleDto } from '@domain'
import type { People as PeopleInterfaceModel, PeopleKey } from '@infra'

export class DynamoDBPeopleRepository implements PeopleRepositoryInterface {
  constructor(
    @InjectModel('People')
    private peopleModel: Model<PeopleInterfaceModel, PeopleKey>,
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
