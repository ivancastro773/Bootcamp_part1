let val1 = 50;
let val2 = 150;
var num = (val1,val2) => (val1==100 || val2==100 ||(val1+val2)==100) ? true:false;
console.log(num(val1,val2));