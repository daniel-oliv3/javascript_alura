/* JS */

function tocaSom(seletorAudio) {    
    const elemento = document.querySelector(seletorAudio);//.play();
    
    if(elemento === null){
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if(elemento != null){
        // console.log(elemento);
        // console.log(elemento.localName);
        console.log(elemento.localName === 'audio');

        if(elemento.localName === 'audio'){
            elemento.play();
        }

    }
    

}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* ------- For ------- */
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}


//-- browser --
//tocaSom('.piano');
//tocaSom('#som_tecla_tim');
//tocaSom('button');









/* -- */