// const array1=[1,2,3,4,5]
// const array2=[6,7,8,9,10]
// const finalArray=array1.concat(array2)
// // console.log(finalArray)
// const finalArray2=[...array1,...array2]
// console.log(finalArray2)


// Equality and sameness in cloning array

const oldArray = ["dog1", "dog2", "dog3"];

const clonedArray = [...oldArray];
const newArray = oldArray;

// False, i.e. shallow copy
console.log(clonedArray === oldArray)

// True, i.e. deep copy
console.log(newArray === oldArray)
