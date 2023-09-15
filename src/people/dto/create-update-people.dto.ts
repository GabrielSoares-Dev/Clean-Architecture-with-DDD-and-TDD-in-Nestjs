import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateUpdatePeopleDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  age: number

  @IsNotEmpty()
  @IsString()
  profession: string
}
