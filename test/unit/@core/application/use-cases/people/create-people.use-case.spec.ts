import { CreatePeopleUseCase } from '@application/use-cases'

describe('CreatePeopleUseCase', () => {
  it('Should create a new people', async () => {
    const mockPeopleRepository = {
      create: jest.fn(),
    }

    const createPeopleUseCase = new CreatePeopleUseCase(mockPeopleRepository)

    const peopleData = {
      name: 'Gabriel',
      age: 18,
      profession: 'Software Developer',
    }

    await createPeopleUseCase.run(peopleData)

    expect(mockPeopleRepository.create).toHaveBeenCalledWith(peopleData)
  })
})
