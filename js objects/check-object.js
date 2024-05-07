//How to check if a value is object-like in JavaScript ?

//typeof variableName

let p="alok"
let a=20;
let b=true;
let c=null; //null is also an object
let d=undefined;
// console.log(typeof p)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)

// let k = { Name: 'gfg', Country: 'India' };
// let k0 = new Set()
// let k1 = [1, 2, 3];
// let k2 = "hello";
// let k3 = null;
// let k4 = undefined;

//instanceof operator

// console.log(k instanceof Object);
// console.log(k0 instanceof Object);
// console.log(k1 instanceof Object);
// console.log(k2 instanceof Object);
// console.log(k3 instanceof Object);
// console.log(k4 instanceof Object);

//constructor typeof
let k = { Name: 'gfg', Country: 'India' };
let k0 = new Set()
let k1 = [1, 2, 3];
let k2 = "hello"; 

console.log(k.constructor === Object)
console.log(k0.constructor === Set)
console.log(k1.constructor === Array)
console.log(k2.constructor === String)
