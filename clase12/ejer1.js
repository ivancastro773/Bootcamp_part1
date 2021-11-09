const sum = (num)=>{
    let total=0,i = 0;
    let array = num.toString().split(""); //separo los numeros pero son string
    let len=array.length;
    for (; i < len; i++) {
        array[i] = Number(array[i]); //convierto el string en numero
        total = total +array[i];
    }
    return total;
}
console.log(sum(1231));