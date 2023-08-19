let beg = 1;
let end = 10;

function range(begg, endd) {
    let array = [];
    for (let count = begg; count <= endd; count++) {
        array.push(count);
    }
    return array;
}

function sum(arrayy) {
    let sumNum = 0;
    for (let i = 0; i <= arrayy.length - 1; i++) {
        sumNum = arrayy[i] + sumNum;
    }
    return sumNum;
}

console.log(sum(range(beg, end)));