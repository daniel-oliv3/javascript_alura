##
### JavaScript: manipulando elementos no DOM
##

<p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p>


##
### Parte 1 - Iniciando o projeto Fokus
##


### 1 - Apresentação

**Apresentação**

- É necessário saber:

- HTML
- CSS
- Funções
- Métodos do JavaScript


- Exemplo:
  - script_fokus_01




### 2 - Preparando o ambiente

**Preparando o ambiente**

Boas-vindas, Dev!

Esta será uma jornada de muito aprendizado e prática, para você dominar a Manipulação de elementos no DOM com JavaScript. Para isso, vamos dar vida ao projeto Fokus, um sistema de temporizador, que ajuda a pessoa usuária a focar nas suas atividades do dia a dia.

Arquivos iniciais do projeto

Você pode visualizar os arquivos do curso, acessando o GitHub ou fazendo o download direto.

Sobre o Design do projeto

Caso queira conferir o Design do projeto, você pode acessar o Figma.

Recomendo utilizar o mesmo editor de código utilizado nas aulas. Você pode baixá-lo clicando em VScode. Também é possível baixar a extensão do VSCode utilizada no curso, o Live Server.

- Visual Studio Code:
  - Link: https://code.visualstudio.com/download
  - `Live Server`


- Figma:
  - Link: https://www.figma.com/file/dEaMv34Wd5G7TBMPo8fPlK/Projeto-Fokus?type=design&node-id=35-181&mode=design&t=wNoLT8r685HYPzNO-0



- Exemplo:
  - script_fokus_02



### 3 - Conhecendo métodos do DOM

**Conhecendo métodos do DOM**

```js
/*console browser*/
// Métodos para pegar elementos da tela


clear //limpa o console
document.querySelector('button'); // pegar um elemento especifico
document.querySelectorAll('button'); //pega todos elementos button
document.querySelector('.app__card-button--curto'); //pegando elemento de uma classe

document.getElementsByClassName('app__card-button--curto'); //pega o elemento pelo nome da classe, não reconhece com o .app__card-button--curto
document.getElementById('start-pause');  //pega o elemento pelo id
```

- DOM: Document Object Model

- Exemplo:
  - script_fokus_03




### 4 - Selecionando todos os botões com JavaScript

**Selecionando todos os botões com JavaScript**

Você e um colega de equipe, chamado Enzo, estão desenvolvendo o projeto Fokus. Ele está com dificuldade em pegar todos os botões de uma só vez para manipulá-los no DOM.

Qual das alternativas abaixo traz o método do JavaScript correto para capturar todos os botões de uma vez?

- Selecione uma alternativa

- A: Use o método `document.getElementsByID('botão')` para pegar todos os botões.


- B: Utilize o método `document.querySelector('botão')` e o JavaScript vai automaticamente selecionar todos os botões.


- C: Utilize o método `document.getElementByTagName('botão')` já que esta função busca pelos elementos com a mesma tag.


- D: Utilize o método `document.querySelectorAll('button')` porque vai retornar uma node list com todos os elementos de botão.
`Parabéns! O método document.querySelectorAll retorna todos os elementos correspondentes a um seletor ou tag, não apenas o primeiro.`

- E: A captura de todos os botões não é possível em JavaScript.

- Exemplo:
  - script_fokus_04


### 5 - Alterando data attributes

**Alterando data attributes**


- Exemplo:
  - script_fokus_05


### 6 - Para saber mais: EventListeners

**Para saber mais: EventListeners**

Para entendermos bem sobre este assunto, primeiro precisamos esclarecer uma coisa: O que é DOM? DOM é a sigla para Document Object Model (Modelo de Objeto de Documento) e é uma forma padronizada de representar e interagir com objetos em documentos HTML e XML. O DOM representa a estrutura de um documento através de uma árvore de objetos, onde cada objeto representa uma parte do documento.

Entender essa definição ajuda a compreender a importância dos eventos e de como eles funcionam no DOM (Document Object Model), sendo essencial para avançar seus estudos em JavaScript.

- O que é um Evento no DOM?

Pense nisso como sinais que o navegador envia quando algo acontece - como um usuário que clica em um botão em sua página web, por exemplo. Quando um evento ocorre, você tem a capacidade de reagir a ele e executar algumas ações, como exibir uma mensagem para o usuário, alterar ou adicionar algum elemento na página.

O Método `addEventListener`
Antes de mergulharmos nos diferentes tipos de eventos, vamos entender rapidamente como o método addEventListener funciona. Ele é um método disponível para todos os elementos HTML e permite que registremos funções (callbacks) que serão chamadas quando um evento específico ocorrer.

A sintaxe básica é a seguinte:

`elemento.addEventListener(evento, callback);`

- Onde:
  - elemento: É o elemento HTML ao qual queremos associar o evento.
  - evento: É uma string que representa o tipo de evento que desejamos capturar.
  - callback: É a função que será chamada quando o evento ocorrer.

- Tipos de Eventos

- Eventos de clique (click)

Os eventos de clique são alguns dos mais utilizados em desenvolvimento web. Eles ocorrem quando o usuário clica em um elemento específico da página, como um botão, um link ou até mesmo em uma imagem. Podemos usar o evento click para executar ações quando o usuário interage com esses elementos.

Exemplo:
```js
// HTML <button id="meuBotao">Clique aqui</button>

const meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
  alert("O botão foi clicado!");
});
```

Quando o usuário clicar no botão com o texto "Clique aqui", um alerta será exibido com a mensagem "O botão foi clicado!".

- Eventos de submissão de formulário (submit)

Quando temos um formulário em nossa página, podemos usar o evento submit para capturar a submissão do formulário pelo usuário. Isso nos permite executar ações como validar os dados inseridos antes de enviá-los para o servidor.

Exemplo:
```js
//HTML <form id="meuFormulario">
//HTML     <input type="text" name="nome" />
//HTML     <input type="submit" value="Enviar" />
//HTML  </form>

const meuFormulario = document.getElementById("meuFormulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  const nome = event.target.elements.nome.value;
  alert(`O formulário foi enviado com o nome: ${nome}`);
});
```

Quando o usuário preencher o campo de texto do formulário e clicar no botão "Enviar", um alerta será exibido com a mensagem "O formulário foi enviado com o nome: [nome inserido no campo]".

Eventos de teclado (keydown, keyup, keypress)
Os eventos de teclado permitem que respondamos às ações do usuário no teclado, como pressionar ou soltar uma tecla específica. Existem três principais tipos de eventos de teclado:

keydown: Ocorre quando uma tecla é pressionada. keyup: Ocorre quando uma tecla é solta. keypress: Ocorre quando uma tecla é pressionada e ainda não foi solta.

Exemplo:

```js
//HTML<input type="text" id="meuInput" />

const meuInput = document.getElementById("meuInput");
meuInput.addEventListener("keydown", function(event) {
  console.log(`Tecla pressionada: ${event.key}`);
});
```

Quando o usuário pressiona uma tecla enquanto o cursor está no campo de texto, o evento keydown será acionado e o código imprimirá no console a mensagem "Tecla pressionada: [tecla pressionada]".

Eventos de foco (focus, blur)
Os eventos de foco são usados quando queremos capturar quando um elemento recebe ou perde o foco. O evento focus ocorre quando o elemento ganha o foco (por exemplo, quando clicamos em um campo de formulário), enquanto o evento blur ocorre quando o elemento perde o foco.

Exemplo:

```js
//HTML <input type="text" id="meuCampo" />

const meuCampo = document.getElementById("meuCampo");
meuCampo.addEventListener("focus", function() {
  console.log("Campo ganhou o foco.");
});

meuCampo.addEventListener("blur", function() {
  console.log("Campo perdeu o foco.");
});
```

Quando o usuário clicar no campo de texto, o evento focus será acionado e o código imprimirá no console a mensagem "Campo ganhou o foco.". Quando o usuário clicar fora do campo, fazendo-o perder o foco, o evento blur será acionado e o código imprimirá no console a mensagem "Campo perdeu o foco.".

O método addEventListener em JavaScript é uma poderosa ferramenta para lidar com eventos em elementos HTML. Através dos diferentes tipos de eventos disponíveis, podemos criar páginas web mais interativas e responsivas, melhorando a experiência do usuário.

Abordamos os eventos mais comuns, e também existem muitos outros que podem ser explorados para atender às necessidades específicas de cada projeto. Portanto, o conhecimento sobre eventos e a habilidade de utilizá-los adequadamente são fundamentais para se tornar uma pessoa desenvolvedora web mais eficiente e versátil.

- Exemplo:
  - script_fokus_06



### 7 - Desafio: adicionando evento de click

**Desafio: adicionando evento de click**

- Agora é com você!

Estamos desenvolvendo o projeto Fokus juntos, por isso, conto com sua ajuda para inserir um evento de interação com a pessoa usuária no botão “Descanso longo”. Similar ao que fizemos em aula referente aos botões de “Foco” e “Descanso curto”.

- Para o desafio, seguem algumas dicas:
  - Adicione um evento de clique (click) no botão "Descanso longo";
  - Quando o botão for clicado, defina o valor 'descanso-longo' para o atributo data-contexto;
  - Isso permitirá que a cor azul seja aplicada na tela, através do seletor data-contexto="descanso-longo" no arquivo CSS, na linha 18.

- Opinião do instrutor

Conseguiu resolver o desafio? Espero que sim! :)

Abaixo segue a forma como fiz:

Código JavaScript:

```js
const longoBt = document.querySelector('.app__card-button--longo');

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});
```

- Print do resultado na tela, após clique no botão “Descanso longo”:

<p align="center">
  <img alt="...." src="./src/aula1-img1.png" width="50%">
</p>


- Exemplo:
  - script_fokus_07




























































































