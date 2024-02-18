console.log("Topic: Interfaces");

interface Pokemon {
	readonly name: string;
	readonly typeA?: string;
	readonly typeB?: string;
}

const metapod: Pokemon = {
	name: "Metapod",
	typeA: "Bug",
}


console.log("Topic: Interfaces with Functions");

function sum(a: number, b: number): void {
	console.log(a + b);
}
sum(12, 12);


console.log("Topic: Interfaces with Methods");

interface Operation {
	sum: (a: number, b: number) => number;
	divide: (a: number, b: number) => number;
}

const calculator: Operation = {
	sum: (a, b) => a + b,
	divide: (a, b) => a / b,
}


console.log("Topic: Extend Interfaces");

interface Animal {
  type: string;
}

interface Pet extends Animal {
  name: string;
}

const perry: Pet = {
	type: "Land",
	name: "Perry",
}


