let cad1 = "hola soy";
let cad2 = "ivan castro";

function concatTwoString(str1,str2) {
    let cadena1 = str1.split('');
    let cadena2 = str2.split(''); //convierto los dos string en array
    let removed1 = cadena1.shift(); //elimino los dos primeros elementos(letra).
    let removed2 = cadena2.shift();
    cadena1 = cadena1.join(""); //lo paso nuevamente a string
    cadena2 = cadena2.join("");
    
    return cadena1.concat(' ', cadena2); //concateno los dos string.
    
}
console.log(concatTwoString(cad1,cad2));