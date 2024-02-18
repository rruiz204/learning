console.log("Topic: Callbacks");

const data = {
	username: "Ragnar",
	posts: [],
	stars: 0,
}

function callback(response) {
	const { username, posts, stars } = response;
	console.log(username, posts, stars);
}

function request(data, call) {
	setTimeout(() => {
		call(data);
	}, 1000);
}

request(data, callback);