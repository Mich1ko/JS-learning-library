//If statements
//An if statement in JavaScript is a control flow statement that lets you execute a block of code only if a specific condition is true. It is used to make decisions in your code.

//let birthdate = prompt('When was I born? (MM/DD/YYYY)', '');
//if (birthdate == '2010')
//    alert('Correct!');

//else if (birthdate == '2011') {
//    alert('Almost correct!');
//}

// else  {
//     alert('Incorrect!');
// }

// let year = prompt('What year is it? (YYYY)', '');
// if (year < 2025) {
//     alert('Your behind 😂')
// }
// else if (year > 2025) {
//     alert('Your ahead buddy 😳')
// }
// else {
//     alert('Your right on time!')
// }

// let guessAge 
// let age =  prompt('How old am I? (number)', '');

// if (age > 15) {
//     guessAge = true;
// }    else {
//         guessAge = false;
//     }
// alert(guessAge);

// ? Ternary operator
// ? Ternary operator is a shorthand for if-else statements

//let accessAllowed = (age > 18) ? true : false; // if age is greater than 18, accessAllowed is true, otherwise false
//alert(accessAllowed); // prints out true or false depending on the age of the user

//let age1 = prompt('age?', 18);

//let message = (age1 < 3) ? 'Youre too young' : 
 //   (age < 18) ? 'Hi teenager' :
//    (age < 100) ? 'Your an adult' : 
//    'What unusual age';
//alert(message); // prints out the message depending on the age of the user
const password = prompt('Enter your password', '');
if (password.length >= 12) {
    alert("Wow thats a strong password!")
}
else if (password.length >= 8) {
    alert("your password is not long enough 😒")
}
else {
    alert("Your password is too short 😡")
}

const size = prompt('what is the size of your 😏 (In inches.)', '');
if (size >= 12) {
    alert("You have a monster 😳")
}
else if (size >= 6) {
    alert("You have a decent size 😏")
}
else if (size >= 3) {
    alert("You have a small size 😒")
}
else {
    alert("Bro has a micro 😂")
}

// const age = prompt("Enter your age: ",  15);
// if(age >= 0) {
//     alert("You are still a minor")
// }
// else if (age >= 14) {
//     alert("You are a teenager")
// }
// else if (age >= 18) {
//     alert("You are an adult now")
// }
// alert(`You are ${age} years old!`);