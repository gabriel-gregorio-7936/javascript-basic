function matchHouses(step) {
	if(step == 0) {sticks = 0;}
    else if(step == 1) {sticks = 6;}
    else {sticks = 1 + (5 * step);}
    return sticks
}

console.log(matchHouses(4));