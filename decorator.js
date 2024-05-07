//In JavaScript, a decorator is a higher-order function that modifies the behavior of a function, method, or class. Decorators are used to extending the functionality of a function, method, or class without modifying its code.

// function add(fn){
//     return function(s){
//         let result = "Hello " + s;
//         fn(result);
//     }
// }

// function print(s){
//     console.log(s);
// }
// const hello = add(print);
// hello("Alok");

let variable = function(target) {
    target.property = 'Hello Alok';
    }
    
 
    @variable('Hello Alok') 
    class NAME
    { }
    
    
    console.log(NAME.property);
    