let arr = [1,3,4,2,6,7,9,1, 8];
let impar=0;
let i = 0;
let len = arr.length;
for (; i < len; i++) {
    (arr[i] % 2)? impar++:false;
}
console.log(impar);