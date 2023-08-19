str = "GhBnsmBksfsBfssB";
let counter = 0;

function countBs(str) {
    let index = str.indexOf("B");
    while (index != -1) {
        let newstr = str.slice(0, index) + str.slice(index + 1);
        
        counter += 1;
        str = newstr;
        index = str.indexOf("B");
    }
    return counter;
} 

console.log(countBs(str));