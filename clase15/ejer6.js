const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const reducer = (past, next) => past.concat(next);
console.log(data.reduce(reducer));