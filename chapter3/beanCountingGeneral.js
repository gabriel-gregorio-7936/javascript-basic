function countChar(string, target) {
    let num = 0;
    for(let counter = 0; counter <= string.length - 1; counter++) {
        if (string[counter] == target) {num++;}
    }
    return num;
}

console.log(countChar('BaGbbGBGGGGg', 'G'));