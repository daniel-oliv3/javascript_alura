/* JS */

function tocaSom(idElementeAudio) {    
    document.querySelector(idElementeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador++;
    console.log(contador);
}

















/* -- */