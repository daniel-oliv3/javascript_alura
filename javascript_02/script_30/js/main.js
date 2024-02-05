/* JS */

function tocaSom(idElementeAudio) {    
    document.querySelector(idElementeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    // console.log(instrumento);
    // console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
    // console.log(contador);
}


// -- browser -- 
//listaDeTeclas[0].classList
// listaDeTeclas[1].classList














/* -- */