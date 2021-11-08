var arr = [10 , 20 , 30 , 40 , 50, 60, 70, 80, 90, 100];

// SIEMPRE ES PREFERIBLE USAR EL FOR  //TIP
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


for (const i in arr) {
    console.log(i);         //usar un for in -> te da las pocisiones del arreglo
}

for (const i of arr) {
    console.log(i);         //usar un for of -> te da los valores
}

function concaternarArray1(array1,array2){
    let aux=[];
    for(i=0;i<array1.length;i++){
        aux.push(array1[i]);
    }
    for(let i=0;i<array2.length;i++){
        aux[i+array1.length]=array2[i];
    }
    return aux;
}

/* var arr = [10 , 20 , 30 , 40 , 50, 60, 70, 80, 90, 100];
var arr2 = [10 , 20 , 30 , 40 , 50, 60, 70, 80, 90, 100];
function concaternarArray1(array1,array2){
    let aux=[];
    for(i=0;i<array1.length;i++){
        aux.push(array1[i]);
    }
    for(let i=0;i<array2.length;i++){
        aux.push(array2[i]);
    }
    return aux;
}
console.log(concaternarArray1(arr,arr2)); */