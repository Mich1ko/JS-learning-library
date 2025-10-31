const button = document.querySelector('button');

function greet() {
  const number = prompt('Hey fine shyt type your number real quick +63', '');
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `thanks hehe ♥, ${number}!`;
}
button.addEventListener('click', greet);