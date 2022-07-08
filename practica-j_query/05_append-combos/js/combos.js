let colores = ['Azul', 'Verde', 'Violeta'];
let paises  = ['Argentina', 'Canadá', 'Italia'];
let universidades = ['UBA', 'UNAHUR', 'UNLAM'];

$(document).ready(function(){

    $('#inicial').change(function(){
        let inicial = $(this).val();
        
        $('#secundario').empty();

        switch (inicial) {
            case '1':
                for (i in colores) {
                    $('#secundario').append('<option value=' + i + '>' + colores[i] + '</option>');    
                }
            break;

            case '2':
                for (i in paises) {
                    $('#secundario').append('<option value' + i + '>' + paises[i] + '</option>');
                }
            break;
            
            case '3':
                for (i in universidades) {
                    $('#secundario').append('<option value' + i + '>' + universidades[i] + '</option>');
                }
            break;
        }
    });

});