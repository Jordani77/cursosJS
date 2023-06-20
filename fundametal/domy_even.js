// Con javascrip se puede manipular cualquier elemento de html. Cada elelemento Javascript lo toma como objeto. 

const nom = document.querySelector('.articulo');
//nom.innerHTML = 'My name is Gilberto';

//añadieno evento

let boton = document.querySelector(".boton")

boton.addEventListener("click", (e)=>{
    let input = document.querySelector("#input")
    e.preventDefault();
if(input.value == ""){
    alert("agregue un nombre")

}else {
    e.preventDefault(); 
    let input = document.querySelector("#input")
     
    nom.innerHTML += `Hola Sr. ${input.value} <br>` // vaya sumando datos
    input.value= "" // limpiar el input
}
})
//Nota: si no sabe como se escribe usar la herramienta del navegador. atajo : " ctrl + alt + i "

/* 
Tareas
Buscar elementos
importancia: 4
Aquí está el documento con la tabla y el formulario.

¿Cómo encontrar?…

La tabla con id="age-table".
Todos los elementos labeldentro de la tabla (debería haber 3).
El primer td en la tabla (con la palabra “Age”).
El form con name="search".
El primer input en ese formulario.
El último input en ese formulario. 
*/