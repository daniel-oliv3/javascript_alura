##
### JavaScript: consumindo e tratando dados de uma API
##



<p align="center">
  <img alt="...." src="./src/js.jpg" width="100%">
</p>

##
### Parte 1 - Apresentação e layout do projeto
##


### 1 - Apresentação

**Apresentação**


- Exemplo:
  - js_vidflow_api_01


### 2 - Preparando o ambiente: boas-vindas ao curso

**Preparando o ambiente: boas-vindas ao curso**

Olá, dev!
Boas vindas ao curso de Consumo de APIs com JavaScript!

Para começarmos, gostaríamos de garantir que você tenha a melhor experiência possível ao longo deste curso. Vamos juntos seguir alguns passos para preparar o ambiente:

- 1. Visual Studio Code (VSCode)
No decorrer do curso, usaremos o editor de código Visual Studio Code (VSCode). Caso você ainda não tenha o VSCode instalado em seu sistema, recomendamos reservar um tempinho para fazer a instalação. Você pode baixar o VSCode gratuitamente em https://code.visualstudio.com/ e seguir as instruções de instalação para o seu sistema operacional.

- 2. Código do Projeto Base
Utilizaremos também um projeto base como ponto de partida, que incluirá os arquivos do VidFlow e a pasta com as imagens que usaremos para compor o layout. Você pode acessar o projeto base através do repositório no GitHub ou, se preferir, baixá-lo diretamente aqui..

- https://github.com/alura-cursos/projeto-vidflow/tree/main

- 3. Layout no Figma
E ainda, trabalharemos com um layout pronto, construído pelo time de designers do VidFlow e que transformaremos em código. Para visualizar o layout, acesse o Figma e explore os elementos da aplicação.

- https://www.figma.com/design/a0crwitCtGmNIQW0RVIs5H/VidFlow-%7C-Curso-Js---Consumindo-dados-de-uma-API?node-id=0-1

Em caso de dúvidas ao longo deste curso, sinta-se à vontade para interagir conosco por meio do Discord da Alura. Lá você pode encontrar toda a equipe de pessoas instrutoras e também me encontrar no perfil #rafasilverio. Estamos aqui para te apoiar na construção do seu conhecimento! Mesmo que você não tenha dúvidas no momento, seria ótimo ver você por lá e acompanhar o seu progresso. Vamos aprender juntos!

Ao infinito e além! Vamos explorar novos horizontes de conhecimento juntos!

- Exemplo:
  - js_vidflow_api_02



### 3 - Conhecendo o projeto

**Conhecendo o projeto**

- Exemplo:
  - js_vidflow_api_03


### 4 - Construindo o cabeçalho

**Construindo o cabeçalho**

- Exemplo:
  - js_vidflow_api_04


### 5 - Ícones do cabeçalho

**Ícones do cabeçalho**

- Exemplo:
  - js_vidflow_api_05


### 6 - Desafio: criando a barra lateral

**Desafio: criando a barra lateral**

Neste desafio, você terá a oportunidade de aplicar seus conhecimentos de HTML e CSS para criar a barra lateral da aplicação VidFlow, seguindo o layout fornecido no Figma.

- Vamos para o passo a passo:
  - 1: Acesse o layout no Figma para obter uma visão completa da barra lateral;

  - 2: Use HTML para estruturar a barra lateral e CSS para estilizá-la. Preste atenção aos detalhes do layout, como cores, espaçamento e posicionamento dos elementos.

- Opção Flexível:
  - Como nesse curso nosso foco é o consumo de uma API com JavaScript, você tem a flexibilidade de escolher como abordar este desafio. Se preferir, pode pular diretamente para o gabarito e copiá-lo. No entanto, se desejar praticar suas habilidades em HTML e CSS, este é um excelente momento para isso.

`Se sentir dificuldades, fique à vontade para consultar o gabarito abaixo`.

- Opinião do instrutor

No arquivo index.html, vamos adicionar a estrutura do menu lateral:

```js
<!-- Menu lateral -->

<aside class="menu__container">
  <ul class="menu__lista">
    <li>
      <a class="menu__itens" href="#">
      <i class="icone__inicio icone-item"></i>
      <span>Início</span></a>
    </li>
    
    <li>
      <a class="menu__itens" href="#">
      <i class="icone__explorar icone-item"></i>
      <span>Explorar</span></a>
    </li>
    
    <li>
      <a class="menu__itens" href="#">
      <i class="icone__shorts icone-item"></i>
      <span>Shorts</span></a>
    </li>
    
    <li>
      <a class="menu__itens" href="#">
      <i class="icone__inscricoes icone-item"></i>
      <span>Inscrições</span></a>
    </li>
    
    <li>
      <a class="menu__itens" href="#">
      <i class="icone__biblioteca icone-item"></i>
      <span>Biblioteca</span></a>
    </li>
    </ul>
    
    <ul class="menu__lista">
      <li>
        <a class="menu__itens" href="#">
          <i class="icone__historico icone-item"></i>
          <span>Histórico</span>
        </a>
      </li>
    
      <li>
        <a class="menu__itens" href="#">
          <i class="icone__relogio icone-item"></i>
          <span>Assistir mais tarde</span>
        </a>
      </li>
    
      <li>
        <a class="menu__itens" href="#">
          <i class="icone__like icone-item"></i>
          <span>Marcados com like</span>
        </a>
      </li>
      </ul>
    
      <ul class="menu__lista">
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__mostrar icone-item"></i>
            <span>Mostrar mais 2</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__deschamps icone-item"></i>
            <span>Felipe Deschamps</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__nerd icone-item"></i>
            <span>Jovem Nerd</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__souto icone-item"></i>
            <span>Mario Souto</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__iamarino icone-item"></i>
            <span>Atila Iamarino</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__ballerini icone-item"></i>
            <span>Rafaella Ballerini</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__gaveta icone-item"></i>
            <span>Gaveta</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens" href="#">
            <i class="icone__alura icone-item"></i>
            <span>Alura</span>
          </a>
        </li>
    
        <li>
          <a class="menu__itens inscricoes" href="#">INSCRIÇÕES</a>
        </li>
    </ul>
    
    <ul class="menu__lista">
      <li class="jogos">
        <a class="menu__itens" href="#">
          <i class="icone__jogos icone-item"></i>
          <span>Jogos</span>
        </a>
      </li>
    
      <li class="filmes">
        <a class="menu__itens" href="#">
          <i class="icone__filmes icone-item"></i>
          <span>Filmes</span>
        </a>
      </li>
      <li class="premium">
        <a class="menu__itens" href="#">
          <i class="icone__videos icone-item"></i>
          <span>Vídeo Premium</span></a>
      </li>
    
      <li class="menu__itens">
        <a href="#">MAIS DA PÁGINA</a>
      </li>
    
    </ul>
      </aside>
```

Em flexbox.css, adicionamos os estilos de posicionamento, incluindo as configurações para tornar a barra lateral responsiva e o arquivo final fica assim:

```css
/* CABEÇALHO */

.cabecalho__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}

.cabecalho__pesquisar__item {
  display: none;
}

.form__pesquisa {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
}

/* SECAO SUPERIOR */

.superior__slider {
  display: none;
}

/* MENU */

.menu__container {
  position: fixed;
  bottom: 0%;
  height: 74px;
  width: 100%;
}

.menu__lista {
  display: flex;
  justify-content: space-around;
  height: 100%;
}

.menu__lista li {
  align-self: center;
}

.menu__itens {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu__lista:nth-child(2),
.menu__lista:nth-child(3),
.menu__lista:nth-child(4) {
  display: none;
}

/* SEÇÃO SUPERIOR */

.superior__secao__container {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: scroll;
  gap: 15px;
}


/* VIDEO */

.videos__container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.videos__item {
  display: block;
  height: 303px;
  width: 280px;
  flex-grow: 1;
}


.descricao-video {
  margin-top: 1rem;
  display: grid;
  text-align: start;
  column-gap: 1rem;
  row-gap: 10px;
  grid-template-columns: auto 1fr;
}

.descricao-video .img-canal {
  grid-area: 1 / 1 / 3 / 2;
} 

@media (min-width: 834px) {
  /* MENU LATERAL*/

  .menu__container {
    left: 0;
    height: auto;
    width: 74px;
    top: 80px;
  }

  .menu__lista {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 15px;
    gap: 33px;
  }
}

@media (min-width: 1156px) {
  /* CABEÇALHO */

  .cabecalho__pesquisar__item {
    display: block;
    transform: translate(-60px);
  }

  .pesquisar__input {
    width: 530px;
  }

  /* SECAO SUPERIOR */

  .superior__slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1440px) {
  /* MENU */

  .menu__container {
    width: 239px;
    overflow: scroll;
  }

  .menu__lista:nth-child(2),
  .menu__lista:nth-child(3),
  .menu__lista:nth-child(4) {
    display: flex;
  }

  .menu__lista {
    height: auto;
    padding: 20px 17px 20px 15px;
    gap: 15px;
  }

  .menu__itens {
    flex-direction: row;
    gap: 15px;
    align-items: center;
  }

  .menu__lista:nth-child(3) {
    flex-direction: column-reverse;
  }

  .jogos {
    order: 3;
  }

  .filmes {
    order: 2;
  }

  .premium {
    order: 1;
  }

  .maispagina {
    order: 4;
  }
}
```

Em estilos.css, adicionamos os estilos do menu, incluíndo os detalhes da responsividade, fazendo com que o arquivo final fique assim:

```css
*,
*::before,
*::after {
    --azul-profundo: #01080E;
    --azul-escuro: #041832;
    --azul-medio: #144480;
    --azul-destaque-light: #1875E9;
    --azul-destaque-dark: #3985D8;
    --cinza-escuro: #222222;
    --cinza-medio: #C5C5C5;
    --cinza-claro: #F2F2F2;
    --branco: #FFFFFF;
    box-sizing: border-box;
}

body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    background-color: var(--branco);
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: auto;
    font-size: 14px;
    color: var(--cinza-escuro);                                                            
    box-sizing: border-box;
    text-align: center;
}

/* CABEÇALHO */

.cabecalho__container {
    background-color: var(--branco);
    height: 80px;
    width: 100%;
    padding: 0 25px;
}

.logo__item {
    padding: 15px 0px;
    cursor: pointer;
}

.pesquisar__input {
    padding: 8px;
    border: 2px solid var(--cinza-claro);
    border-radius: 32px 0px 0px 32px;
    font-size: 16px;
}

.pesquisar__input-teclado{
    position: absolute;
    right: 16%;
    top: 30%;
}

.pesquisar__btn {
    background-color: var(--cinza-claro);
    border: 0px;
    border-radius: 0px 32px 32px 0px;
    padding: 8px;
    padding-right: 15px;
    border-left: none;
    cursor: pointer;
}

.cabecalho__audio {
    border: 0px;
    background-color: var(--branco);
}

.cabecalho__videos {
    background-image: url(../img/topbar/video_call.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
}

.cabecalho__apps {
    background-image: url(../img/topbar/apps.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 13px 30px 13px 13px;
}

.cabecalho__notificacoes {
    background-image: url(../img/topbar/notifications.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 13px 30px 13px 13px;
}

.cabecalho__avatar {
    background-image: url(../img/topbar/Avatar.png);
    background-repeat: no-repeat;
    background-position: center;
    padding: 13px 30px 13px 33px;
}

.cabecalho__switch {
    position: relative;
    display: inline-block;
    padding: 13px 30px 13px 13px;
    width: 60px;
    height: 34px;
  }
  
  .cabecalho__switch-input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .cabecalho__switch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--cinza-claro);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  
  .cabecalho__switch-slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--branco);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  .cabecalho__switch-input:checked + .cabecalho__switch-slider {
    background-color: var(--azul-destaque-light);
  }
  
  .cabecalho__switch-input:focus + .cabecalho__switch-slider {
    box-shadow: 0 0 1px var(--cinza-claro);
  }
  
  .cabecalho__switch-input:checked + .cabecalho__switch-slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }


/* MENU LATERAL */

.menu__container {
    font-size: 14px;
    background-color: var(--branco);
}

.icone__inicio::before {
    content: url(../img/sidebar/home.png);
}

.icone__explorar::before {
    content: url(../img/sidebar/explore.png);
}

.icone__shorts::before {
    content: url(../img/sidebar/airplay.png);
}

.icone__inscricoes::before {
    content: url(../img/sidebar/subscriptions.png);
}

.icone__biblioteca::before {
    content: url(../img/sidebar/video_library.png);
}

.icone__historico::before {
    content: url(../img/sidebar/history.png);
}

.icone__relogio::before {
    content: url(../img/sidebar/history_toggle_off.png);
}

.icone__like::before {
    content: url(../img/sidebar/thumb_up_alt.png);
}

.icone__alura::before {
    content: url(../img/sidebar/Avatar_Alura.png);
}

.icone__gaveta::before {
    content: url(../img/sidebar/Avatar_Gaveta.png);
}

.icone__ballerini::before {
    content: url(../img/sidebar/Avatar_Rafa.png);
}

.icone__iamarino::before {
    content: url(../img/sidebar/Avatar_Atila.png);
}

.icone__souto::before {
    content: url(../img/sidebar/Avatar_Souto.png);
}

.icone__nerd::before {
    content: url(../img/sidebar/Avatar_Jovem_Nerd.png);
}

.icone__deschamps::before {
    content: url(../img/sidebar/Avatar_Deschamps.png);
}

.icone__mostrar::before {
    content: url(../img/sidebar/keyboard_arrow_down.png);
}

.icone__videos::before {
    content: url(../img/sidebar/ondemand_video.png);
}

.icone__filmes::before {
    content: url(../img/sidebar/movie.png);
}

.icone__jogos::before {
    content: url(../img/sidebar/sports_esports.png);
}

/* SECAO SUPERIOR */

.superior__secao__container {
    height: 63px;
    color: var(--branco);
    font-size: 16px;
    background-color: var(--branco);
    padding: 0 20px;
    position: fixed;
    top: 80px;
    right: 0;
    left: 0;
    /* transition: transform 0.5s ease-in-out;
    transform: translateX(0); */
}

.superior__secao__container-wrapper{
    position: relative;
}

.superior__item {
    color: var(--cinza-escuro);
    font-size: 16px;
    background-color: var(--cinza-claro);
    border-radius: 20px;
    padding: 8px 20px;
    cursor: pointer;
    width: 200px;
}

.superior__item:hover {
    color: var(--branco);
    background-color: var(--azul-destaque-light);
    transition: .5s;
}

.superior__slider{
    position: absolute;
    right: 0%;
    width: 4%;
    height: 100%;
    background-color: var(--branco);
}

/* SEÇÃO VÍDEOS */

.videos__container {
    color: black;
    padding: 153px 20px 10px 20px;
}

iframe{
    border-radius: 10px;
    width: 100%;
    height: 62%;
}

.descricao-video .img-canal{
    border-radius: 100%;
    width: 40px;
    height: 40px;
}

.descricao-video .titulo-video {
    font-weight: 700;
    color: var(--cinza-escuro);
}

.descricao-video .titulo-canal {
    font-size: 14px;
    color: var(--cinza-escuro);
}  

::-webkit-scrollbar{
    width: 0px;
    height: 0px;
}

@media(min-width: 834px) {

    body {
        height: 100vh;
    }

    /* ESTILOS DO MENU LATERAL */

    .menu__container {
        font-size: 16px;
    }

    .menu__lista {
        padding-top: 15px;
    }

    .menu__lista li {
        width: 100%;
    }

    /* ESTILOS DA SECAO SUPERIOR */

    .superior__secao__container {
        border-top: var(--azul-medio) 1px solid;
        border-bottom: var(--azul-medio) 1px solid;
        width: auto;
        left: 82px;
    }

    /*ESTILOS SEÇÃO VÍDEOS */

    .videos__container {
        padding-left: 90px;
        padding-right: 17px;
    }

}

@media(min-width: 1440px) {

    /* SEÇÃO SUPERIOR */

    .superior__secao__container {
        left: 247px;
    }

    /* ESTILOS DO MENU LATERAL */

    .menu__lista {
        border-bottom: 1.5px solid var(--azul-medio);
    }

    /* ESTILOS VIDEOS */

    .videos__container {
        padding-right: 10px;
        padding-left: 248px;
    }

}
```

E a barra lateral está pronta!😄

- Exemplo:
  - js_vidflow_api_06


### 7 - Criando seção de categoria

**Criando seção de categoria**

- Exemplo:
  - js_vidflow_api_07



### 8 - Analisando divs e classes em HTML

**Analisando divs e classes em HTML**

Durante o desenvolvimento do aplicativo VidFlow, você recebeu uma tarefa de revisão de código de um colega de equipe. No código fornecido, esse colega está tentando implementar a interface do VidFlow usando HTML e CSS. Ele pediu sua ajuda para verificar se as regras de codificação de estilo, organização e boas práticas foram seguidas corretamente. Examinando o código HTML deste colega, você observa várias divs com classes diferentes associadas ao elemento header.

O que isso significa no código?

- Selecione uma alternativa

- A: Significa que estas divs precisarão ser removidas para melhorar o desempenho da página.

- B: Isso indica que o código está bem organizado, pois cada div está associada a uma função ou seção específica do cabeçalho.

`Usar classes diferentes dentro de um elemento pai é uma prática comum e útil no desenvolvimento front-end. Isso permite a criação de vários estilos CSS que podem ser aplicados às divs para alterar sua aparência e comportamento.`

- C: Indica que o código precisa ser refatorado, pois não é uma boa prática ter muitas classes diferentes em uma seção.

- D: sso indica que o código está em conformidade com as diretrizes de acessibilidade da Web, pois cada div possui uma única classe para identificação por leitores de tela.

- Exemplo:
  - js_vidflow_api_08


















