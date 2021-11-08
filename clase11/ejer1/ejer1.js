let Ricardo = "Ricardo es tu tio"; 
let Roberto = "Roberto es tu hermano"; 
let Argentina = "El país al que perteneces";
let Dinamita = "Es tu gato";
var val = Number (prompt("1-Ricardo\n2-Roberto\n3-Argentina\n4-Dinamita\nIngrese un numero:"));

switch (val) {
    case 1:
    window.alert(Ricardo);
      break;
    case 2:
    window.alert(Roberto); 
      break;
    case 3:
    window.alert(Argentina);
      break;
      case 4:
    window.alert(Dinamita);
      break;
    default:
    window.alert("Valor incorrecto");
      break;
  }