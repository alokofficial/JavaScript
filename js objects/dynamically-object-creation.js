//using Spread method

const obj1={
    name:"Alok",}

const obj2={
    age:26,}

const obj3={
    address:"Bangalore",}
const mergeObj={...obj1,...obj2,...obj3}
console.log(mergeObj);