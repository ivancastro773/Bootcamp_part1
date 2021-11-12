/* let arr = [1,2,3,45,78,3,57];
let r = arr.map((item,id)=>{
   return (item==3)? console.log(id):false;
});
 */
/* /*en que posicion tengo los tipo string */
let arr = ["1","2",3,45,"78",3,"57", 100, 120];

//FOR
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
        console.log([i]);
    }
}
//MAP
let r = arr.map((item,id)=>{
    return (typeof item == "string")? console.log(id):false;
})
//WHILE
let j = 0;
while (j<arr.length) {
    j++;
    if (typeof arr[j] =="string") {
        console.log(arr.indexOf(arr[j]));
    }
}

//decreciente
for (let i = arr.length; i >=0; i--) {
    if (typeof arr[i] == "string") {
        console.log([i]);
    }
}
j=arr.length;
while (j>=0) {
    j--;
    if (typeof arr[j] =="string") {
        console.log(arr.indexOf(arr[j]));
    }
}
