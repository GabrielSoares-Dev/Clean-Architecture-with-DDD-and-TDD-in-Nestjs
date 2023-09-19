import { DynamoDBPeopleRepository } from '@infra/db'
import type { People as PeopleInterfaceModel, PeopleKey } from '@infra/db'
import type { Model } from 'nestjs-dynamoose'

const mockCreate = jest.fn()

describe('DynamoDBPeopleRepository', () => {
  let repository: DynamoDBPeopleRepository
  let mockModel: Model<PeopleInterfaceModel, PeopleKey>

  beforeEach(() => {
    mockModel = {
      create: mockCreate,
    } as any
    repository = new DynamoDBPeopleRepository(mockModel)
  })

  describe('Create', () => {
    it('Should be create a new people', async () => {
      const mockReturn = {
        name: 'John Doe',
        age: 30,
        profession: 'Software Developer',
      }
      mockCreate.mockImplementation(() => ({
        toJSON: jest.fn().mockReturnValue(mockReturn),
      }))

      const result = await repository.create({
        name: 'John Doe',
        age: 30,
        profession: 'Software Developer',
      })

      expect(result).toEqual(mockReturn)
      expect(mockCreate).toHaveBeenCalledTimes(1)
    })
  })
})
