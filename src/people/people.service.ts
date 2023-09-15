import { Injectable } from '@nestjs/common'
import { CreateUpdatePeopleDto } from './dto/create-update-people.dto'
import { CreatePeopleUseCase } from '@application'

@Injectable()
export class PeopleService {
  constructor(private readonly createPeopleUseCase: CreatePeopleUseCase) {}

  async create(createPeopleDto: CreateUpdatePeopleDto) {
    return await this.createPeopleUseCase.run(createPeopleDto)
  }

  findAll() {
    return `This action returns all people`
  }

  findOne(id: number) {
    return `This action returns a #${id} person`
  }

  update(id: number, updatePersonDto: CreateUpdatePeopleDto) {
    return `This action updates a #${id} person`
  }

  remove(id: number) {
    return `This action removes a #${id} person`
  }
}
