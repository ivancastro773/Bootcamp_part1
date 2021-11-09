let str = "102 + 17";
const sum = (cadena)=>{
    let total = i = 0;
    let array = cadena.toString().split(" "); //separo los numeros pero son string
    let len = array.length;
    for (; i < len; i++) {
        array[i] = Number(array[i]);
        total = array[0] + array[2]; // 102 + 17 
    }
    return total;
}
console.log(sum(str));