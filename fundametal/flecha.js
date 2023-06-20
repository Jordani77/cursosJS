//Lo que cambia es que se simplifica.
// declaro una variables o constante y que su declaracion sea :
//nota: el simbolo => indica que es una funcion. No es necesario escribir con llaves si es mas de dos lineas.
let nombre = prompt("Escriba su nombre")
const saludo = (nom)=> alert(`Saludo ${nom}`)
saludo(nombre);