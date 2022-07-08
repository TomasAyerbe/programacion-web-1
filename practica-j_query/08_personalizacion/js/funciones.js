$(document).ready(function(){

    $('#nombre').keyup(function(){
        let nombre = $(this).val();
        $('#texto').text(nombre);
    });

    $('input[name="fondo"]').change(function(){
        $('.vista-previa').removeClass('fondo1 fondo2 fondo3');

        let colorFondo = $(this).val();
        
        switch (colorFondo) {
            case '1':
                $('.vista-previa').addClass('fondo1');
            break;

            case '2':
                $('.vista-previa').addClass('fondo2');
            break;

            case '3':
                $('.vista-previa').addClass('fondo3');
            break;
        }
    });

    $('#tipografia').change(function(){
        $('.vista-previa').removeClass('fuente-yanone fuente-roboto');

        let tipografia = $(this).val();

        if (tipografia == 'roboto') {
            $('.vista-previa').addClass('fuente-roboto');
        } else {
            $('.vista-previa').addClass('fuente-yanone');
        }
    });

    $('input[name="color"]').change(function(){
        $('.vista-previa').removeClass('blanco negro');

        let colorTexto = $(this).val();

        if (colorTexto == 'blanco') {
            $('.vista-previa').addClass('blanco');
        } else {
            $('.vista-previa').addClass('negro');
        }
    });

});