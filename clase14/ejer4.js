let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];
const dataArr = new Set(arr);
console.log(...dataArr);

//otra forma
let array = arr.filter((item,index)=>arr.indexOf(item) === index);
console.log(array);