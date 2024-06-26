##
### JavaScript: explorando a linguagem
##

<p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p>


##
### Parte 1 - Introdução a linguagem
##

### 1 - Introdução

**Introdução**

- Visual Studio Code
  - Link: https://code.visualstudio.com/Download


- NodeJS
  - Link; https://nodejs.org/en


- Exemplo:
  - script_01


### 2 - Instalando requisitos

**Instalando requisitos**


- Exemplo:
  - script_02




### 3 - Guardando Valores na memória do computador

**Guardando Valores na memória do computador**


- Exemplo:
  - script_03



### 4 - Referênciando variáveis

**Referênciando variáveis**

Aprendemos que podemos salvar valores dentro de variáveis. Esses valores ficam salvos dentro da memória do computador e podem ser acessados em outros lugares do nosso código. Dado o seguinte código:

```js
const nome = "Lais";

console.log("nome");
```

O que esperamos ver de saída do programa quando pedimos para que ele seja interpretado?

- Selecione uma alternativa

- A: - Esperamos ver um texto escrito nome.
  - `Exatamente! Quando colocamos algo entre aspas o interpretador do JS entende aquilo como sendo um texto literal.`

- B: - Esperamos que apareça no terminal o texto Lais

- C: - É esperado que no terminal apareça o texto Meu nome é Lais

- Exemplo:
  - script_04




### 5 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- Opinião do instrutor

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - script_05


### 6 - O que aprendemos?

**O que aprendemos?**

PRÓXIMA ATIVIDADE

O que aprendemos nessa aula:

Usando o REPL no NodeJS

Como imprimir valores na tela

Declaração de variáveis

Operadores aritméticos


- Exemplo:
  - script_06


##
### Parte 2 - Tipos de variáveis
##



### 7 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
  - script_07



### 8 - Boas práticas com variáveis

**Boas práticas com variáveis**

- Exemplo:
  - script_08


### 9 - Seguindo convenções

**Seguindo convenções**

Ao escrevermos um programa é comum precisarmos criar muitas variáveis para guardar diferentes tipos de valores. Podemos inclusive declarar variáveis com letras maiúsculas e minúsculas. Seguindo as boas praticas, qual o erro do código a seguir:

```js
const nome = "Lais";
const Sobrenome = "Silva";
const Idade = 30;
const anoDeNascimento = 1993;
```

- Selecione uma alternativa


- A: - Esse código não segue um padrão definido de como declarar variáveis.
  - `Isso mesmo! A falta de padronização entre os nomes das variáveis pode gerar muitos problemas no futuro da aplicação e os programadores não saberão quando usar cada tipo de nomenclatura;`

- B: - Esse código não apresenta problemas, já que todas as variáveis estão sendo declaradas com a palavra-chave const.

- C: - O problema é que em um mesmo programa estamos misturando variáveis do tipo número e do tipo texto sem nenhuma distinção.

- Exemplo:
  - script_09


### 10 - Conversão de tipos

**Conversão de tipos**


- Exemplo:
  - script_10


### 11 - Atribuição e imutabilidade

**Atribuição e imutabilidade**

- Exemplo:
  - script_11




### 12 - Refletindo sobre variáveis

**Refletindo sobre variáveis**


Agora que vimos as diferentes formas de declarar uma variável e para que elas servem, o que podemos afirmar como sendo verdade:

- Selecione 3 alternativas

- A: - Existem diferentes tipos de dados que conseguimos manipular, como textos e números.
  - `Isso mesmo! Outra forma de chamar as variáveis textuais é chamá-las de strings. Existem ainda outros tipos que veremos mais pra frente.`

- B: - É uma boa prática declarar variáveis com as palavras-chaves conste let, ou sem nenhuma palavra-chave antes do nome dela.

- C: - É recomendado que sempre que formos sobrescrever o valor de uma variável também mudarmos o tipo de dados que ela contem.

- D: - Sobrescrever uma variável significa mudar o conteúdo dela e para isso precisamos atribuir com o = o novo valor que desejamos.
  - `Sim, mas só podemos fazer isso em variáveis declaradas sem o const.`

- E: - Sempre que declaramos uma variável estamos reservando um espaço de memória no computador.
  - `Exatamente, uma variável serve como um nome, um endereço, para esse espaço de memória no computador.`


- Exemplo:
  - script_12



### 13 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- Opinião do instrutor

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - script_13


### 14 - O que aprendemos?

**O que aprendemos?**

O que aprendemos nessa aula:

- Const e let
- Case Sensitive
- Adicionando comentários
- parseInt e parseFloat
- Usando números com casa decimal
- Atribuição de variáveis

- Exemplo:
  - script_14

##
### Parte 3 - Trabalhando com muitos elementos
##

### 15 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - script_15


### 16 - Criando listas

**Criando listas**

- Exemplo:
  - script_16


### 17 - Removendo elementos

**Removendo elementos**

- Arrays
  - Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

- Exemplo:
  - script_17



### 18 - Acessando elementos

**Acessando elementos**


Começamos nessa aula a trabalhar com listas dentro do JavaScript e vimos que elas facilitam nossa vida quando trabalhamos com um conjunto de elementos. Normalmente usamos essas estruturas quando temos dados que aparecem sempre em conjunto.

Quando usamos listas em nosso programa, como fazemos para acessar um elemento especifico dessa lista?

- Selecione uma alternativa

- A: Para acessar um elemento especifico podemos chamar o nome dessa lista seguido de colchetes com o index desse elemento. ex: `lista[2]`

`Isso mesmo, lembre-se de que listas sempre começam a contagem de elementos a partir do 0 então o index 2 mostra o terceiro elemento da lista.`

- B: Se queremos acessar diretamente um elemente da lista podemos usar o comando splice passando para ele o index que queremos acessar

- C: Não é possível acessar um elemento único da lista. Já que ela é feita para trabalharmos com uma sequencia de informações.


- Exemplo:
  - script_18



### 19 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- Opinião do instrutor

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - script_19



### 20 - O que aprendemos?

**O que aprendemos?**

O que aprendemos nessa aula:

- Criação de Arrays;
- Inserção de itens em um array;
- Array splice;
- Palavras reservadas;
- Indices do array;

- Exemplo:
  - script_20


##
### Parte 4 - Condicionais e fluxo de execução
##



### 21 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - script_21




### 22 - Operadores Lógicos

**Operadores Lógicos**

- Exemplo:
  - script_22


### 23 - Ifs encadeados

**Ifs encadeados**

- Exemplo:
  - script_23



### 24 - Trabalhando com if

**Trabalhando com if**

João está criando uma aplicação para calcular o IR a partir do salário. Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:

```js
const salario = 3300.0;

if(salario < 2600.0) 
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");

else if(salario < 3750.0) 
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
```

Porém o programa tem um comportamento estranho. Ao compilar e rodar, é impresso:


```console
SyntaxError: Unexpected token 'else'
```

Como corrigir o problema?

- Selecione uma alternativa

- A: O problema é que faltam as chaves na condicional. Sem as chaves, o comando emitirá a mensagem de erro mencionada acima.

`Correta! Devemos usar as chaves:`

```js
if(salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}        
else if(salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}
```
- B: Não podemos usar uma variável do tipo númerico na condicional, sempre deve ser sempre um texto.

- C: Devemos usar <= em cada if, por exemplo:
```js
if(salario <= 3750.0)
```
- Exemplo:
  - script_24


### 25 - Operadores Lógicos encadeados

**Operadores Lógicos encadeados**

- Exemplo:
  - script_25


### 26 - Operadores Lógicos 

**Operadores Lógicos**

Abaixo há afirmações referentes às operações lógicas na linguagem JavaScript. Quais delas são verdadeiras?

- Selecione 2 alternativas

- A: O operador lógico AND é representado pelos caracteres && e o OR pelo ||.
`Correta! AND é representado pelo && e OR pelo ||.`

- B: Os operadores lógicos devem ter no lado esquerdo e direito uma expressão booleana.
```js
if (idade > 18 && idade < 65)
{

}
```

- C: O operador lógico AND é representado pela palavra chave and e o OR pela palavra chave or.


- Exemplo:
  - script_26


### 27 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- Opinião do instrutor

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - script_27




### 28 - O que aprendemos?

**O que aprendemos?**


O que aprendemos nessa aula:

- If e Else
- Operadores lógicos
- if encadeado
- else if
- && e ||


- Exemplo:
  - script_28


##
### Parte 5 - Iterando sobre coleções
##


### 29 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
  - script_29


### 30 - While

**While**


- Exemplo:
  - script_30




### 31 - Fixando o laço while

**Fixando o laço while**


Quais as afirmações abaixo são verdadeiras em relação ao while?

- Selecione 2 alternativas

- A: Dado o seguinte código:
```JS
while(false){
    console.log(1);
}
//Ele imprimirá no console o valor 1 infinitas vezes.
```

- B :O while sempre precisará de uma expressão condicional que definirá quando o laço deve ser interrompido.
`Correta. Muito bem! Lembre-se, essa expressão condicional precisará ser informada dentro dos parênteses do while e pode ainda utilizar qualquer um dos operadores de comparação e operadores lógicos aprendidos no capítulo 5.`

- C: O while é executado enquanto a expressão condicional definida for falsa. Caso ela seja verdadeira o while deixa de ser executado.


- D: Na expressão condicional do while é possível utilizar qualquer operador de comparação (< [menor], > [maior], <= [menor ou igual], >= [maior ou igual], == [igual a] e != [diferente de]) e qualquer operador lógico (&& [and], || [ou]).
`Correta. Isso aí! Todos os operadores de comparação e lógicos são válidos na expressão condicional do while! Use-os com sabedoria!` 


- Exemplo:
  - script_31


### 32 - Break e Debbuger

**Break e Debbuger**

- Exemplo:
  - script_32





### 33 - Refletindo sobre o Break

**Refletindo sobre o Break**

Ao trabalharmos com laços de repetição é comum iterarmos dentro desse laço até que a condição de saída seja atingida. Nesse sentido, qual o papel do comando break dentro de um laço de repetição?

- Selecione uma alternativa

- A: Esse comando faz com que o interpretador do JS reavalie a condição de saída naquele mesmo instante e saia do loop se for necessário.


- B: O comando break pede que o interpretador passe para a próxima volta do loop ignorando o restante do código do laço.


- C: O comando break interrompe o fluxo de execução do laço de maneira forçada, sem precisarmos atingir a condição de saída

`Exatamente, ao colocarmos um break dentro do laço estamos falando para o interpretador que quando ele chegar nessa linha ele deve sair do laço independentemente de outras condições.`

- Exemplo:
  - script_33




### 34 - Debugger

**Debugger**

- vscode
  - create a launch.json file

- Exemplo:
  - script_34



### 35 - For

**For**

- Exemplo:
  - script_35


### 36 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- Opinião do instrutor

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - script_36


### 37 - O que aprendemos?

**O que aprendemos?**

O que aprendemos nessa aula:

- While;
- Break;
- Usando o Debbuger do VS Code;
- Entendendo o fluxo de execução do código;
- Configurando o debbuger do VSCode;
- For Loop;

- Exemplo:
  - script_37



### 38 - Projeto Final do Curso

**Projeto Final do Curso**

- Exemplo:
  - script_38


### 39 - Conclusão

**Conclusão**

- Exemplo:
  - script_39

