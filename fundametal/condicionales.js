// se refiere a que se ejecuta una accion si se cumple cierta condicion. 

let numero = parseInt(prompt('escoje un numero del 1 al 2'))

//condicion bucle
for(let i= 1 ; numero != '1' && numero !=2; i++){
    alert("vuelva a escoger")
    numero = prompt('escoje un numero del 1 al 2')
  }
if(numero == 1){
    alert('Usted ha escogido el numero 1')
}else {
    alert('Usted ha escogido el numero 2');
}