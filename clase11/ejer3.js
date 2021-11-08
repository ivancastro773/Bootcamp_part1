let str = "index.html";

function extension(cadena) {
    let ext = cadena.split(".");
    return ext[1];
}
console.log(extension(str));