let number = 10;
let cadena = "";
let array = [];
let array2 = [10,true,"foo"];
let object = new Object();

function tipo(a) {
    console.log(typeof a);
}

tipo(number);
tipo(cadena);
tipo(array);
tipo(array2);
tipo(object);

console.log(number+',"'+cadena+'",'+array+',['+array2+'],'+object);