let ricardo = "Ricardo es tu tio"; 
let roberto = "Roberto es tu hermano"; 
let argentina = "El país al que perteneces";
let dinamita = "Es tu gato";
var val = Number(prompt("1-Ricardo\n2-Roberto\n3-Argentina\n4-Dinamita\nIngrese un numero:"));

switch (val) {
    case 1:
    alert(ricardo);
      break;
    case 2:
    alert(roberto); 
      break;
    case 3:
    alert(argentina);
      break;
      case 4:
    alert(dinamita);
      break;
    default:
    alert("Valor incorrecto");
      break;
  }