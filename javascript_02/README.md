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


### 15 - Clique no botão

**Clique no botão**

- Exemplo:
  - script_15


### 16 - O que aprendemos?

**O que aprendemos?**

Nesta aula, você aprendeu:

- Play no JS:

Como manipular a tag `<audio>` do HTML através do JavaScript, como selecionar um elemento a partir de um seletor de id e a reproduzir um som a partir da função `play()`. Além disso, viu também como os erros são apresentados na aba Console da ferramenta DevTools.

- O que é uma função?:

O que é uma função, para que servem, como declará-la e sua sintaxe básica. Além disso, viu que a ordem de execução de um código JavaScript importa, desde a inserção da tag `script` antes do fechamento da tag `</body>` no HTML até a ordem do código JavaScript dentro do seu próprio arquivo.

- Clique no botão:

A utilizar o `onclick` como atributo no JavaScript, e como atribuir uma função ao `onclick` sem que esta função seja invocada imediatamente.


- Exemplo:
  - script_16

##
### Parte 3 - Listas
##


### 17 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - script_17



### 18 - Lista de elementos

**Lista de elementos**

- Exemplo:
  - script_18



### 19 - Por que o document.querySelectorAll()?

**Por que o document.querySelectorAll()?**


Como vimos durante a aula, apesar de utilizarmos o script document.querySelector(seletor) para capturar elementos do HTML individualmente, no Alura MIDI, trocamos ele pelo document.querySelectorAll(seletor).

Desta forma, o uso do document.querySelectorAll se justifica por:

- Selecione uma alternativa

- A: O uso do script document.querySelectorAll() se justifica apenas para que possamos obter uma lista de elementos.


- B: Utilizamos o document.querySelectorAll() para selecionarmos todos os elementos do seletor desejado, reduzindo a quantidade de repetição de código, que consequentemente, promoverá uma otimização no código em alternativa a repetição.
`Alternativa correta! Ao utilizarmos esse script, ao invés de capturarmos um elemento por vez, conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função.` 


- C: Apesar de estarmos usando o script document.querySelectorAll(), o uso não se justifica, já que o projeto está funcionando utilizando o document.querySelector().


- Exemplo:
  - script_19



### 20 - Referências

**Referências**

- Exemplo:
  - script_20




### 21 - Conhecendo listas

**Conhecendo listas**

- Exemplo:
  - script_21


### 22 - Faça como eu fiz: Declarando uma referência

**Faça como eu fiz: Declarando uma referência**

No JavaScript podemos criar nossas próprias referências armazenarem de maneira mais simples valores para utilizarmos ao longo do código.

- Desta forma, a partir deste código no CodePen, faça:
    - Uma referência que armazene uma lista com todas as teclas e imprima o valor dela na aba console.
    - CodePen: https://codepen.io/vanessametonini/pen/eYEVEqR

- Como fazer:

Abra o link do CodePen;
Abra a aba JS e escreva seu código dentro dela;

- Opinião do instrutor

Gabarito:

```js
const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);
```

Para selecionarmos todas as teclas do Alura Fone, é necessário usar o script `const listaDeTeclas = document.querySelectorAll(‘input[type=button])`, porquê o JavaScript vai criar uma referência chamada `listaDeTeclas` e armazenar dentro dela a *NodeList* com todas as teclas do Alura Fone, pois o script `document.querySelectorAll(‘input[type=button]’)` acessa o documento HTML (representado por document) e captura todos os elementos `input` que tenha como atributo `type=button`. É necessário passar o type, ou seja, o seletor de atributo, pois os inputs do HTML não tem classes nem IDs, e também temos um input que não é do tipo type, impossibilitando o uso do seletor de nome de tag `input`.

- Exemplo:
  - script_22


### 23 - O que aprendemos?

**O que aprendemos?**


Nessa aula, você aprendeu:

- Lista de elementos:

O que são os `comentários` de código e como utilizá-los para auxiliar durante a escrita da nossa aplicação. Vimos também uma alternativa ao `querySelector` quando necessário buscar muitos elementos, que é o `querySelectorAll`, que retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

- Referências:

Para que serve uma referência e como declaramos uma referência de valor constante no código.

- Conhecendo listas:

A estrutura de uma lista em JavaScript e como podemos acessar os elementos a partir dos `índices` com a sintaxe do colchetes.

- Exemplo:
  - script_23


##
### Parte 4 - Iterando em listas
##


### 24 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - script_24




### 25 - Percorrendo uma lista

**Percorrendo uma lista**

- Exemplo:
  - script_25




### 26 - Por que usamos os while?

**Por que usamos os while?**


Assim como em outras linguagens de programação, o JavaScript também tem o while que é uma das formas de trabalhar com estruturas de repetição.

Com isto, assinale a alternativa que justifique o uso de uma estrutura de repetição no projeto Alura MIDI:

- Selecione uma alternativa

- A: Usamos o while pois esta é a única forma de criar uma estrutura de repetição no JavaScript e foi necessário para passar a cada elemento da lista, sendo que esta lista só pode ter no máximo 9 elementos, caso contrário poderá ocorrer loop infinito.


- B: O while se justifica pois como estamos organizando as teclas do Alura MIDI em uma lista, ao usá-lo conseguimos percorrer esta lista e acessar seu atributo onclick tornando o nosso código mais repetitivo.


- C: Foi necessário usar o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.

`Alternativa correta! O while é uma estrutura de repetição que foi necessária para trabalhar com a lista de teclas. Esta estrutura possibilita que uma variável de contador tenha seu valor incrementado a cada repetição, e que pode ser utilizado para acessar os indices de uma lista além de ser comparado com o tamanho de lista, formando a condição para a repetição cessar.`

- Exemplo:
  - script_26



### 27 - Funções com parâmetros

**Funções com parâmetros**

- Exemplo:
  - script_27



### 28 - O que é parâmetro de uma função?


**O que é parâmetro de uma função?**


A função é o conjunto de instruções de código, que executa uma determinada tarefa, que é utilizada somente quando chamada/invocado, podendo receber parâmetros ou não.

Deste modo, o que são os parâmetros em uma função?

- Selecione uma alternativa

- A: Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, e que obrigatoriamente precisam ter um valor padrão informado em sua declaração.


- B: Os parâmetros são configurações obrigatórias de uma função que são passadas em sua chamada e podendo ter seus valores alterados em qualquer lugar do código JavaScript.


- C: Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.
`Alternativa correta! Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem calculados e retornar o valor da média.`

- Exemplo:
  - script_28


### 29 - Funções anônimas

**Funções anônimas**

- Exemplo:
  - script_29





### 30 - Textos dinâmicos

**Textos dinâmicos**

- Exemplo:
  - script_30


### 31 - Repetição otimizada com For

**Repetição otimizada com For**

- Exemplo:
  - script_31


### 32 - Faça como eu fiz: Utilizando o For

**Faça como eu fiz: Utilizando o For**

Como vimos nesta aula, usamos a estrutura de repetição for, para percorrer uma lista de forma mais otimizada, onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variável contadora.

A partir deste código CodePen, faça:

Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.
Como fazer:

Abra o link do CodePen: https://codepen.io/vanessametonini/pen/eYEVEqR

Abra a aba JS e escreva seu código dentro dela;

- Opinião do instrutor

Gabarito:

```js
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  
  const tecla = listaDeTeclas[indice];
  
  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}
```

Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone e uma outra para capturar o `input` Digite seu telefone, que no caso do código foi `const` `listaDeTeclas` e `const` `inputTel`, respectivamente.

O segundo passo é criar o laço de repetição `for`, que vai percorrer a lista de teclas, por esta razão, a condição do for é `indice` `<` `listaDeTeclas.length`, ou seja, enquanto o `indice` for menor que o tamanho de `listaDeTeclas`, executa um comando.

Dentro do `for`, é necessário que se crie uma referência constante `const tecla` para que a cada iteração, receba o valor correspondente da tecla `listaDeTeclas[indice]`.

Após isto, adicione no `onclick` uma função anônima que receberá o valor do campo Digite seu telefone `inputTel.value`, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada `tecla.value`, ficando `inputTel.value` = `inputTel.value` + `tecla.value`.

- Exemplo:
  - script_32



### 33 - O que aprendemos?

**O que aprendemos?**

Nessa aula, você aprendeu:

- Percorrendo uma lista:

Como percorrer uma lista usando a estrutura de repetição while, a criar referências variáveis com let, e como incrementar o valor de uma variável, e criar uma condição para evitar o loop infinito, também conhecemos o atributo length contido nas listas que nos ajudou a obter dinamicamente o valor do tamanho de uma lista.

- Função com parâmetros:

Como declarar e utilizar parâmetros dentro de uma função que criamos, e o que é uma função anônima e o retorno undefined de uma função.

- Textos dinâmicos:

Como criar textos dinâmicos utilizando template string e como acessar as classes de um elemento através do atributo classList.

- Repetição otimizada com For:

Como é a estrutura de repetição for e como ela pode nos ajudar com um código mais limpo, além da forma de incrementar um valor de variável com o operador ++.

- Exemplo:
  - script_33


##
### Parte 5 - Eventos e lógicas
##


### 34 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - script_34


### 35 - Eventos do teclado

**Eventos do teclado**

- Exemplo:
  - script_35


### 36 - Adicionando e removendo classes

**Adicionando e removendo classes**

- Exemplo:
  - script_36



### 37 - Faça como eu fiz: Modificando estilos com JavaScript

**Faça como eu fiz: Modificando estilos com JavaScript**

Como vimos nesta aula, é possível modificar a classe de um elemento com o JavaScript de uma forma simples.

A partir deste código CodePen, faça: https://codepen.io/vanessametonini/pen/eYEVEqR

Um JavaScript que percorra a lista de teclas do AluraFone, e ao clicar na tecla Enter ou Espaço, adicione a classe ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.

- Como fazer:

Abra o link do CodePen;
Abra a aba JS e escreva seu código dentro dela;

- Opinião do instrutor

Gabarito:

```js
const listaDeTeclas = document.querySelectorAll('input[type=button]');

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
```

O primeiro passo é criar uma referência (`const listaDeTeclas`) para poder receber a lista com todas as teclas do Alura Fone, ficando `const listaDeTeclas = document.querySelectorAll('input[type=button]')`.

O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é `indice < listaDeTeclas.length`, ou seja, enquanto o `indice` for menor que o tamanho de `listaDeTeclas`, executa um comando.

Dentro do `for`, para facilitar o entendimento, crie uma referência constante `const tecla` para que a cada iteração , receba o valor correspondente da tecla `listaDeTeclas[indice]`, ficando `const tecla = listaDeTeclas`.

Após isto, adicione no evento de ao apertar uma tecla do teclado `onkeydown` uma função anônima que recebe como parâmetro um evento. Dentro do escopo da função, vamos criar um if com a condição: se evento.code (o código do evento `onkeydown`) for igual a "Enter" ou for igual a "Space", adicione a classe `ativa` no elemento tecla, ficando então assim `tecla.classList.add(‘ativa’)`;

Como foi resolvido a adição da classe ativa a partir do clique da tecla `Enter` ou `Space`, é necessário remover essa classe logo após deixamos de pressionar a tecla. Para isso, você precisa adicionar na `tecla` o evento de `onkeyup` (quando o usuário solta a tecla) uma função anônima, e dentro do escopo desta função, vamos remover a classe ativa da classe, ficando assim: `tecla.classList.remove(‘ativa’);`


- Exemplo:
  - script_37



### 38 - Condições no código

**Condições no código**

- Exemplo:
  - script_38





















































