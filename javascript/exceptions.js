console.log("Topic: Exceptions");

try {
	console.log("some code that can fail");
} catch (error) {
	console.log("code that will be executed in case the previous one fails");
	console.log(error);
}