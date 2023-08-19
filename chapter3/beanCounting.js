function countBs(string) {
    let numBs = 0;
    for(let counter = 0; counter <= string.length - 1; counter++) {
        if (string[counter] == "B") {numBs++;}
    }
    return numBs;
}

console.log(countBs('BabbB'));