$(document).ready(function(){
    $('.popup').hide();

    $('#abrir').click(function(){
        $('.popup').fadeIn();
    });

    $('#cerrar').click(function(){
        $('.popup').fadeOut();
    });

    $('#mostrar').click(function(){
        $('.texto').slideDown();
    });
    
    $('#ocultar').click(function(){
        $('.texto').slideUp();
    });
});