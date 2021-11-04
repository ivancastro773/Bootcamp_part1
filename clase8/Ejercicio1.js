var number = 10;
var cadena = "";
var array = [];
var array2 = [10,true,"foo"];
var object = new Object();

function tipo(a) {
    console.log(typeof a);
}

tipo(number);
tipo(cadena);
tipo(array);
tipo(array2);
tipo(object);

console.log(number+',"'+cadena+'",'+array+',['+array2+'],'+object);