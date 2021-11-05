let firstArray = ["hola","soy"];
let secondArray = ["ivan","Castro"];

function concatTwoArray(array1,array2) {
    let result = array1.concat(array2);
    return result;
}

console.log(concatTwoArray(firstArray,secondArray));