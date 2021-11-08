let cadena = "hola soy b";
function bIsTrue(cad) {
    let result = cad.split(''); // al string lo convierto en un array por cada letra
   return ('b' == result[result.length-1]) ? true : false; //comparo si la ultima letra del string es b
}
console.log(bIsTrue(cadena));