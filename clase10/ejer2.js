function hourForSeconds(hour) {
    let minutes = (hour*60); //La hora la paso a minutos
    let seconds = (minutes*60); // los minutos los paso a segundos
    return seconds;
}

console.log(hourForSeconds(15));