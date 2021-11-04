var reporte="lorem ipsum scammer simply laboris sit amet";
//transformo el string en un array.
var cadena = reporte.split(' '); 
var numeroVocales; 
var cadenaFinal;

for (let i = 0; i < cadena.length; i++) {
    //realizo los reemplazos que pide el ejercicio.
    cadena[i] = cadena[i].replace(/a/g,"x");
    cadena[i] = cadena[i].replace(/[eiou]/g,(match) => match.toUpperCase());
    cadena[0] = cadena[0].replace(/l/g,"L");
    cadena[cadena.length-1] = cadena[cadena.length-1].replace(/t/g,"@");
}
//transformo el array en un string.
cadenaFinal = cadena.join(" ");
//cuento cuantas vocales tiene el string.
numeroVocales = cadenaFinal.match(/[aeiou]/gi).length;
console.log(cadenaFinal);
console.log(numeroVocales);