export default class People {
  private name: string
  private age: number
  private profession: string

  constructor(name: string, age: number, profession: string) {
    this.name = name
    this.validateAge(age)
    this.age = age
    this.profession = profession
  }

  get getName(): string {
    return this.name
  }

  set setName(name: string) {
    this.name = name
  }

  get getAge(): number {
    return this.age
  }

  set setAge(age: number) {
    this.validateAge(age)
    this.age = age
  }

  get getProfession(): string {
    return this.profession
  }

  set setProfession(profession: string) {
    this.profession = profession
  }

  private validateAge(age: number) {
    const isInvalidAge = age < 18

    if (isInvalidAge) throw new Error('Invalid age')
  }
}
