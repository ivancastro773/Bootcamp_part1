const sum = (num)=>{
    let array = [];
    let total = 0;
    let i = 0;
    array = num.toString().split(""); //separo los numeros pero son string
    for (i; i < array.length; i++) {
        array[i] = Number(array[i]); //convierto el string en numero
        total = total +array[i];
    }
    return total;
}
console.log(sum(123));