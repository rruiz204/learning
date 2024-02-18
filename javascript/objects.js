console.log("Topic: Destructuring");

const objectA = {
	integer: 100,
	string: "Pedro Picapiedra",
	booelan: true,
};

const { string } = objectA;
console.log(string);


console.log("Topic: Destructuring in Functions");

const user = {
	name: "mordekai",
	age: 19,
};

function sayHi({ name }) {
	console.log(`Hello ${name}!`);
};
sayHi(user);