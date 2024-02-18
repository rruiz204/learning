console.log("Topic: Conditions");

if (12 < 6 && true) console.log("Trust me man xd");


console.log("Topic: Logical Operators");

console.log("AND = &&");
console.log("OR = ||");
console.log("NOT = !(expression)");

let hidden = true;
function visibility() {
	hidden = !hidden;
};


console.log("Topic: Ternary Operator");

const input = {
	border: null,
	errors: [],
}

input.border = (input.errors.length > 0) ? "red" : "green";