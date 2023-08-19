function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  Math.floor(integer).toString();

    for(let ix = 0; ix < digits.length; ix++) {
      sum = sum + Number(digits[ix]);
    }
    return sum;
}

console.log(getSumOfDigits(123));