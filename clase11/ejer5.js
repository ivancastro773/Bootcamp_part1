
function dataDay() {
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let i = 0;
    let j=days.length;
    let date = new Date();
    let day;
    let hour = date.getHours()+":"+date.getMinutes();
    for (i; i < j; i++) {
        if (date.getDay()-1 == i) {
            day = days[i];
        }
    }
    return "Hoy es "+day+" y la hora es "+hour;
}
console.log(dataDay());