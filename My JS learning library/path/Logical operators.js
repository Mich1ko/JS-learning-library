// logical operators used to manipulate boolean values 

let ages = 17;

if (ages <= 18 || ages >= 0) {
    console.log("You are still a minor bozo")
}
else if (ages >= 18) {
    console.log("You are an adult now")
}
else {
    console.log("You are a minor bozo")
}

// && operator

const age1 = 55;

if (age1 <= 18) {
    console.log("You are a Adult now")
}

else if (age1 >= 30 && age1 <= 59) {
    console.log("You are a middle aged person now")
}
    
else if (age1 >= 60) {
    console.log('You are a senior citizen now')
}

else {
    console.log("You are a still a minor/teenager bozo")
}

// Nullish operator ??
// The nullish operator is used to check if a variable is null or undefined

let bankAccount;
console.log(bankAccount ?? "No bank account found"); // prints out "No bank account found"

