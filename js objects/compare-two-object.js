//How to compare two objects to determine the first object contains equivalent property values to the second object in JavaScript ?

//using for in loop

let obj1 = { name: "John", age: 30 , address:"pune" };
let obj2 = { name: "John", age: 30 };
function compareObjects(obj1, obj2) {
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(compareObjects(obj1, obj2))