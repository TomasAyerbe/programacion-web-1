$(document).ready(function(){
    $('#naranja').hover(function(){
        $('h1').removeClass();
        $('h1').addClass('naranja');
    });
    
    $('#azul').hover(function(){
        $('h1').removeClass();
        $('h1').addClass('azul');
    });

    $('#verde').hover(function(){
        $('h1').removeClass();
        $('h1').addClass('verde');
    });
});