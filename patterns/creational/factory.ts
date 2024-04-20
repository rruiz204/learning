interface ICharacter {
  name: string;
  age: number;
  gender: string;
}

const CharacterFactory = (name?: string, age?: number, gender?: string): ICharacter => {
  return {
    name: name || "test name",
    age: age || 28,
    gender: gender || "M"
  }
}

const character1 = CharacterFactory("marco", 19, "M");
console.log(character1.name);

const character2 = CharacterFactory();
console.log(character2.name);