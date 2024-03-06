const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');


// --- ---
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});


longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

// --- Funções ---
function alterarContexto (contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./src/imagens/${contexto}.png`);
}
