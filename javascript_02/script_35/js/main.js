/* JS */

function tocaSom(idElementeAudio) {    
    document.querySelector(idElementeAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* ------- For ------- */
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }
    
    
}


//-- browser --
// listaDeTeclas[2].classList.add('ativa');










/* -- */