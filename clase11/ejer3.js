let str = "index.html";
let srt2 = "hola ivan.js";
function extension(cadena) {
    if (cadena.indexOf(".")) {
        let ext = cadena.split(".");
        return ext[1];
    }else{
        return "La cadena no posee un . (punto)";
    }
}
console.log(extension(str));
console.log(extension(srt2));