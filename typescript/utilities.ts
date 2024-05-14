console.log("Topic: Partial & Required Utils");

interface User {
  username: string;
  email: string;
  password: string;
}

type PartialUser = Partial<User>;

type RequiredUser = Required<PartialUser>;


console.log("Topic: Record Utility");

type FruitPrices = Record<string, number>;

const prices: FruitPrices = {
  apple: 1000, orange: 500, banana: 50
};


console.log("Topic: Pick & Omit Utils");

interface Person {
  name: string;
  age: string;
  email: string;
  direction: string;
}

type BasicInfo = Pick<Person, "name" | "age">;

type ContactInfo = Omit<Person, "name" | "age">;


console.log("Topic: Exclude & Extrct Utils");

type Color = "red" | "blue" | "green";

type ExcludeColor = Exclude<Color, "red">;

type ExtractColor = Extract<Color, "green" | "red">;