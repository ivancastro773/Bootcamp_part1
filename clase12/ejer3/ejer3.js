const numTrue = () =>{
    let val; 
    let valRandom = Math.floor(Math.random()*(10-1))+1;
    console.log(valRandom);
    do {
        val = Number(prompt("Ingresa un numero del 1 al 10."));
    } while (val != valRandom){
        alert("acertaste");
    };
}
numTrue();

