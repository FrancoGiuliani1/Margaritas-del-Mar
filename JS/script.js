var input =document.getElementById('input')
var input2 =document.getElementById('input2')
var input3 =document.getElementById('input3')
var input4 =document.getElementById('input4')
var boton =document.getElementById('boton')

input.addEventListener('input', stop)
input2.addEventListener('input', stop)
input3.addEventListener('input', stop)
input4.addEventListener('input', stop)

function stop(){
    if(input.lenght=1){
        boton.classList.remove('input-Clave')
    }
    else{
    
    }
}