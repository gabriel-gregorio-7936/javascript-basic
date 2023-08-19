function minMax(arr) {
    let solution = []
	solution.push(Math.min(...arr));
    solution.push(Math.max(...arr));
    return solution
}

console.log(minMax([1, -2, 3, 47, 5, 6]));