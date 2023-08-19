function countTrue(arr) {
    let count = 0;
    if(arr == []) {count = 0;}
    else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] == true) {count++;}
        }
    }
    return count
}

console.log(countTrue([false, false, false, false]));