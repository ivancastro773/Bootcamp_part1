const sum = (num)=>{
    let total = i = 0;
    let array = num.toString().split(""); //separo los numeros pero son string
    for (i; i < array.length; i++) {
        array[i] = Number(array[i]); //convierto el string en numero
        total = total +array[i];
    }
    return total;
}
console.log(sum(1231));