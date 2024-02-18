console.log("Topic: Async & Await");

const pokeapi = "https://pokeapi.co/api/v2/pokemon/";

const options = {
	method: "GET",
	headers: { "Content-Type": "application/json" }
}

async function getUrls() {
	const response = await fetch(pokeapi, options);
	const data = await response.json();
	console.log(data);
}

getUrls();