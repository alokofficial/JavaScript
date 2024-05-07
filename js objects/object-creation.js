// with constructor

// Simple function
function vehicle(name,maker,engine){
	this.name = name;
	this.maker = maker;
	this.engine = engine;
}
// New keyword to create an object
let car = new vehicle('GT','BMW','1998cc');
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);

// Adding property to the object
let car1 = {
	name : 'GT',
	maker : 'BMW',
	engine : '1998cc'
};
// Adding property to the object
car1.brakesType = 'All Disc';
console.log(car1);


// using Object.create
const coder = {
	isStudying : false,
	printIntroduction : function(){
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
	}
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();


// Using es6 classes
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    }
    
    let car1 = new Vehicle('GT', 'BMW', '1998cc');
    
    console.log(car1.name); //GT
    