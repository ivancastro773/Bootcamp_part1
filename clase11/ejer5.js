
function dataDay() {
    let date = new Date();
    let hour = date.getHours()+":"+date.getMinutes(); 
    let days = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let day = days[date.getDay()];
    return "Hoy es "+day+" y la hora es "+hour;
}
console.log(dataDay());