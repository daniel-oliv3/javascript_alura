##
### JavaScript para Web: Crie páginas dinâmicas
##

<p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p>


##
### Parte 1 - Conhecendo o JavaScript
##


### 1 - Introdução

**Introdução**

- Visual Studio Code
  - Link: https://code.visualstudio.com/Download


- NodeJS
  - Link; https://nodejs.org/en


- Exemplo:
  - script_01


### 2 - Baixando o projeto

**Baixando o projeto**

Preparando o ambiente

Para realizarmos este curso, usamos um editor de código chamado Visual Studio Code. Se você quiser usá-lo também pode baixar tanto para Windows, como Linux ou Mac.

Porém fique a vontade para usar seu editor de código favorito.

Além disso, estamos usando o Firefox como navegador principal e é importante tê-lo instalado em seu computador, assim como o Chrome onde realizamos testes também.

Baixando o projeto
Após preparar o ambiente, vamos precisar baixar o projeto em seu computador:

Baixe o zip. Extraia a pasta do zip, e coloque a pasta dos arquivos iniciais em algum lugar de fácil acesso, como na Área de Trabalho (Desktop/Mesa) do computador.

Se preferir pode renomear a pasta de aluramidi-curso-arquivos-iniciais para apenas aluramidi.

Abra seu editor de código e abra a pasta do projeto aluramidi.

Agora podemos começar!

- Vscode:
  - Link: https://code.visualstudio.com/download

- Google Chrome:
  - Link: https://www.google.com/intl/pt-BR/chrome/


- Firefox:
  - Link: https://www.mozilla.org/pt-BR/firefox/new/


- Exemplo:
  - script_02



### 3 - Clicando no botão

**Clicando no botão**

- Exemplo:
  - script_03


### 4 - Conectar JS com o HTML

**Conectar JS com o HTML**


- Exemplo:
  - script_04



### 5 - Buscar um elemento

**Buscar um elemento**


- Exemplo:
  - script_05



### 6 - Para que serve o DevTools?

**Para que serve o DevTools?**


A ferramenta DevTools presente nos navegadores web é de grande ajuda para comunidade de desenvolvedores web, a ponto de serem apelidados carinhosamente de “melhor amiga/o” da pessoa desenvolvedora.

Marque as alternativas com afirmações verdadeiras a respeito da ferramenta DevTools.

- Selecione 2 alternativas

- A: Através dessa ferramenta, conseguimos editar a aplicação em tempo de execução, adicionar ou remover tags HTML, mexer no CSS da página, escrever código JavaScript no console e ver as modificações sem persistência.
  - `Alternativa correta! É isso mesmo! Com essa ferramenta, conseguimos realizar modificações em tempo real tanto de HTML, como de CSS e JavaScript, porém sem alterar o código fonte real.`

- B: Diferente do método tradicional para resolver problemas do código fonte que consistia em abrir o código e olhar linha a linha para descobrir o erro, o DevTools apresenta uma maneira mais simples e direta do problema no código, bastando acessar a aba Console que lá estará indicando o tipo e o arquivo onde se encontra o erro.
  - `Alternativa correta! Como conseguimos mexer em tempo real no código da aplicação através do navegador, uma prática muito comum, principalmente se tratando do CSS, é ir escrevendo as propriedades e vendo como o site se comporta, para aí depois, colocar o código final no código fonte da aplicação.`

- C: É o programa ou editor de texto principal utilizado escrever, salvar e desenvolver o código fonte de páginas e aplicações web.


- Exemplo:
  - script_06





### 7 - Faça como eu fiz: Brinque com seletores no JS

**Faça como eu fiz: Brinque com seletores no JS**

Praticar ajuda bastante no aprendizado de um novo conceito, assim, é muito importante que você esteja sempre praticando. Pensando nisso, gostaria de propor este pequeno desafio que envolve o que foi visto em aula.

A partir deste código a seguir:

- HTML

```html
<h1> Alura Fone </h1>
 <section class="teclado">
    <input type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <input type="button" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <input type="button" value="7">
    <input type="button" value="8">
    <input type="button" value="9">
    <input type="button" value="*">
    <input type="button" value="0">
    <input type="button" value="#">
  </section>
  <input type="tel" placeholder="Digite seu telefone">
```

- CSS

```css
* {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191919;
  min-height: 100vh;
}

input {
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #fff;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; 
  background-color: #cccccc;
  border-radius: 30px;
  padding: 10px;
}

input[type=button] {
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  width: 80px;
}

input[type=tel] {
  background-color: #cccccc;
  border-radius: 10px;
  font-family: monospace;
  font-size: 22px;
  height: 40px;
  margin-bottom: 24px;
  padding: 10px;
  text-align: center;
  width: 280px;
}
```


Escreva o código em JavaScript capaz de selecionar o elemento HTML `input` do tipo telefone:

Como fazer:

- Abra o editor de código de sua preferência;
- Crie dois arquivos: desafio.html e desafio-estilo.css;
- Copie o código acima e cole dentro da tag `<body>` do arquivo chamado desafio.html e o código CSS no arquivo desafio-estilo.css;
- Para resolver este desafio, você pode usar apenas a aba Console da ferramenta DevTools;


- Opinião do instrutor

Gabarito:

```js
document.querySelector('input[type=tel]');
```

Para selecionar o elemento HTML `input` do tipo `tel` podemos utilizar o código `document.querySelector(‘input[type=tel]’)`, porquê com essa linha, o JavaScript vai acessar o documento HTML (representado por `document`) e procurar pelo elemento `input` que tenha como atributo `[type=tel]`, os colchetes fazem parte da sintaxe para seleção de atributos de um elemento HTML, funciona tanto para o CSS quanto para o Javascript.

- Exemplo:
  - script_07







### 8 - Para saber mais: HTML x CSS x JavaScript

**Para saber mais: HTML x CSS x JavaScript**

Para que fique mais claro o porquê de se utilizar arquivos separados para HTML e JavaScript, leia o artigo da instrutora Rafaella Ballerini, que explica a diferença entre essas linguagens.

Artigo: HTML X CSS X JavaScript. Quais as diferenças?

- Link: https://www.alura.com.br/artigos/html-css-e-js-definicoes?


- Exemplo:
  - script_08


### 9 - O que aprendemos?

**O que aprendemos?**


Nessa aula, você aprendeu:
Clicando no botão:
Conhecemos a tag `audio` do HTML e como ela funciona, também como adicionar código JavaScript inline a partir do atributo `onclick` na tag `button`, e também como é a função `alert()` do JavaScript.

- Conectar JS com HTML:

Aprendemos porque devemos ter arquivos dedicados para cada linguagem, e a extensão .js para arquivos com JavaScript, porque chamamos o nosso arquivo principal de JavaScript de `main.js`, e também, como fazemos para inserir um arquivo .js dentro de uma página HTML com a tag `script`.

- Buscar um elemento:

Aprendemos os tipos de seletores que podemos usar no JavaScript (elemento, classe e id), como utilizar a função `querySelector` para selecionar os elementos da nossa página HTML. Vimos nesta aula a referência `document`, que representa o documento HTML dentro do JavaScript, e o que significa o Reference Error e como solucionar, além de entender que o JavaScript é uma linguagem case sensitive, e uso do operador ponto final para entrar dentro de referências como o `document`, e que o ponto e virgula é opcional porém recomendado.


- Exemplo:
  - script_09

##
### Parte 2 - Funções
##


### 10 - Projeto da aula anterior

**Projeto da aula anterior**

Aqui você pode baixar o projeto do curso no ponto em que paramos na aula anterior.

Baixe o zip ou visualize os arquivos no Github!

- Exemplo:
  - script_10


### 11 -  Play no JS

**Play no JS**

- Exemplo:
  - script_11


### 12 - O que é uma função?

**O que é uma função?**

- Exemplo:
  - script_12




### 13 - O local da tag script?

**O local da tag script?**

Como vimos nesta aula, é possível inserir um arquivo JavaScript em dois locais do documento HTML, dentro da tag `head` ou da tag `body`.

Com base nessas informações, devemos colocar o JavaScript dentro da tag `body` logo antes do seu fechamento, `</body>`, quando:

- Selecione uma alternativa

- B: Nosso código JavaScript não depende obrigatoriamente de nenhum elemento dentro da tag <body>.
`Alternativa correta! Quando o código JavaScript que vamos adicionar depende de elementos que estão no body, por exemplo um querySelector que espera receber determinado seletor, o local mais apropriado para sua inserção é dentro da tag body e na linha anterior ao fechamento da tag </body>. No head podemos inserir scripts, porém eles não devem ter dependencias de elementos do body, por exemplo uma biblioteca de funcionalidades.`


- A: O script depende de elementos do body já carregados pelo navegador.


- C: Não faz diferença entre carregar o arquivo JavaScript dentro da tag body ou head, ambas abordagens funcionam normalmente.

- Exemplo:
  - script_13



### 14 - Faça como eu fiz: Para que serve uma função?

**Faça como eu fiz: Para que serve uma função?**

Como vimos nesta aula, declaramos uma função no JavaScript quando precisamos guardar um código que será executado num segundo momento, ou seja apenas quando ele for chamado/invocado.

Agora declare a função `tocaSomClap`, e desenvolva dentro dela o código necessário para dar play no áudio do som clap.

- Opinião do instrutor

Gabarito:

```js
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}
```

Para declarar uma função no JavaScript, usamos a palavra `function` e depois o nome que escolhemos, no caso `tocaSomClap` seguido da sua sintaxe padrão, que são os parênteses e depois chaves.

O espaço dentro das chaves é conhecido como bloco ou corpo da função, e é nele que colocamos o script que desejamos executar quando a função for chamada.

Como queremos executar o som do clap, devemos localizar o elemento `audio` pelo seu seletor id: `#som_tecla_clap`.

```js
 document.querySelector('#som_tecla_clap')
```

Este código irá retornar o elemento, portanto logo em seguida já podemos usar o operador ponto para entrar dentro deste elemento e já acessar a função `play()` que é nativa dos elementos `audio` do HTML.

```js
 document.querySelector('#som_tecla_clap').play()
```

- Exemplo:
  - script_14

























































