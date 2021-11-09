let str = "102 + 17";
const sum = (cadena)=>{
    let array = [];
    let total = 0;
    let i = 0;
    array = cadena.toString().split(" "); //separo los numeros pero son string
    for (i; i < array.length; i++) {
        array[i] = Number(array[i]);
        total = array[0] + array[2];
    }
    return total;
}
console.log(sum(str));