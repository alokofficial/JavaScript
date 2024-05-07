//Convert URL parameters to a JavaScript Object

//using replace() method

let search = 'https://www.google.com/search?para=10&x=7&y=9';
console.log(search);
search = search.split('?')[1];

function WEB_Fun() {
	console.log('{"' + decodeURI(search)
		.replace(/"/g, '\\"').replace(/&/g, '","')
		.replace(/=/g, '":"') + '"}');
}
WEB_Fun()
