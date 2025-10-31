//data types part 1
let number = 10; // number
let numbers = [2, 4, 6, 8, 10] // number of array
let user = "Michiko"; // string you can use single or double quotes
let user2 = 'Mich' // single quote string
let iAmPro = true; // boolean
let myArray = [1, 2, 3, 4, 5]; // array

let random = myArray.Join("-"); // join the array with a string
console.log(random); // prints out the array with a string

//alert (`this is a number of array:, ${numbers}! `); 

//part2
const person = {
    name: "Michiko",
    lastName: "unknown",
    age: 15,
    isStudent: true,
    nationality: "Filipino",
    hobbies: ["programming", "gaming", "watching movies/anime"]
};

const bigInt = 1234567891011121314151617181920n; 
console.log(person.name, person.lastName, person.age, person.isStudent, person.nationality, person.hobbies);
console.log(number * 2); // prints out 20


//typeof operator
// typeof operator is used to check the type of a variable
console.log(typeof person.name);

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//Interaction alert, prompt, confirm
// prompt:
let age = prompt("Enter your age: ",  15);
alert(`You are ${age} years old!`); // prints out the age of the user

