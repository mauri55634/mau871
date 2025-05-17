let contador = 3
while(contador> 0){
    contador = contador -1;
}
console.log (contador)

let edad = 40
if (edad >= 18){
    console.log ("Mayor de edad")
}else {
    console.log ("Menos de edad")
}
console.log(edad)

let nombre= "Mauricio"
let años= 25
let barrio= "Santa isabel"

console.log (nombre)
console.log (años)
console.log (barrio)


let objeto= {
    modelo: "yaris",
    fabricacion: 2010,
    color:  "rojo"
}

console.log (objeto.modelo)
console.log (objeto.fabricacion)
console.log (objeto.color)


function suma (a,b) {
    return a + b;
}

const resta = function (a,b) {
    return a - b
}

const multiplicacion = (a,b) => {
    return a * b
}


let x= 10
let y= 5
let opcion = 3

switch (opcion){
    case 1:
        console.log(suma(x,y));
        break;
    case 2:
        console.log(resta(x,y));
        break;
    case 3:
        console.log (multiplicacion(x,y));
        break;
}