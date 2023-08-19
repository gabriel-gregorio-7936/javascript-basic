function minimum(a, b) {
    if (a < b) {return a;}
    else if (b < a) {return b;}
    else if (b == a) {return null;}
}

console.log(minimum(2, 6));
console.log(minimum(4, 1));
console.log(minimum(2, 2));