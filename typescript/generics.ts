console.log("Topic: Generics");

function identifier <Type> (argument: Type): void {
	const type = typeof argument;
	console.log(`The type of the argument is ${type}`);
}

identifier <number> (10);