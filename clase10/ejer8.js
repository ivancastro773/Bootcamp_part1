let cadena = "hola soy c";

function bIsTrue(cad) {
    let result = cad.split(''); // al string lo convierto en un array por cada letra
    if ('b' == result[result.length-1]) { //comparo si la ultima letra del string es b
        return true;
    }else{
        return false;
    }
}
console.log(bIsTrue(cadena));