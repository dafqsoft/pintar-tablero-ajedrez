// blanco O
// negro #

var tablero=""
var casillaNegra= " # "
var casillaBlanca= " O "

var columnaImpar
var columnaPar

var filaImpar
var filaPar

for(let columna=1; columna<=8; columna++){

    columnaImpar=columna%2!=0;
    columnaPar=columna%2==0;

    for(let fila=1; fila<=8; fila++){

        filaImpar=fila%2!=0;
        filaPar=fila%2==0;
        
        // if(columnaImpar && filaImpar || columnaPar && filaPar){
        //     tablero+=casillaBlanca
        // }else if(columnaImpar && filaPar || columnaPar && filaImpar){
        //     tablero+=casillaNegra
        // }

        if(columnaImpar && filaImpar || columnaPar && filaPar){
            tablero+=casillaBlanca
        }else{
            tablero+=casillaNegra
        }
    }

    console.log(tablero)
    tablero=""
}

//usar factor comun asi solo hay que validar una vez




