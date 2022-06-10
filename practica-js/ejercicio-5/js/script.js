var numero = prompt("Ingrese el número del cual se va a calcular el factorial:");
var factorial = 1;

for (var i=0; i<=numero-1; i++) {
    factorial *= (numero - i);
}

alert(numero + "! = " + factorial);