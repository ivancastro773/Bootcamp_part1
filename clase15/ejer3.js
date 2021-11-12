let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPar=num=>(num%2==0) ? num :false;
let filtered = arr.filter(num => isPar(num));
console.log(filtered);