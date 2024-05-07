//How to check if the provided value is an object created by the Object constructor in JavaScript 

function isObjectInstanceof(value) {
	return value instanceof Object;
}

// Test cases
const object1 = {};
const object2 = new Object();
const array = [];
const date = new Date();
// const number = 42;
const number=new Number(42);
// const string = "hello";
const string=new String("hello");

console.log(isObjectInstanceof(object1)); 
console.log(isObjectInstanceof(object2)); 
console.log(isObjectInstanceof(array)); 
console.log(isObjectInstanceof(date)); 
console.log(isObjectInstanceof(number)); 
console.log(isObjectInstanceof(string));
// false (numbers are not objects)
