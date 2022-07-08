$(document).ready(function(){

    $('#universidad').change(function(){
        let opcion = $(this).val();

        switch (opcion) {
            case '': $('#rectangulo1').text('Universidad');
            break;
            case '1':
                $('#rectangulo1').text('UNLAM');
            break;
            case '2':
                $('#rectangulo1').text('UAI');
            break;
            case '3':
                $('#rectangulo1').text('UNSAM');
            break;
        }
    });

    $('#color-fondo').change(function(){
        $('#rectangulo1').removeClass('fondo-rojo fondo-verde fondo-azul');
        
        let opcion = $(this).val();

        switch (opcion) {
            case '1':
                $('#rectangulo1').addClass('fondo-rojo');
            break;
            case '2':
                $('#rectangulo1').addClass('fondo-verde');
            break;
            case '3':
                $('#rectangulo1').addClass('fondo-azul');
            break;
        }
    });

    $('input[type="radio"]').click(function(){
        $('#rectangulo1').removeClass('texto-blanco texto-gris texto-amarillo');

        let opcion = $(this).val();

        switch (opcion) {
            case 'blanco':
                $('#rectangulo1').addClass('texto-blanco');
            break;
            case 'gris':
                $('#rectangulo1').addClass('texto-gris');
            break;
            case 'amarillo':
                $('#rectangulo1').addClass('texto-amarillo');
            break;
        }
    });

});