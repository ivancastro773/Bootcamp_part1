let str = "index.html";
let srt2 = "hola ivan.js";
function extension(cadena) {
    if (cadena.indexOf(".")) { //pregunto si la cadena tiene extension
        let ext = cadena.split(".");
        return ext[1];
    }else{
        return "La cadena no posee una extension";
    }
}
console.log(extension(str));
console.log(extension(srt2));