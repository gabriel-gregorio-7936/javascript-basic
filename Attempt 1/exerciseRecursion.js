function isEven (a) {
    if (a < 0) {
        console.log("Enter a number higher or equal to 0.");
    } else {
        if (a == 0) {
            console.log("True");
        } else if (a == 1) {
            console.log("False");
        } else {
            isEven(a - 2);
        }
    }
}

isEven(75);