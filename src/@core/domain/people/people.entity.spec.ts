import { People } from '@domain'

describe('People', () => {
  it('Should be make a people', () => {
    const people = {
      name: 'Gabriel',
      age: 18,
      profession: 'Software Developer',
    }
    const result = new People(people.name, people.age, people.profession)

    expect(result.getName).toEqual(people.name)
    expect(result.getAge).toEqual(people.age)
    expect(result.getProfession).toEqual(people.profession)
  })
  it('Should be is invalid age', () => {
    const people = {
      name: 'Gabriel',
      age: 17,
      profession: 'Software Developer',
    }
    const createInvalidAgeInstance = () => {
      new People(people.name, people.age, people.profession)
    }

    expect(createInvalidAgeInstance).toThrow('Invalid age')
  })
})
