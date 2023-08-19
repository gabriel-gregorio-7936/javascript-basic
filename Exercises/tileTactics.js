function possibleBonus(a, b) {
    let bool = true;
	if(a >= b) {bool = false;}
    else if(a + 6 >= b ) {bool = true;}
    else {bool = false;}
    return bool
}

console.log(possibleBonus(5, 3));