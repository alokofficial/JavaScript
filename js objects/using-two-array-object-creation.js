//How to create an object from two arrays in javascript

let a = [1, 2, 3, 4];
let b = ["ram", "shyam", "sita", "gita"]

// Checking if the array lengths are same 
// and none of the array is empty
function convertToObj(a, b) {
	if (a.length != b.length || 
		a.length == 0 || 
		b.length == 0) {
		return null;
	}
	let obj = {};

	// Using the foreach method
	a.forEach((k, i) => 
			{ obj[k] = b[i] })
	return obj;
}
console.log(convertToObj(a, b))
