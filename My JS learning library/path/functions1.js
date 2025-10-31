//function declaration
function greet() {
    console.log("Hello, World!");
}


let game = 'GTA6';
function gameMessage() {
    let message = 'Releasing in May 26, 2026 - ' + game;
    console.log(message); // prints out thanks for playing GTA6
}
greet(); // prints out Hello, World!
gameMessage(); // prints out Releasing in May 26, 2026 - GTA6

// arguments and parameters

const talk = function(name, age) {
    console.log("I'm ${name} and I'm ${age} years old.");
}

talk('John', 14); // prints out I'm John and I'm 14 years old.

function showMessage(from, text) {
    from = '*' + from + '*'; // add asterisks to the beginning and end of the name

    alert(from + ': ' + text); // show the message in an alert box
}

let text = "Whats good";
let from = "Michiko";
alert(from + ':' + text); // prints out Michiko: Whats good)
// OR 
//let from = "Michiko";
//alert(from, "Hello!"); // prints out Michiko: Hello!

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
})
  




