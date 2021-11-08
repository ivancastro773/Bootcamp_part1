let cadena = "hola soy ivan castro";
let i = 0;
let j = 1;
let cantLetter = 3;
let newCadena = [];
function bIsTrue(cad) {
    if (cadena.length > 6) {
        let word = cad.split(' '); // al string lo convierto en un array por cada palabra
        let final = word.join('').split(''); //array separado por letras y sin espacios
    
        for (i; i < cantLetter; i++) {
            newCadena.push(final[i]); //primeras 3 letras
        }
        for (j; j <= cantLetter; j++) {
            newCadena.push(final[final.length-j]); //ultimas 3 letras
        }
        let newString = newCadena.join(""); //paso el array a string
        return newString 
    }else{
        return "la cadena debe contener mas de 6 caracteres"
    }
}
console.log(bIsTrue(cadena));