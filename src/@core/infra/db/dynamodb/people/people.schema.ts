import { Schema } from 'dynamoose'

export interface PeopleKey {
  id: string
}

export interface People extends PeopleKey {
  name: string
  age: number
  profession: string
}

export const PeopleSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  profession: {
    type: String,
  },
})
