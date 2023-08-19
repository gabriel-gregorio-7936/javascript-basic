function shiftToLeft(x, y) {
    let sum = 1;
    let total = 0;
	for(let i = 1; i <= y; i++) {
        sum *= 2;
    }
    total = x * sum;
    return total
}

console.log(shiftToLeft(5, 2));