// blanco O
// negro #

var tablero=""
var casillaNegra= " # "
var casillaBlanca= " O "
var columna = 1
var condicionBlanco
var condicionNegro

for(let fila=1; fila<=8; fila++){
   
    while(columna <= 8){

        if(columna%2!=0){
            condicionBlanco=(fila%2!=0)
            condicionNegro=(fila%2==0)
        }else if(columna%2==0){
            condicionBlanco=(fila%2==0)
            condicionNegro=(fila%2!=0)
        }

        if(condicionNegro){
            tablero+=casillaNegra
        }else if(condicionBlanco){
            tablero+=casillaBlanca
        }
        columna++;
    }
    columna=1
    console.log(tablero)  
    tablero=""  
}
