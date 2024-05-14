console.log("Topic: InstanceOf Guard");

class Bird {
  fly() {
    console.log("flying...");
  }
}
const pet = new Bird();

if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet it not a bird");
}


console.log("Topic: TypeOf Guard");

let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}