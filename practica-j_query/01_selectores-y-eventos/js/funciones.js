$(document).ready(function(){
    $('h1').addClass('rojo');
    $('.clase').hide();
    $('.clase').show();
    $('h2').addClass('azul');

    $("#nombre").keyup(function(){
        console.log($(this).val());
    });
    
    $('input[name="lenguaje"]').change(function(){
        console.log($(this).val());
    });
});
