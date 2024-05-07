

// var marks = {} 
// marks["Joe"] = 100 
// marks["Ana"] = 90 
// marks["Chloe"] = 95 
// marks["Marie"] = 75 
// console.log(marks) 
// console.log('Another student with'
// 		+ ' name Chloe appears') 
// marks['Chloe'] = 60 
// console.log('After the marks of the'
// 	+ ' fifth student is entered') 
// console.log(marks) 

var marks = {}
marks[Symbol("Joe")] = 100
marks[Symbol("Ana")] = 90
marks[Symbol("Chloe")] = 95
marks[Symbol("Marie")] = 75
console.log(marks)
console.log('Another student with'
    + ' name Chloe appears')
marks[Symbol("Chloe")] = 60
console.log('After the marks of the'
    + ' fifth student is entered')
console.log(marks)
