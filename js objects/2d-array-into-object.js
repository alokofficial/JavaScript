//How to convert two-dimensional array into an object in JavaScript ?

//using Array.forEach

// const twoDArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   const obj = {};

//   twoDArray.forEach(row => {
//     row.forEach(col => {
//       obj[col] = col;
//     });
//   });

//   console.log(obj)


  // using Array.flatten

//   const twoDArray1 = [
//     [1, 2, 3],  
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   const obj1 = {};

//   function flatten(arr) {
//     return arr.reduce((acc, val) => acc.concat(val), []);
//   }

//   console.log(flatten(twoDArray1))
 //using Array.flat
  arr=[[1,2,3],[4,5,6],[7,8,9]]
  arr=arr.flat()

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }

  console.log(obj)

//   console.log(arr.flat())
