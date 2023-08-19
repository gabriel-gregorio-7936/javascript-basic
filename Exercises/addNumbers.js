function addUp(limit) {
    let sum = 0;
    for(let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum
}

console.log(addUp(600));