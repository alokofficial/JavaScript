//How to remove duplicates from an array of objects using JavaScript ?

//Converting the array to a Set to remove the duplicates

function removeDuplicates() {
  // Create an array of objects
  books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
  ];

  jsonObject = books.map(JSON.stringify);
  console.log(jsonObject);
  uniqueSet = new Set(jsonObject);
  console.log(uniqueSet);
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  console.log(uniqueArray);
}
removeDuplicates();

// Using filter() and includes() Method
const books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

const ids = books.map( title => title);
const filtered = books.filter(
  ({ title }, index) => !ids.includes(title, index + 1)
);

console.log(filtered);
