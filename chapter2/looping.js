const prompt = require("prompt-sync")();
let number = 0;

while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}

console.log(result);

let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName)
console.log(yourName);