var valores = [true, 5, false, "hola", "adiós", 2];

//Almaceno los números en un Array
var numeros = new Array();
var j = 0;

for (var i=0; i<valores.length; i++) {
    if (!(typeof valores[i] == "boolean")) {
        if (!isNaN(valores[i])) {
            numeros[j] = valores[i];
            j++;
        }
    }
}

//1.
var i = 0, mayor;

while (i < numeros.length) {
    if (i==0 || numeros[i] > mayor) {
        mayor = numeros[i];
    }

    i++;
}

alert("El mayor es: " + mayor);

//2.
for (var i=0; i<valores.length; i++) {
    if ((valores[i] == true) || (valores[i] == false)) {
        alert("[" + i + "] = " + valores[i]);
    }
}

//3.
var suma, resta, multiplicacion, division, resto;

for (var i=0; i<numeros.length; i++) {
    if (i==0) {
        suma = numeros[i];
        resta = numeros[i];
        multiplicacion = numeros[i];
        division = numeros[i];
        resto = numeros[i];
    } else {
        suma += numeros[i];
        resta -= numeros[i];
        multiplicacion *= numeros[i];
        division /= numeros[i];
        resto %= numeros[i];
    }
}

alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Multiplicación: " +multiplicacion);
alert("División: " + division);
alert("Resto: " + resto);
