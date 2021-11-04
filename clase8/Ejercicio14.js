var array = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"];
var result;
for (let i = 0; i < array.length; i++) {
    if (array[i] == "laboris") {
        //convierto el "laboris" en mayusculas
        result = array[i].toUpperCase();
        //le asigno el "LABORIS" en la misma posicion.
        array[i] = result;
    }
}

console.log(array);