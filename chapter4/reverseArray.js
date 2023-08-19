function reverseArray(arrayy) {
    let array2 = []
    for (let i = 0; i <= arrayy.length - 1; i++) {
        array2.unshift(arrayy[i]);
    }
    return array2;
}

function reverseArrayInPlace(arrayy) {
    let member = 0;
    for (let i = 0; i <= arrayy.length - 1; i++) {
        member = arrayy.pop(arrayy[i]);
        arrayy.push(member);
    }
    return arrayy;
}

let array = [1, 2, 3, 4];

console.log(reverseArray(array));

let array2 = [2, 3, 4, 6]

console.log(reverseArrayInPlace(array2));