// metodos de array

let cajas = ['lapiz','sacapuntas','boligrafos','colores','estuche']

// 1) metodo forEcha - recorrer un array array.forEach(Function(elemento,indice, array) expresion)
 cajas.forEach((e,i,a)=> console.log(e,i))

 // 2) motodo pop y push. pop elimina un elemento del final y push agrega un elemento al final
 
 cajas.pop() // elimina un elemento del final
 cajas.push('marcador') 

 // 3) metodo map. array.map((argumento de nuevroArray)=> expression)

 let nuevos = cajas.map((e)=>console.log(e))

 //Objeto.keys(array)

let obj = {
	nombre: 'Jordani',
	apellido: 'Gonzalez'
}
console.log(obj)
// devuelve un arreglo de todos los  keys
let mostrarKeys = Object.keys(obj)

console.log(mostrarKeys)
 let otros = mostrarKeys.map(e => console.log(e))

// devuelve un arreglo de todas las propiedades de cada keys Objecto.values(array)

let mostrarValues = console.log(Object.values(obj))

console.log('subiendo al github con cambios')