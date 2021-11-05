let val1 = 15;
let val2 = 25;

function closerTo100(num1,num2) {
    let dif1 = Math.abs(num1 - 100); // la funcion Math.abs da el valor absoluto.
    let dif2 = Math.abs(num2 - 100);
    if (dif1 != dif2) {
        if (dif1 < dif2) {
            return "el valor mas cercano es: "+dif1;
        }else{
            return "el valor mas cercano es: "+dif2;
        }
        /* return (dif1 < dif2) ? num1 : num2; ----> es una manera mas corta de hacer el if de arriba*/
    } else {
        return "Los dos numeros estan a la misma distancia."
    }
}

console.log(closerTo100(val1,val2));