console.log("Topic: Promises");

const server = {
	users: [
		{ username: "Shifu" },
		{ username: "Po" },
		{ username: "Tai Long" },
	],
};

function getUser(username) {
	return new Promise((resolve, reject) => {
		const foundUser = server.users.find((user) => user.username === username);

		if (foundUser) resolve(foundUser);
		else reject("404");
	})
}

getUser("Tai Long")
	.then((response) => console.log(response))
	.catch((error) => console.log(error));