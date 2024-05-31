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


### 9 - Lista de exercícios

**Lista de exercícios**


O que é:
Boas-vindas à nossa lista de exercícios, um caminho prático e envolvente para aprender e aprimorar suas habilidades em tecnologia. Aqui, você não encontrará longas leituras teóricas ou explicações abstratas. Em vez disso, nossos exercícios são projetados para colocar você no centro do processo de aprendizado, permitindo que você construa, experimente e explore conceitos tecnológicos de forma direta e aplicada.

Para que serve:
Esta lista é uma ferramenta dinâmica para aprender, reforçar e aprimorar habilidades práticas em programação e desenvolvimento web. Cada exercício é uma oportunidade de aplicar conhecimentos teóricos em cenários reais, preparando você não apenas para entender a tecnologia, mas para utilizá-la de maneira eficaz e criativa em seus próprios projetos ou no ambiente de trabalho.

Como fazer:
Leia cada exercício com atenção: comece entendendo o cenário proposto e o que se espera como resultado.
Escreva o código: utilize o ambiente de codificação de sua escolha para escrever e testar o seu código. Não se preocupe em acertar de primeira, a prática leva à perfeição.
Verifique o gabarito: após tentar resolver o exercício, compare seu código com o gabarito fornecido em “Opinião do instrutor”. Isso ajudará a identificar áreas de melhoria e consolidar o aprendizado.
Repita: a repetição é chave para o aprendizado. Tente fazer os exercícios mais de uma vez, aplicando melhorias e variantes.
Lembre-se, cada desafio é uma chance de crescer. Não se desanime com os erros; eles são degraus no caminho do aprendizado. E acima de tudo, divirta-se! O aprendizado mais eficaz acontece quando nos engajamos e nos interessamos pelo que estamos fazendo.

Não se esqueça que estamos no Fórum e no Discord para te ajudar!

Bons estudos!

1) Criando uma barra de navegação responsiva
Imagine que você está desenvolvendo o front-end de um site para uma startup de tecnologia inovadora. O design do site precisa ser moderno, responsivo e seguir as últimas tendências de UI/UX. Sua liderança compartilhou com você o layout no Figma, e sua primeira tarefa é criar uma barra de navegação superior que seja responsiva e se ajuste a diferentes tamanhos de tela, incluindo a logo da empresa, uma barra de pesquisa, e ícones de usuário e notificações, baseando-se no layout "1440 - Desktop Light" fornecido.

Sua barra de navegação deve incluir:

A logo da empresa alinhada à esquerda;
Uma barra de pesquisa ao centro;
Ícones de usuário e notificações alinhados à direita.
Utilize HTML e CSS para estruturar e estilizar sua barra de navegação, garantindo que ela seja adaptável a telas menores, como tablets e smartphones. Implemente um menu hambúrguer para dispositivos móveis que, ao ser clicado, exibe os itens da navegação.

2) Personalizando a barra de pesquisa com ícones interativos
Depois de estruturar a barra de navegação, ao perceber que a barra de pesquisa pode ser aprimorada para oferecer uma melhor experiência ao usuário, você decide incorporar funcionalidades adicionais à barra de pesquisa do site, inspirando-se novamente no layout "1440 - Desktop Light" do Figma.

Sua tarefa é:

Adicionar um ícone de lupa dentro da barra de pesquisa que, ao ser clicado, submete a pesquisa;
Incluir um ícone de microfone ao final da barra para pesquisas por voz, visando a uma maior acessibilidade;
Garantir que ambos os ícones sejam interativos, mudando de cor ou estilo quando o usuário passa o mouse sobre eles ou os seleciona;
Utilize HTML, CSS e, se necessário, JavaScript para implementar essas funcionalidades, assegurando que a barra de pesquisa seja intuitiva e fácil de usar em diferentes dispositivos.
3) Adicionando ícones interativos na barra superior
Você está trabalhando no desenvolvimento de uma plataforma de conteúdo digital. Inspirando-se em um projeto existente, sua próxima tarefa é enriquecer a barra superior do site com ícones interativos para vídeos, aplicativos, notificações e perfil do usuário, além de um botão de alternância para o modo escuro.

Para esta atividade, você deve:

Adicionar ícones representativos para vídeos, aplicativos, notificações e perfil do usuário na barra de navegação superior;
Implementar um botão de alternância que mude o tema do site de claro para escuro, afetando imediatamente a aparência da página;
Use HTML para estruturar os ícones e o botão de alternância, e CSS para estilizá-los. Considere usar JavaScript para adicionar a funcionalidade de alternância do tema.
4) Construindo uma barra lateral dinâmica
O projeto está crescendo, e agora você tem a tarefa de criar uma barra lateral que oferece acesso rápido às diferentes seções do site, como home, categorias, sobre nós e contato. Este componente deve seguir o design moderno da plataforma e ser funcional em diferentes dispositivos.

Sua barra lateral deve incluir:

Ícones ou texto para cada seção (home, categorias, sobre nós, contato);
Animação ou efeito visual ao passar o mouse ou tocar em cada item;
Responsividade, garantindo que a barra lateral se ajuste bem a dispositivos móveis, talvez se transformando em um menu hambúrguer;
Utilize HTML, CSS e, se necessário, JavaScript para implementar a barra lateral, focando na usabilidade e na experiência do usuário.

- Opinião do instrutor

Veja as soluções dos exercícios, lembrando de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Criando uma barra de navegação responsiva
Estruture sua barra de navegação no HTML utilizando a tag `<nav>` dentro de um `<header>`. Inclua três `<div>` para a logo, barra de pesquisa e ícones;
Para a logo, use uma tag `<img>` com o atributo src apontando para o caminho da imagem da logo;
Para a barra de pesquisa, utilize um `<form>` contendo um `<input type="search">`;
Para os ícones, considere usar `<img>` para ícones estáticos ou `<i>` para ícones de bibliotecas como FontAwesome;
No CSS, use @media queries para tornar a barra de navegação responsiva. Defina estilos específicos para diferentes larguras de tela, garantindo que a navegação se adapte bem desde desktops até smartphones;
Para o menu hambúrguer, use um ícone de hambúrguer no HTML e, com JavaScript, adicione uma funcionalidade para mostrar e esconder os itens da navegação ao clicar no ícone. Utilize CSS para animar a transição dos itens da navegação.
Veja uma possível solução do código em HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Startup de Tecnologia</title>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <img src="caminho_para_logo.png" alt="Logo da Empresa">
            </div>
            <div class="pesquisa">
                <form>
                    <input type="search" placeholder="Pesquisar">
                </form>
            </div>
            <div class="icones">
                <img src="icone_usuario.png" alt="Usuário">
                <img src="icone_notificacoes.png" alt="Notificações">
            </div>
        </nav>
    </header>
</body>
</html>
```

2) Personalizando a barra de pesquisa com ícones interativos
Dentro do `<form>` da barra de pesquisa, adicione um `<button>` para a lupa, configurando-o para não recarregar a página ao ser clicado. Para o ícone de microfone, você pode usar outro `<button>` ou simplesmente um `<img>` com um evento de clique que ative a funcionalidade de pesquisa por voz;
Use CSS para estilizar os ícones dentro da barra de pesquisa, aplicando :hover e :focus para mudar a cor ou adicionar outros efeitos visuais quando interagidos;
Se optar por funcionalidades mais avançadas, como a pesquisa por voz, você pode usar a Web Speech API do JavaScript para capturar entrada de voz.
Veja uma possível solução do código em HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Cabeçalho omitido para brevidade -->
</head>
<body>
    <header>
        <nav class="cabecalho__container">
            <!-- Conteúdo anterior omitido para brevidade -->
            <div class="cabecalho__pesquisar__item">
                <form class="form__pesquisa">
                    <input type="search" class="pesquisar__input" placeholder="Pesquisar">
                    <button type="submit" class="pesquisar__btn">
                        <img src="./img/topbar/search.png" alt="Ícone de lupa">
                    </button>
                    <button class="cabecalho__audio">
                        <img src="./img/topbar/Mic.png" alt="Ícone de microfone">
                    </button>
                </form>
            </div>
        </nav>
    </header>
</body>
</html>
```

3) Adicionando ícones interativos na barra superior
Adicione ícones à barra superior usando a tag `<a>` para cada ícone. Por exemplo, para vídeos, use `<a href="#" class="cabecalho__videos"></a>`. Você pode inserir ícones como imagens `(<img>)` dentro das tags `<a>` ou usar ícones de uma biblioteca como FontAwesome;
Para o botão de alternância do tema, use uma `<label>` contendo um `<input type="checkbox">` para o controle de alternância e um `<span>` para o deslizador visual. Use JavaScript para alternar as classes CSS do corpo do documento, mudando assim o tema do site;
Aplique estilos CSS para posicionar os ícones na barra de navegação e para o botão de alternância. Use :hover para efeitos visuais interativos nos ícones.
Veja uma possível solução do código em HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Cabeçalho omitido para brevidade -->
</head>
<body>
    <header>
        <nav class="cabecalho__container">
            <!-- Outros elementos da barra de navegação omitidos para brevidade -->
            <div class="cabecalho__icones__item">
                <a href="#" class="cabecalho__videos"><img src="video_icon.png" alt="Vídeos"></a>
                <a href="#" class="cabecalho__apps"><img src="apps_icon.png" alt="Aplicativos"></a>
                <a href="#" class="cabecalho__notificacoes"><img src="notifications_icon.png" alt="Notificações"></a>
                <a href="#" class="cabecalho__avatar"><img src="avatar_icon.png" alt="Perfil"></a>
                <label class="cabecalho__switch">
                    <input type="checkbox" class="cabecalho__switch-input" id="theme-switch">
                    <span class="cabecalho__switch-slider"></span>
                </label>
            </div>
        </nav>
    </header>
</body>
</html>
```

4) Construindo uma barra lateral dinâmica
Estruture a barra lateral no HTML dentro de um `<aside>` ou `<nav>`, utilizando `<a>` ou `<button>` para cada item do menu. Por exemplo, use `<a href="#home" class="sidebar__item">Home</a>` para o link da home.
Use CSS para estilizar a barra lateral, incluindo animações ou transformações (:hover, :focus) para melhorar a interação do usuário. Para dispositivos móveis, considere transformar a barra lateral em um menu hambúrguer que pode ser expandido ou colapsado.
Implemente a funcionalidade de menu hambúrguer com JavaScript, permitindo que os usuários acessem os itens do menu em telas menores.
Veja uma possível solução do código em HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Cabeçalho omitido para brevidade -->
</head>
<body>
    <aside class="sidebar">
        <a href="#home" class="sidebar__item">Home</a>
        <a href="#categorias" class="sidebar__item">Categorias</a>
        <a href="#sobre" class="sidebar__item">Sobre Nós</a>
        <a href="#contato" class="sidebar__item">Contato</a>
        <!-- Mais itens conforme necessário -->
    </aside>
</body>
</html>
```

Esses exemplos fornecem um guia básico para adicionar ícones interativos à barra superior e construir uma barra lateral dinâmica, melhorando a navegação e a experiência geral do usuário no site.

Muito bom! Você chegou ao fim de mais uma lista de exercícios!

- Exemplo:
  - js_vidflow_api_09





### 10 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
  - Organizar os arquivos e pastas do projeto;
  - Transformar o layout do Figma em código;
  - Construir o cabeçalho, barra lateral e seção de categorias do VidFlow.

- Exemplo:
  - js_vidflow_api_10


##
### Parte 2 - Consumindo API
##

### 11 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_vidflow_api_11




### 12 - Preparando o ambiente: instalação do JSON

**Preparando o ambiente: instalação do JSON**

- Passo 1: Preparação - Instale o Node.js

Antes de começar, é importante ter o Node.js instalado em seu sistema. Não se preocupe se ainda não tiver, temos um guia de Como Instalar o Node.js (Windows, Linux e macOS).

Siga-o, e assim que o Node.js estiver instalado, volte aqui para continuar com a instalação do JSON Server.

- Link: https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos

- Passo 2: Instalação do JSON Server

Agora que você possui o Node.js, podemos prosseguir com a instalação do JSON Server. Vamos lá!

Abra seu terminal ou prompt de comando;

Para instalar o JSON Server globalmente, você só precisa digitar o seguinte comando e pressionar "Enter":

```
npm install -g json-server
```

Isso fará com que o JSON Server seja instalado globalmente em seu sistema, e você estará pronto para utilizá-lo em qualquer projeto.

- Passo 3: Preparando o arquivo JSON

Agora, o arquivo JSON videos.json, que está dentro da pasta backend do nosso projeto, servirá como a fonte de dados para o JSON Server. Para isso, copie o JSON a seguir e cole em videos.json:

```json
{
    "videos": [
      {
        "id": 1,
        "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
        "descricao": "3 mil visualizações",
        "url": "https://www.youtube.com/embed/y8FeZMv37WU",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Programação"
      },
      {
        "id": 2,
        "titulo": "Desmistificando mobile - Linguagens e Frameworks",
        "descricao": "1,5 mil visualizações",
        "url": "https://www.youtube.com/embed/fmu1LQvZhms",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Mobile"
      },
      {
        "id": 3,
        "titulo": "Orientação a objetos com Roberta Arcoverde | #Hipster...",
        "descricao": "30 mil visualizações",
        "url": "https://www.youtube.com/embed/jpuJ1qrluoU",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Programação"
      },
      {
        "id": 4,
        "titulo": "Linguagens e ferramentas usadas em Ciência de Dados...",
        "descricao": "2,5 mil visualizações",
        "url": "https://www.youtube.com/embed/h83e1aAM5xQ",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Data Science"
      },
      {
        "id": 5,
        "titulo": "Reencontrando a paixão por programar: Beatriz Ramerindo",
        "descricao": "1,2 mil visualizações",
        "url": "https://www.youtube.com/embed/CnB3eLTrkn4",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Podcasts"
      },
      {
        "id": 6,
        "titulo": "Híbridos: Flutter e React Native | Desmistificando..",
        "descricao": "1,6 mil visualizações",
        "url": "https://www.youtube.com/embed/vf9P_PycgRw",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Mobile"
      },
      {
        "id": 7,
        "titulo": "Data Science na prática- com Jéssika Ribeiro do Grupo...",
        "descricao": "3,2 mil visualizações",
        "url": "https://www.youtube.com/embed/Nts3P35mHzE",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Data Science"
      },
      {
        "id": 8,
        "titulo": "baNaNa | Memes do JavaScript #2",
        "descricao": "1,2 mil visualizações",
        "url": "https://www.youtube.com/embed/HBVCsBtsmzA",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "categoria": "Programação"
      },
      {
        "titulo": "[Casa do Código] Live de lançamento: Navegando no Universo da Programação",
        "descricao": "1 mil visualizações",
        "url": "https://www.youtube.com/embed/z43rcfjXOxU",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "id": 9,
        "categoria": "Ao Vivo"
      },
      {
        "titulo": "Guia de carreira Front-end | #HipstersPontoTube",
        "descricao": "18 mil visualizações",
        "url": "https://www.youtube.com/embed/fpth65ts3cw",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "id": 10,
        "categoria": "Debates"
      },
      {
        "titulo": "Educação coorporativa",
        "descricao": "4 mil visualizações",
        "url": "https://www.youtube.com/embed/IGFSiBJIXFQ",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "id": 11,
        "categoria": "Inovação"
      },
      {
        "titulo": "Como deixar o Layout Responsivo no seu site | #AluraMais",
        "descricao": "7 mil visualizações",
        "url": "https://www.youtube.com/embed/kyFiT4ofMwk",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "id": 12,
        "categoria": "Front-end"
      },
      {
        "titulo": "Será que a inteligência artificial será tão poderosa quanto os seres humanos? com Gui Silveira",
        "descricao": "12 mil visualizações",
        "url": "https://www.youtube.com/embed/Kk3vBRqKA2o",
        "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
        "id": 13,
        "categoria": "Inteligência Artificial"
      }
    ]
  }
```




- Passo 4: Permitindo política de execução de scripts (apenas Windows)

Caso você utiliza o Windows, é necessário que você siga os seguintes passos para conseguir executar o JSON Server:

- 1: Abra o PowerShell como administrador. Para fazer isso, pesquise "PowerShell" no menu Iniciar, clique com o botão direito do mouse sobre "Windows PowerShell" (ou "Windows Terminal") e selecione "Executar como administrador".

- 2: No PowerShell, você pode verificar a política de execução atual com o seguinte comando:

```
Get-ExecutionPolicy
```

A política de execução pode ser "Restricted" (Restrita), que é a configuração padrão que impede a execução de scripts.

- 3: Execute o seguinte comando para permitir a execução de scripts no seu computador:

```
Set-ExecutionPolicy RemoteSigned
```

- 4: O PowerShell pode solicitar confirmação para realizar a operação. Pressione "S" (Sim) ou "Y" (Yes) dependendo da linguagem do seu terminal e pressione Enter para confirmar.

Ao finalizar o curso, é uma boa prática reverter a política de execução de scripts para o valor original para garantir a segurança do sistema. Você pode fazer isso definindo a política de execução de volta para "Restricted" com o seguinte comando:

```
Set-ExecutionPolicy Restricted
```

- Passo 5: Inicialização do JSON Server

Agora que você tem o JSON Server e o arquivo JSON preparados, é hora de colocá-los em funcionamento:

- 1: Abra o terminal integrado do VSCode, assim o terminal irá abrir automaticamente dentro da pasta do projeto;

- 2: Execute o seguinte comando para iniciar o JSON Server e usá-lo com o arquivo videos.json:

```
json-server --watch backend/videos.json
```

*--watch: Este é um dos argumentos que você pode fornecer opcionalmente ao comando JSON Server. A opção --watch é usada para especificar que o servidor deve ficar "observando" um arquivo JSON específico para quaisquer mudanças. Isso significa que se você modificar o arquivo videos.json, o JSON Server automaticamente recarregará os dados para refletir as alterações.*

O JSON Server será iniciado e começará a servir uma API REST falsa com base nos dados do arquivo videos.json, o que vai nos permitir o consumo dos dados para o VidFlow.

Caso queira aprender mais sobre a instalação e uso do JSON Server, recomendamos o artigo Mockando APIs REST com json-server.

- Link: https://www.alura.com.br/artigos/mockando-apis-rest-com-json-server
- Localhost: http://localhost:3000/videos

- Exemplo:
  - js_vidflow_api_12


### 13 - Instalando o JSON Server

**Instalando o JSON Server**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_13


### 14 - Buscando dados na API

**Buscando dados na API**

- Exemplo:
  - js_vidflow_api_14


### 15 - Preparando o ambiente: código a ser utilizado

**Preparando o ambiente: código a ser utilizado**

No próximo vídeo, utilizaremos o código à seguir:

```html
<iframe src="" title="" frameborder="0" allowfullscreen></iframe>
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_15




### 16 - Exibindo os vídeos na aplicação

**Exibindo os vídeos na aplicação**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_16



### 17 - Capturando erros com .catch

**Capturando erros com .catch**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_17



### 18 - Para saber mais: Promises em JavaScript

**Para saber mais: Promises em JavaScript**

Para entender melhor as Promises, precisamos primeiro conhecer o conceito de programação assíncrona:

Na programação síncrona, o código é executado linha por linha, ou seja, uma linha de código não começará a ser executada até que a linha anterior tenha sido totalmente concluída. No entanto, na programação assíncrona, o código não espera que uma linha seja concluída antes de passar para a próxima. Isso é muito útil quando estamos realizando tarefas que podem demorar algum tempo, como carregar uma imagem ou buscar dados de um servidor.

As Promises em JavaScript são objetos que representam o estado de uma operação assíncrona. Uma Promise pode estar em um de três estados: pendente(estado inicial, nem cumprido nem rejeitado), resolvida/fulfilled (a operação assíncrona foi concluída com sucesso) ou rejeitada/rejected (a operação assíncrona falhou). Podemos criar uma Promise da seguinte forma:


```js
let promise = new Promise((resolve, reject) => {
    // código assíncrono aqui
    if (/* tudo ocorreu bem */) {
        resolve("funcionou!");
    } else {
        reject("houve um erro");
    }
});
```

No exemplo acima, temos uma função que recebe dois parâmetros: `resolve` e `reject`, que são funções que serão chamadas quando a Promise for resolvida ou rejeitada, respectivamente.

Depois que a Promise é retornada, podemos lidar com seu resultado utilizando o método `then` para o caso de sucesso (resolvida) e o método `catch` para o caso de erro (rejeitada):

```js
promise.then((message) => {
    console.log("Sucesso: " + message);
}).catch((message) => {
    console.error("Erro: " + message);
});
```

É importante lembrar que a promise só pode ser resolvida ou rejeitada uma vez. Se nós resolvermos e depois rejeitarmos uma mesma promise, a rejeição será ignorada.

Além disso, pode ser um desafio lidar com várias Promises. Para isso, temos disponíveis as funções `Promise.all` e `Promise.race`:

- `Promise.all`: recebe um array de Promises e retorna uma nova promise que resolve quando todas as Promises do array foram resolvidas ou uma delas foi rejeitada.

- `Promise.race`: retorna uma promise que se resolve ou rejeita com a resolução ou rejeição da primeira promiseno array a se resolver.

As Promises são uma parte importante do JavaScript moderno e são usadas em muitas bibliotecas e frameworks populares, como React e Angular. Ao entender como as Promises funcionam, você terá mais facilidade para lidar com código assíncrono efetivamente.

Para se aprofundar mais, acesse a documentação de Promises.

- Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

*Como dito na aula, se você quiser conhecer todos status HTTP que podem ser retornados em uma response, você pode acessar o HTTP Cats, que apresenta a descrição de todos os status com fotos de gatinhos* ��

- Link: https://http.cat/


- Exemplo:
  - js_vidflow_api_18


### 19 - Adicionando vídeos da API

**Adicionando vídeos da API**

Você está colaborando no projeto VidFlow, uma plataforma de compartilhamento de vídeos, e recebeu o código de busca de vídeos de outro desenvolvedor. Sua tarefa atual é aplicar tratamentos de erros a esse código. No entanto, antes de começar, é fundamental entender a responsabilidade de cada bloco de código:

```js
const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos")
  .then((res) => res.json())
  .then((videos) =>
    videos.forEach((video) => {
      containerVideos.innerHTML += `
        <li class="videos__item">
        <iframe width="100%" height="62%" src="${video.url}"
        title="${video.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    })
  );
```
Diante disso, qual bloco de código é responsável por percorrer os dados da API adicionando a lista de vídeos à página?

- Selecione uma alternativa

- A: `videos.forEach((video) => ...)`

`Este código percorre a lista de vídeos retornada pela API e executa o bloco de código para adicionar cada vídeo à página.`

- B: `.then((res) => res.json())`

- C: `const api = fetch("http://localhost:3000/videos")`

- D: `const containerVideos = document.querySelector(".videos__container");`

- E:  `containerVideos.innerHTML += ...`

- Exemplo:
  - js_vidflow_api_19





### 20 - Faça como eu fiz: praticando o consumo de dados em API

**Faça como eu fiz: praticando o consumo de dados em API**

Nesta aula, aprendemos como criar uma Fake API com um arquivo JSON. Também aprendemos a fazer uma modificação no arquivo "index.html" para exibir os vídeos na tela e criar o arquivo "script.js" para buscar os vídeos da API e renderizá-los na página.

Se você ainda não fez o código conforme na aula, agora chegou a sua vez de praticar!

*Caso encontre dificuldade, procure nossa comunidade no Discord ou o fórum do curso.*

- VER OPINIÃO DO INSTRUTOR


Para fixar os conteúdos que aprendemos, é essencial colocá-los em prática. Caso ainda não tenha feito isso, siga o passo a passo abaixo:

- No backend/videos.json:
  1. Adicione o objeto JavaScript de "vídeos";
  2. Inicie o JSON Server com o vídeo "Instalando o JSON Server".

- No index.html:
  1. Adicione um elemento "ul" com a classe videos__container, abaixo do formulário;
  2. Inclua um elemento script com src apontando para script.js antes de </body>.

- No script.js:
  1. Selecione o elemento .videos__container e atribua-o a containerVideos;
  2. Use fetch para obter os vídeos da URL http://localhost:3000/videos;
  3. Converta a resposta em JSON;
  4. Intere pelos vídeos e adicione-os ao ul com template strings;
  5. Exiba informações do vídeo, como título, descrição, URL e imagem;
  6. Trate erros com catch e mostre uma mensagem no ul.

- Exemplo:
  - js_vidflow_api_20






### 21 - Lista de exercícios

**Lista de exercícios**

Vamos praticar o que aprendemos até aqui?

1) Consumindo dados de uma API fake no projeto VidFlow

Você está desenvolvendo o front-end da aplicação VidFlow. Até agora, você trabalhou na estrutura e no estilo da aplicação; agora é hora de adicionar vídeos. Para simular uma situação real de consumo de dados de uma API, crie um arquivo json e insira os dados dos vídeos, ou utilize o mesmo arquivo json utilizado neste curso.

- Link: https://github.com/alura-cursos/alura-play-api/archive/refs/heads/main.zip

- Sua tarefa consiste em cumprir três ações:
  - Configure o JSON Server;
  - Crie um arquivo videos.json com dados fictícios de vídeos;
  - Utilize a API desenvolvida neste curso, ou personalize de acordo com o seu projeto.
  - Consuma esses dados na aplicação VidFlow. Os vídeos devem ser exibidos na página principal da aplicação, cada um com seu título, descrição e thumbnail.

- Para realizar essa tarefa, siga os seguintes passos:
  - Instale o JSON Server globalmente em sua máquina utilizando o comando npm install -g json-server;
  - Crie uma pasta chamada “backend” no seu projeto e, dentro dela, crie um arquivo videos.json. Preencha este arquivo com um array de objetos, onde cada objeto representa um vídeo. Cada vídeo deve ter um id, titulo, descrição, e thumbnail;
  - Inicie o JSON Server utilizando o comando json-server --watch backend/videos.json para servir os dados dos vídeos;
  - Acesse http://localhost:3000/videos no seu navegador para verificar se a API fake está funcionando corretamente e os dados estão sendo servidos;
  - Modifique sua aplicação VidFlow para consumir os dados da API fake. Você pode utilizar fetch ou qualquer biblioteca HTTP de sua preferência para realizar as requisições;
  - Exiba os vídeos na página principal da aplicação, mostrando o título, descrição, e thumbnail de cada um.

2) Exibindo vídeos dinamicamente

Imagine que você é responsável por atualizar a seção de vídeos de um website de tecnologia. Sua tarefa é integrar uma lista de vídeos educativos disponibilizados por uma API, exibindo-os de forma dinâmica na página. Você utilizará JavaScript para consumir a API e adicionar cada vídeo, junto com seus detalhes, dentro de uma lista ul com a classe videos__container no index.html.

- Siga as instruções para realizar a demanda:
  - Acesse o arquivo index.html e adicione uma ul com a classe videos__container;
  - No arquivo script.js, utilize fetch para consumir a API que retorna os dados dos vídeos;
  - Para cada vídeo retornado pela API, crie dinamicamente elementos li contendo um iframe para o vídeo, uma imagem representando o canal (com alt text "Logo do Canal"), o título do vídeo, e a descrição do canal;
  - Garanta que cada iframe inclua o atributo allowfullscreen (em português, permitir tela cheia) para permitir visualização em tela cheia;
  - Use template strings para inserir dinamicamente os valores de URL do vídeo, título, imagem do canal, e descrição dentro do HTML.

3) Exibindo mensagens de erro personalizadas

Sua próxima tarefa é: garanta que, ao carregar a lista de vídeos a partir de uma API, os usuários sejam informados de maneira amigável caso ocorra algum erro durante o processo de carregamento. Utilize o método .catch() para capturar erros na chamada da API e exiba uma mensagem personalizada no lugar da lista de vídeos.

- Opinião do instrutor

Veja as soluções dos exercícios, lembrando de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Consumindo dados de uma API fake no projeto VidFlow

Já vimos algumas dicas no enunciado da questão. Vamos ver a solução completa do exercício:

  - Instalação do JSON Server: Instale o JSON Server globalmente usando o comando npm install -g json-server. Isso permite que você crie uma API fake rapidamente para o desenvolvimento e teste de aplicações front-end;
  - Criação do arquivo videos.json: Crie uma pasta “backend” em seu projeto e, dentro dela, o arquivo videos.json. Neste arquivo, você vai simular os dados dos vídeos. Por exemplo:

Código JSON de exemplo:

```js
[  {    "id": 1,    "titulo": "Aprendendo React em 30 minutos!",    "descricao": "Um tutorial rápido sobre como começar com React.",    "url": "url_do_video_aqui"  },  {    "id": 2,    "titulo": "Dicas de JavaScript",    "descricao": "Melhore suas habilidades em JavaScript com estas dicas!",    "url": "url_do_video_aqui"  }]
```

  - Inicialização do JSON Server: Utilize o comando json-server --watch backend/videos.json para servir os dados do arquivo videos.json. Isso inicia a API fake que simula um back-end fornecendo os dados dos vídeos;
  - Acesso à API fake: Verifique se a API está funcionando corretamente acessando http://localhost:3000/videos. Você deverá ver os dados dos vídeos que inseriu no arquivo videos.json.

2) Exibindo vídeos dinamicamente

A resolução deste exercício consiste em dois passos:

1) Acesse o index.html e insira a ul, conforme o código HTML abaixo:

```html
<ul class="videos__container"></ul>
```

2) Capture o container dos vídeos no script.js, conforme o código JavaScript abaixo:

```js
const containerVideos = document.querySelector(".videos__container");

// Utilize a função fetch para consumir a API:
const api = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos) => {
    videos.forEach((video) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    });
});
```

3) Exibindo mensagens de erro personalizadas

- Certifique-se de que esteja correta a seleção do container onde os vídeos serão exibidos, usando document.querySelector(".videos__container");
- Utilize o método fetch() para tentar carregar os vídeos da API;
- Use .then() para tratar a resposta e converter os dados recebidos em JSON;
- Utilize outro .then() para processar os vídeos e inseri-los no HTML;
- No método .catch(), insira uma mensagem personalizada no container de vídeos, informando o usuário sobre o erro de carregamento. A mensagem pode ser personalizada para ser mais amigável e informativa.

Veja uma possível solução em código JavaScript:

```js
const containerVideos = document.querySelector(".videos__container");

fetch("http://localhost:3000/videos")
.then(res => res.json())
.then(videos => {
    videos.forEach(video => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    });
})
.catch(error => {
    containerVideos.innerHTML = `<p style="color: red;">Houve um erro ao carregar os vídeos: ${error}. Por favor, tente novamente mais tarde.</p>`;
});
```

Muito bom! Você chegou ao fim de mais uma lista de exercícios!

- Exemplo:
  - js_vidflow_api_21



### 22 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu:
  - O que é e como instalar a API Fake JSON Server;
  - Como fazer a busca dos dados na API com o Fetch;
  - Como lidar com .then e com Promises;
  - Como manipular o DOM para exibir os dados da API;
  - Como usar o .catch para capturar erros.

- Exemplo:
  - js_vidflow_api_22


##
### Parte 3 - Aprimorando o código
##


### 23 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_vidflow_api_23



### 24 - Async/Await

**Async/Await**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_24




### 25 - Tratando erros com try…catch

**Tratando erros com try…catch**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_25


### 26 - Para saber mais: Callback Hell

**Para saber mais: Callback Hell**


Entendendo Callbacks

Imagine que você está preparando uma refeição e coloca o pão na torradeira. Agora, você não vai ficar parado olhando para a torradeira até que ela finalize, você provavelmente vai fazer outra coisa, como preparar café, até o momento em que a torradeira apitar, indicando que o pão está pronto. Nesse cenário da cozinha, o apito da torradeira funciona como um callback na programação.

Callbacks em JavaScript:

Em JavaScript, um callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou evento específico. Os callbacks são amplamente utilizados para lidar com tarefas assíncronas, como chamadas de API, leitura de arquivos, eventos de usuário e muito mais.

O Problema do "Callback Hell":

O "Callback Hell" é um termo usado para descrever a situação em que múltiplas chamadas de função com callbacks são aninhadas profundamente dentro de outras chamadas de função. Isso cria um código que se assemelha a uma pirâmide, tornando-o difícil de ler, manter e depurar. À medida que mais operações assíncronas são adicionadas, a complexidade do código aumenta rapidamente.

Exemplo de "Callback Hell" com .then:

Vamos considerar um exemplo hipotético de "Callback Hell" usando .then para encadear operações assíncronas. Suponhamos que desejamos executar três tarefas assíncronas sequenciais, onde cada uma depende do resultado da anterior:

```js
fazerAlgoAsync()
  .then(resultado1 => {
    console.log(resultado1);
    return fazerOutraCoisaAsync();
  })
  .then(resultado2 => {
    console.log(resultado2);
    return fazerMaisAlgoAsync();
  })
  .then(resultado3 => {
    console.log(resultado3);
  })
  .catch(erro => {
    console.error('Ocorreu um erro:', erro);
  });
```

Nesse exemplo, fazerAlgoAsync, fazerOutraCoisaAsync e fazerMaisAlgoAsync representam operações assíncronas, como chamadas de API ou acesso a banco de dados. Cada uma retorna uma Promise, que é encadeada usando .then. A complexidade aumenta à medida que mais operações são adicionadas, tornando o código difícil de entender e manter.

Conclusão:

Embora os callbacks sejam úteis para controlar fluxos de execução assíncronos, é importante evitar o "Callback Hell" sempre que possível. Alternativas, como o uso de Async-Await, tornam o código mais legível e manutenível, especialmente em projetos maiores. Entender como lidar com callbacks de forma eficaz é fundamental para desenvolver aplicativos JavaScript robustos e de fácil manutenção. Para se aprofundar mais no assunto, recomendamos que acesse a Introdução ao JavaScript Assíncrono e também acesse a documentação das Funções Callback.

- Introdução ao JavaScript Async
  Link: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing#manipuladores_de_eventos_2

- Função Callback
  - Link: https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

- Exemplo:
  - js_vidflow_api_26












### 27 - Tratando erros específicos

**Tratando erros específicos**

Você foi encarregado de refatorar o código do VidFlow para lidar melhor com os erros. Por isso, precisa implementar uma regra específica que sinalize um erro caso um vídeo que venha da API não tenha descrição.

Para corrigir esse problema, você decidiu utilizar o bloco de tratamento de erros try…catch para capturar erros do navegador e agora precisa construir um código que exiba o erro específico quando um vídeo não possua descrição.

Qual das implementações abaixo funcionaria para tratar esse erro?

- Selecione uma alternativa

- A:

```js
try {
  videos.forEach((video)=> {
    if(video.descricao == ""){
      throw new Error('Vídeo não tem descrição’);
    }
    //resto do código
  }
} finally {
  console.log("Operação finalizada.");
}
```

- B:

```js
videos.forEach((video)=> {
  try {
    if(video.descricao == ""){
      throw new Error('Vídeo não tem descrição’);
    }
    //resto do código
  } catch(error) {
    console.log(error);
  }
})
```

- C:

```js
try {
  videos.forEach((video)=> {
    if(video.descricao == ""){
      throw new Error('Vídeo não tem descrição’);
    }
    //resto do código
  })
} catch(error) {
  console.log(error);
}
```
`Com essa implementação, o código irá parar de executar assim que um vídeo sem descrição for encontrado. O erro é, então, capturado pelo bloco catch e tratado.`

- D:

```js
try {
  videos.forEach((video)=> {
    if(video.descricao == ""){
      console.log("Vídeo não tem descrição");
    }
    //resto do código
  })  
} catch(error) {
  console.log(error);
}
```

- Exemplo:
  - js_vidflow_api_27


### 28 - Faça como eu fiz: praticando a melhoria de código

**Faça como eu fiz: praticando a melhoria de código**


Nessa aula, buscamos e mostramos vídeos a partir de uma API, dessa vez utilizando uma função Async/await. Após uma busca bem-sucedida, os vídeos são exibidos na página normalmente, mas dessa vez sem nos preocuparmos com o Callback Hell. Também tratamos os erros com o try…catch e caso algum vídeo não possua uma categoria, será lançado um erro e uma mensagem de erro será exibida em vez dos vídeos.

Caso você não tenha feito ainda, que tal colocar em prática essas funcionalidades?

- VER OPINIÃO DO INSTRUTOR

Lembre-se de que a prática é essencial no aprendizado de programação. Vamos ao código para aplicar o que aprendemos. Mãos à obra!

- No arquivo "script.js":

1. Crie uma função assíncrona "buscarEMostrarVideos";

2. Use `try` para buscar e converter vídeos em JSON com `fetch`;

3. Adicione uma tag `<p class="categoria" hidden>${video.categoria}</p>` para cada vídeo;

4. Verifique se os vídeos têm categoria no loop e lance um erro com throw se não tiverem;

5. Capture erros com `catch` e exiba uma mensagem de erro no elemento `containerVideos`;

6. Chame a função `buscarEMostrarVideos` para buscar e mostrar vídeos, respeitando a regra das categorias.

Dessa forma, ao executar o script, a função `buscarEMostrarVideos` será chamada e os vídeos serão buscados e exibidos na página, respeitando a regra de que apenas vídeos com categoria serão mostrados. Em caso de erro, uma mensagem específica será exibida.


- Exemplo:
  - js_vidflow_api_28



### 29 - Lista de exercícios

**Lista de exercícios**

Vamos praticar o que aprendemos até aqui?

1) Refatorando para async/await

Imagine que você trabalha em um projeto de desenvolvimento web e sua liderança solicitou a otimização do carregamento de dados de uma API de vídeos educacionais. Atualmente, o código utiliza muitos .then() para tratar as promessas, tornando-o difícil de ler e consertar. Sua tarefa é refatorar o código que você desenvolveu no exercício da aula anterior chamado “Exibindo mensagens de erro personalizadas”, substituindo os .then() por async/await, visando a melhorar a legibilidade e a manutenção do código.

2) Aplicando try/catch com finally

Você percebeu que, além do tratamento de erros, seria interessante implementar uma lógica que sempre execute uma ação após as tentativas de carregar os vídeos, independentemente de haver sucesso ou falha na operação. Utilize o bloco finally para mostrar uma mensagem no console que confirme a tentativa de carregar os vídeos, demonstrando a aplicação do bloco finally em operações assíncronas.

- Opinião do instrutor

Veja as soluções dos exercícios, lembrando de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Refatorando para async/await

Crie uma função assíncrona utilizando async function nomeDaFuncao() {};
Declare, antes de realizar a chamada à API, a função como assíncrona, adicionando async antes da declaração da função;
Substitua os .then() por await para esperar pelas respostas das promessas. Por exemplo, substitua fetch("URL").then(res => res.json()) por const resposta = await fetch("URL"); const dados = await resposta.json();;
Aproveite para melhorar a legibilidade do código, renomeando variáveis de forma mais descritiva e ajustando a indentação.
Veja uma possível solução em código JavaScript:

```js
async function buscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video) => {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
            `;
        });
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error} </p>`;
    }
}

buscarEMostrarVideos();
```

2) Aplicando try/catch com finally

- Siga a mesma estrutura do exercício anterior para criar uma função assíncrona com tratamento de erros usando `try/catch`;
- Após o bloco `catch`, inclua um bloco `finally`. Dentro deste bloco, insira uma ação que você deseja que aconteça sempre após a tentativa de carregar os vídeos, como mostrar uma mensagem no console.

*Essa prática é útil para ações de limpeza ou confirmação, como fechar conexões de banco de dados, remover indicadores de carregamento da UI, ou simplesmente confirmar o término da operação.*

Veja uma possível solução em código JavaScript:

```js
async function buscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video) => {
            // Código para tratar cada vídeo
        });
    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    } finally {
        console.log('Tentativa de carregar vídeos finalizada.');
    }
}

buscarEMostrarVideos();
```

- Exemplo:
  - js_vidflow_api_29


### 30 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
  - Evitar o “Callback Hell”;
  - Refatorar o código assíncrono com Async/await;
  - Realizar tratamento de erros com os blocos Try-Catch-Finally;
  - Tratar erros personalizados com o throw new Error.

- Exemplo:
  - js_vidflow_api_30


##
### Parte 4 - Criando filtros de exibição
##


### 31 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_vidflow_api_31


### 32 - Vinculando evento à barra de pesquisa

**Vinculando evento à barra de pesquisa**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_32


### 33 - Construindo a lógica de pesquisa

**Construindo a lógica de pesquisa**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_33


### 34 - Desafio: refatorando a barra de pesquisa

**Desafio: refatorando a barra de pesquisa**

Neste desafio, você terá a oportunidade de praticar os seus conhecimentos sobre refatoração de código para melhorar a funcionalidade da barra de pesquisa do VidFlow. O código atual funciona, mas pode ser aprimorado para maior clareza e eficiência.

- Abaixo, temos alguns passos que podem te auxiliar nesse processo:
  - Analise o código atual e compreenda como a barra de pesquisa filtra os vídeos com base no título;
  - Pense em outras possíveis estruturas de loop para percorrer os elementos videos;
  - Observe se há uso de variáveis desnecessárias;
  - Pense em maneiras de deixar a estrutura condicional mais concisa;
  - Garanta que a funcionalidade de exibir/ocultar vídeos seja mantida.

*Caso sinta alguma dificuldade, observe o gabarito com o código refatorado como referência para a melhoria do código. Certifique-se de que seu código final funcione da mesma forma, mas com melhor legibilidade e eficiência*.

Boa sorte na refatoração!

- Opinião do instrutor

Implementamos a refatoração da seguinte forma:

```js
function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}
```

O código ainda cumpre a mesma função, mas está mais conciso e organizado. Isso ocorreu graças a duas principais mudanças:

- Substituição do Loop for...of por forEach: O loop for...of é substituído por forEach para percorrer os elementos videos. Isso torna o código mais legível e conciso.

- Condição Ternária: A lógica condicional que define o estilo de exibição (display) dos vídeos é simplificada usando uma condição ternária. Isso elimina a necessidade de blocos if...else.

Quando escrevemos código, é muito importante pensar não só na funcionalidade, mas também na organização do que estamos escrevendo, afinal aquele código pode precisar de manutenções futuras e é essencial que todas as pessoas desenvolvedoras que o leiam, compreendam. Nem sempre o melhor código vai ser o mais curto, mas é crucial que você se lembre sempre de “codar” de modo organizado e legível.

- Exemplo:
  - js_vidflow_api_34


### 35 - Adicionando filtro de categorias

**Adicionando filtro de categorias**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_35


### 36 - Criando a lógica de filtragem

**Criando a lógica de filtragem**

- Roda o --watch
```
json-server --watch backend/videos.json
```

- Exemplo:
  - js_vidflow_api_36


### 37 - Manipulando a filtragem de vídeos

**Manipulando a filtragem de vídeos**

Uma das funções que você aprendeu a implementar no VidFlow foi "filtrarPorCategoria", que permite aos usuários visualizar vídeos com base em categorias específicas.

Agora, imagine o seguinte cenário: a categoria "música" deve ser exibida independentemente do filtro escolhido pelo usuário.

Como você alteraria a função "filtrarPorCategoria" para garantir que os vídeos da categoria "música" fossem sempre exibidos, independentemente do valor do filtro?

- A: 

```js
if((!categoria.includes(valorFiltro) || categoria == 'musica') && valorFiltro != 'tudo'){
    video.style.display = "none";
}
```

- B: 

```js
if((!categoria.includes(valorFiltro) && categoria != "musica") && valorFiltro != 'tudo'){
    video.style.display = "none";
} else {
    video.style.display = "block";
}
```

`Muito bem! Essa opção verifica se a categoria não inclui o valorFiltro e se a categoria não é "musica". Se ambas as condições forem verdadeiras, o vídeo é ocultado (display = "none"). Caso contrário, o vídeo é exibido (display = "block").`

- C: 

```js
if(categoria != filtro && valorFiltro._contains('musica') && valorFiltro != 'tudo'){
    video.style.display = "none";
}
```

- D: 

```js
if(valorFiltro != 'tudo' && categoria != 'musica'){
    video.style.display = "none";
} else {
    video.style.display = "block";
}
```

- Exemplo:
  - js_vidflow_api_37




### 38 - Projeto final

**Projeto final**

- Exemplo:
  - js_vidflow_api_38


### 39 - Lista de exercícios

**Lista de exercícios**



Vamos praticar o que aprendemos até aqui?

1) Implementando uma barra de pesquisa com JavaScript

A próxima tarefa será a implementação de uma funcionalidade de pesquisa que permita aos usuários filtrar os vídeos disponíveis por título. Utilize JavaScript para criar uma barra de pesquisa funcional que atenda a essa necessidade. Siga as orientações abaixo:

No arquivo index.html, certifique-se de que cada vídeo esteja dentro de um elemento com a classe .videos__item e que cada um tenha um atributo data-title contendo o título do vídeo;
No arquivo script.js, utilize o código fornecido para iniciar a implementação da barra de pesquisa;
Modifique a função filtrarPesquisa para que ela compare o valor inserido na barra de pesquisa com o atributo data-title de cada vídeo, tornando visíveis apenas os vídeos cujos títulos correspondam ao texto pesquisado.

2) Filtrando conteúdo dinamicamente

Imagine que você está desenvolvendo um site de reviews de filmes. Sua liderança solicitou que, para melhorar a experiência do usuário, você implemente uma barra de pesquisa que permita aos usuários filtrar os filmes por título. Os filmes estão listados em cards na página, cada um com uma classe .filme-card e o título está dentro de um elemento com a classe .titulo-filme. Crie a lógica JavaScript para essa barra de pesquisa funcionar, de forma que, ao digitar no campo de pesquisa, apenas os filmes cujos títulos correspondam ao texto inserido sejam exibidos.

3) Criando um filtro de categorias dinâmico para seu site

Você já possui a estrutura básica do site e agora precisa adicionar a funcionalidade de filtragem de categorias, utilizando JavaScript para manipular os elementos da página com base na categoria selecionada pelo usuário.

O site já está recebendo as categorias dos vídeos por meio de uma API e armazenando essas informações de forma oculta na página, dentro de elementos <p> com a classe .categoria. Seu objetivo é criar uma função, podendo se chamar por exemplo, filtrarPorCategoria que receba um argumento filtro, correspondendo à categoria que o usuário deseja visualizar.

A função deve iterar sobre todos os vídeos disponíveis na página, comparar a categoria de cada vídeo com o filtro selecionado e, com base nisso, decidir se o vídeo deve ser exibido ou escondido.

Você pode seguir essas dicas para realizar o exercício:

Capture todos os elementos de vídeo na página.
Para cada vídeo, obtenha a categoria a partir do elemento oculto.
Compare a categoria do vídeo com o filtro selecionado pelo usuário.
Se a categoria não corresponder ao filtro e o filtro for diferente de "tudo", esconda o vídeo. Caso contrário, mostre o vídeo.
Lembre-se de que o filtro "Tudo" deve exibir todos os vídeos, independentemente de suas categorias.

- VER OPINIÃO DO INSTRUTOR


Veja as soluções dos exercícios, lembrando de que há várias maneiras de solucionar um mesmo problema (e tudo bem caso seu código tenha saído diferente). O importante é que ele esteja organizado, bem escrito e funcione.

1) Implementando uma barra de pesquisa com JavaScript

Identifique a barra de pesquisa e os vídeos no HTML:
A barra de pesquisa é identificada pela classe .pesquisar__input;
Cada vídeo deve ter uma classe .videos__item e um atributo data-title com o título do vídeo;
No script.js, a constante barraDePesquisa já está criada para selecionar o elemento da barra de pesquisa.
Implemente a função filtrarPesquisa:
Use document.querySelectorAll(".videos__item") para selecionar todos os vídeos;
Itere sobre cada vídeo com forEach para verificar se o título do vídeo (obtido através - do atributo data-title) contém o texto digitado na barra de pesquisa.
Mostre apenas os vídeos que correspondem ao termo da pesquisa, escondendo os demais.
Veja uma possível solução em código JavaScript:

```js
const barraDePesquisa = document.querySelector(".pesquisar__input");

function filtrarPesquisa() {
    const termoPesquisa = barraDePesquisa.value.toLowerCase();
    const videos = document.querySelectorAll(".videos__item");

    videos.forEach(video => {
        const titulo = video.getAttribute("data-title").toLowerCase();
        if (titulo.includes(termoPesquisa)) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
}

barraDePesquisa.addEventListener("input", filtrarPesquisa);
```

2) Filtrando conteúdo dinamicamente

Para implementar a barra de pesquisa que filtra filmes por título no site de reviews de filmes, siga os passos abaixo:

Selecione o input da barra de pesquisa e armazene em uma variável;
Utilize o método document.querySelector() com a classe ou ID do campo de pesquisa;
Adicione um evento de input ao campo de pesquisa para detectar cada vez que o usuário digita algo;
Selecione, dentro da função de callback do evento, todos os cards de filmes utilizando document.querySelectorAll() e a classe .filme-card;
Percorra cada filme com um loop for...of. Para cada filme, obtenha o texto do título e converta-o para minúsculo para facilitar a comparação;
Compare o título do filme com o valor atual do campo de pesquisa (também convertido para minúsculo). Se o título não incluir o valor de pesquisa, oculte o filme com style.display = "none". Caso contrário, exiba-o com style.display = "block".
Veja uma possível solução em código JavaScript:

```js
const barraDePesquisa = document.querySelector("#barra-pesquisa-filmes");

barraDePesquisa.addEventListener("input", function() {
    const termoPesquisa = barraDePesquisa.value.toLowerCase();
    const filmes = document.querySelectorAll(".filme-card");

    for (let filme of filmes) {
        const titulo = filme.querySelector(".titulo-filme").textContent.toLowerCase();
        if (!titulo.includes(termoPesquisa)) {
            filme.style.display = "none";
        } else {
            filme.style.display = "block";
        }
    }
});
```

3) Criando um filtro de categorias dinâmico para seu site
No seu arquivo HTML, adicione botões de filtro. Cada botão deve ter um atributo name que corresponde à categoria que ele representa. Veja um exemplo de HTML:

```html
<button class="superior__item" name="debates">Debates</button>
<button class="superior__item" name="ao vivo">Ao vivo</button>
<button class="superior__item" name="podcasts">Podcasts</button>
<button class="superior__item" name="front-end">Front-end</button>
<button class="superior__item" name="tudo">Todos</button>
```

No arquivo JavaScript, selecione todos os botões de categoria e adicione um evento de clique que chama a função filtrarPorCategoria com o nome da categoria como argumento, conforme o exemplo JavaScript:

```js
const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
});
```

Implemente a função filtrarPorCategoria para filtrar os conteúdos. Esta função deve iterar sobre todos os itens de conteúdo, verificar se a categoria do conteúdo corresponde à categoria selecionada (ou mostrar todos os conteúdos se a categoria for "tudo") e alterar a propriedade de exibição conforme necessário, conforme código JavaScript abaixo:

```js
function filtrarPorCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
```
Muito bom! Você chegou ao fim de mais uma lista de exercícios!

- Exemplo:
  - js_vidflow_api_39

























































































































































































