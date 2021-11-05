let cadena = "hola soy ivan castro";
function bIsTrue(cad) {
    if (cadena.length > 6) {
        let word = cad.split(' '); // al string lo convierto en un array por cada palabra
        let letter = word.join(''); //uno el string sin espacios.
        let final = letter.split(''); //convierto al array donde los elementos son los las letras
        let newCadena = [];

        newCadena.push(final[0]);      //meto en el array las 3 primeras y 3 ultimas letras
        newCadena.push(final[1]);
        newCadena.push(final[2]);
        newCadena.push(final[final.length-3]);
        newCadena.push(final[final.length-2]);
        newCadena.push(final[final.length-1]);
        let newString = newCadena.join(""); //paso el array a string
        
        return newString
    }else{
        return "la cadena debe contener mas de 6 caracteres"
    }
}
console.log(bIsTrue(cadena));