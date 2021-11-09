let str = "102 + 17";
const sum = (cadena)=>{
    let total = i = 0;
    let array = cadena.toString().split(" "); //separo los numeros pero son string
    for (i; i < array.length; i++) {
        array[i] = Number(array[i]);
        total = array[0] + array[2];
    }
    return total;
}
console.log(sum(str));