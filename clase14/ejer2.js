const numTo10 = num =>{
    let arr = [];
    let i = num;
    let len = 11;
    if (num < 6) {
        for (; i < len; i++) {
            arr.push(i);   
        }
        return arr;
    }else{
        return console.log("Tiene que ser un valor del 1 al 5");
    }
}
console.log(numTo10(5));