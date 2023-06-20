/* Funciones 
una funcion es una series de instrucciones complementada con un solo metodo. 
function es la palabra reservada y debe ser declarano con n Variables como parametros con un nombre cualquiera. y para ejecutar se escribre unombrCualquiera(parametro);
*/
let nombre = prompt("escriba su nombre") // pedir datos
function saludo (parametro1){
    alert(`Hola ¿Cómo estás? ${parametro1}`)
}

saludo(nombre); //ejecutar la funcion
