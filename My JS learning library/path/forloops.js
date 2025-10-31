//for loops
let i2 = 0;
for (i2 = 0; i2 < 10; i2++) {
    console.log(i2); // prints out
}
console.log(i2); // prints out 10 because i2 declared outside the loop.
console.log('loop finished');

//while loop
// The while loop executes a block of code as long as the specified condition is true.
// The while loop can be used to iterate over a block of code as long as the condition is true.
//let i = 0;
//while (i < 5) {
  //  console.log(i); // prints out 0, 1, 2, 3, 4
    //i++;
//}
console.log(i); // prints out 5 because i declared outside the loop.
console.log('loop finished');

let randomNumber = 0;
while (true) {
    let value = +prompt("Enter a number between 1 and 10: ", '');

    if (!value) break; // if value is 0, null, undefined, NaN, or empty string, break the loop
    
    randomNumber += value; // add the value to the sum

}
alert('Sum:' + randomNumber);

//while loop with array

const names = ['Micx', 'Ald', 'Sean',];

let i = 0
while(i < names.length) {
    console.log(names[i]); // prints out the names in the array
    i++;
}

//Continue to the next iteration of the loop
// The continue statement is used to skip the current iteration of a loop and continue with the next iteration. It can be used in for, while, and do-while loops.
// The continue statement can be used to skip the current iteration of a loop and continue with the next iteration. It can be used in for, while, and do-while loops.

for (let i = 0; i < 10; i++) {
    if (i % 2 == 20) continue; // skip even numbers
    alert(i); // prints out odd numbers only
}
console.log('loop finished');

