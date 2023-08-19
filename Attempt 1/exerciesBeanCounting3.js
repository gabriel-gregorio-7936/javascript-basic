let str = "GhBnsmBksfsBfssB";
let target = "s";
let counter = 0;

function countChar(str, target) {
    let index = str.indexOf(target);
    while (index != -1) {
        let newstr = str.slice(0, index) + str.slice(index + 1);
        
        counter += 1;
        str = newstr;
        index = str.indexOf(target);
    }
    return counter;
} 

console.log(countChar(str, "f"));