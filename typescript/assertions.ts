console.log("Topic: Assertions");

const value: any = "Hello, TypeScript!";
const len: number = (value as string).length;

console.log(len);