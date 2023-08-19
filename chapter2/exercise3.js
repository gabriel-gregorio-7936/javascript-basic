let width = 8;
let height = 4;
let string = " ";
let counter1 = 0;
let counter2 = 0;

while (counter1 < height) {
    while (counter2 < width) {
        if (counter2 % 2 == 0) {
            string = string + " ";
        } else if (counter2 % 2 != 0) {
            string = string + "#";
        }
        counter2++;
    }
    string = string + "\n" + string;
    counter1++;
}

console.log(string);