var num = prompt("Ingrese un número:");

alert(num + " es " + esPar(num));

function esPar(num) {
    var resultado;
    if (num % 2 == 0) {
        resultado = "PAR";
    } else{
        resultado = "IMPAR";
    }

    return resultado;
}
