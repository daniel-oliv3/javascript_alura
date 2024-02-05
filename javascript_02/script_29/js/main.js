/* JS */

function tocaSom(idElementeAudio) {    
    document.querySelector(idElementeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    // listaDeTeclas[contador].onclick = tocaSom;
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_pom');
    }
    contador++;
    console.log(contador);
}

















/* -- */