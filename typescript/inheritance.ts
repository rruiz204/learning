interface IAnimal {
  name: string;
  sound(arg: string): void;
}

class Animal implements IAnimal {
  constructor(
    public name: string
  ) {}

  sound(arg: string): void {
      console.log(arg);
  }
}


class Dog extends Animal {
  constructor (name: string, public breed: string) {
    super(name);
  }

  sound(arg: string = "buau"): void {
    console.log(arg);
  }
}