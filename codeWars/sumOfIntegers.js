function sumOfIntegersInString(s){
    let r = /\d+/g;
    let sum = 0;
  
    result = s.match(r);

    if (result == null) {
        sum = 0;
    } else if (result != null) {
        for(let i = 0; i <= result.length - 1; i++) {
            sum = sum + Number(result[i]);
        }
    }
    return sum
  }
  
  str = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  
  console.log(sumOfIntegersInString(str));