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
  - script_fokus_03











































































































