/*
    .append() //agrega
    .text() //pisa
    .empty() //vacia
    .remove() //elimina el elemento

    EJ: $('ul').append('<li>Opción</li>');
*/

$(document).ready(function(){

    $('#vaciar').hide();

    $('#agregar').click(function(){
        let universidad = $('#universidad').val();
        $('#lista').append('<li>' + universidad + '</li>');
        $('#vaciar').show();
    });

    $('#vaciar').click(function(){
        $('#lista').empty();
        $('#vaciar').hide();
    });
    
});