let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", funcion());
if(contador == 0){
    enlaces.className = ('enlaces dos');
    contador=1;
}else{
    enlaces.classList.remove('dos');
    enlaces.className() = ('enlaces uno');
    contador = 0;
}


var objDiv = document.getElementById("nav__item");
objDiv.scrollTop = objDiv.scrollHeight;
