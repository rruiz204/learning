import { faker } from "@faker-js/faker"

const CharacterFactory = () => {
  return {
    name: faker.person.fullName(),
    birthday: faker.date.birthdate(),
    gender: faker.person.sex(),
  }
}

const charater = CharacterFactory();
console.log(charater);