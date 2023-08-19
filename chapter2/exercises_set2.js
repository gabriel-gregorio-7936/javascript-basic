const prompt = require("prompt-sync")();
let num = Number(prompt("Pick a number "));

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}


let number = 0;
while (number <=12) {
    console.log(number);
    number = number + 2;
}