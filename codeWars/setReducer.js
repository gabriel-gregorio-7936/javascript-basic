function setReducer(input) {
    let counts = [];
    let x = 0;

    input.forEach(function (input) {counts[x] = (counts[x] || 0) + 1; });

    return counts











/*
    if (input.length() == 1) {
        return input[0]
    } else {
        for(let i = 0; i < input.length(); i++) {
            for(let j = 0; j < input.length(); j++) {
                if (input[j] == input[j - 1]) {
                    counter++;
                } else {
                    counter = 1;
                }
            }
            array.push(counter);
            counter = 0;
        }
        return array
    }
*/
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));