let arr = [10, "20", 30, "40", 50];
const numberConvert=(array)=>{
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') {
            array[i] = Number([i]);
        }
    }
    return arr;
}
console.log(numberConvert(arr));
