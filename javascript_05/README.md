##
### JavaScript: manipulando objetos
##

<!-- <p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p> -->



<p align="center">
  <img alt="...." src="./src/JavaScript.jpg" width="100%">
</p>

##
### Parte 1 - Iniciando o projeto
##


### 1 - Apresentação

**Apresentação**

**Faça esse curso de JavaScript e:**

Entenda o que são e como manipular objetos no JavaScript
Conecte o projeto a um armazenador de dados do navegador(a API localStorage)
Implemente métodos para manipulação de elementos no DOM
Conheça características de desenvolvimento de código em JavaScript
Crie métodos para receber dados da pessoa usuária


- Exemplo:
  - js_manipulando_objetos_01



### 2 - Preparando o ambiente: download do projeto

**Preparando o ambiente: download do projeto**

- Exemplo:
  - js_manipulando_objetos_02



### 3 - Criando um objeto

**Criando um objeto**

- Exemplo:
  - js_manipulando_objetos_03


### 4 - Para saber mais: adicionando propriedades

**Para saber mais: adicionando propriedades**

A linguagem JavaScript é do tipo orientada a objetos, isso significa que, objetos são a parte central dessa linguagem, dessa forma, é importante entender como manipular as informações que um objeto guarda.

Já os objetos nos permitem trazer para o mundo da programação elementos do mundo real, transformando-os em dados, e, a partir disso, ser possível trabalhar com esses dados.

- Estrutura de um objeto literal

Criamos objetos literais e descobrimos como é formada sua estrutura:

```js
const cliente = { nome: ‘Mariana’ }

//variável nomeDoObjeto = { chave: valor}
```

O objeto literal no JavaScript é formado por uma coleção de propriedades. Uma propriedade é formada pelo conjunto chave + seu valor, no exemplo acima temos a propriedade nome, que é o conjunto da chave nome+ valor ’Mariana’.

Adicionando propriedades em um objeto

Vamos supor que seja necessário adicionar propriedades em um objeto. Existem diferentes notações que nos possibilitam chegar a esse objetivo, a mais comum é a de ponto.

Vamos conferir nesse exemplo:

```js
const cliente = { nome: ‘Mariana’ }

cliente.idade = 35

console.log(cliente)
```

O console irá retornar:

```js
{
   nome: 'Mariana', 
   idade: 35
}
```

É possível conferir que foi adicionado a chave idade, com valor 35, que anteriormente não existia.

No exemplo acima foi utilizado a notação de ponto, e existe também a notação de colchetes.

Vamos conferir como utilizar a notação de colchetes para adicionar propriedades em um objeto:

```js
cliente = {
   nome: 'Mariana', 
   idade: 35
}

cliente['genero'] = 'Feminino'

console.log(cliente)
```

O console irá retornar:

```js
{
   nome: 'Mariana', 
   idade: 35, 
   genero: 'Feminino'
}
```

Note que a chave foi passada entre aspas, ou seja, no formato de string. Com isso, podemos chegar à conclusão que chaves de objetos também podem ser dados do tipo string. Como no exemplo abaixo:

```js
cliente = {
   'nome': 'Mariana', 
   'idade': 35,
   'sexo': 'Feminino'
 }
```

Agora você já sabe como transformar uma informação em um dado, e salvá-lo em um objeto!

Na próxima atividade deixei um desafio para você poder exercitar o que aprendeu até aqui!

- Exemplo:
  - js_manipulando_objetos_04





### 5 - Desafio: método de ponto ou colchetes

**Desafio: método de ponto ou colchetes**


Um desafio para você fixar bem o conteúdo, vamos utilizar o objeto criado na última atividade:

```js
cliente = {
   nome: 'Mariana', 
   idade: 35,
   genero: ‘Feminino’
}
```

`Dica: utilize o método de ponto ou colchetes, para inserir uma nova propriedade ao objeto.`

- Opinião do instrutor

Resultado do desafio com notação de colchetes:

```js
cliente = {
    nome: 'Mariana', 
    idade: 35,
    genero: 'Feminino'
 }

cliente['estado'] = 'Pernambuco'

 alert('Olá, meu nome é ' + cliente.nome + ' e moro no estado de ' + cliente.estado + '.')
```

Resultado do desafio com notação de ponto:

```js
cliente = {
    nome: 'Mariana', 
    idade: 35,
    genero: 'Feminino'
 }

cliente.estado = 'Pernambuco'

 alert('Olá, meu nome é ' + cliente.nome + ' e moro no estado de ' + cliente.estado + '.')
```

- Exemplo:
  - js_manipulando_objetos_05




### 6 - Para saber mais: objetos com var, let ou const

**Para saber mais: objetos com var, let ou const**

No vídeo abaixo, o youtuber Marco Bruno explica a diferença entre var, let e const, e porque é indicado que objetos nunca iniciem a partir de uma variável do tipo: var.

- Como funciona o var, let e const? #01
  - Link: https://www.youtube.com/watch?v=EFoEqHIwxqY

- Exemplo:
  - js_manipulando_objetos_06


### 7 - Para saber mais: deletando e editando propriedades


**Para saber mais: deletando e editando propriedades**

- Exemplo:
  - js_manipulando_objetos_07


### 8 - Clonando objetos

**Clonando objetos**


- Exemplo:
  - js_manipulando_objetos_08


### 9 - Comparando objetos

**Comparando objetos**


- Exemplo:
  - js_manipulando_objetos_09




### 10 - Estrutura de objetos

**Estrutura de objetos**

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, que nos ajudam a representar algo da vida real. Observando esses conceitos, assinale o objeto que possui o conjunto de sintaxe e semântica corretos.

- A: 
```js
const d = {
  nome: "Rafaela dos Santos Soares",
  agencia: 2158,
  conta: 525,
  saldo: 123.13,
  eMail: "rafaela.soares@email.com.br",
  c: function () {
    alert("Seja bem-vinda " + d.nome + "." )
  }
}
d.c()
```
Resultado no pop up: Seja bem-vinda rafaela.soares@email.com.br.

- B: 
```js
const dadosDeUsuario = {
  nome: "Rafaela dos Santos Soares"
  agencia: 2158
  conta: 525
  saldo: 123.13
  eMail: "rafaela.soares@email.com.br"
}

mostraDados: function () {
  alert(dadosDeUsuario.nome)
}

dadosDeUsuario.mostraDados()
```

Resultado no pop up: Rafaela dos Santos Soare

- C: 
```js
const dadosDeUsuario = {
  nome: "Rafaela dos Santos Soares",
  agencia: 2158,
  conta: 525,
  saldo: 123.13,
  eMail: "rafaela.soares@email.com.br",
  mostraDados: function () {
    alert("Seja bem-vinda " + dadosDeUsuario.nome + "." )
  }
}
dadosDeUsuario.mostraDados()
```
Resultado no pop up: ”Seja bem-vinda Rafaela dos Santos Soares.”
`Parabéns! O nome do objeto representa os dados que ele guarda, e o nome da função representa o que ela realmente faz. A sintaxe do código está correta, retornando o que foi proposto: “Rafaela Soares dos Santos”.`

- D: 
```js
const dadosDeUsuario = {
  nome: "Rafaela dos Santos Soares",
  agencia: 2158,
  conta: 525,
  saldo: 123.13,
  eMail: "rafaela.soares@email.com.br",
  mostraDados: function () {
    alert(dadosDeUsuario.nome)
  }
}
dadosDeUsuario.mostraDados()
```

Resultado no pop up: Seja bem-vinda Rafaela dos Santos Soares

- Exemplo:
  - js_manipulando_objetos_10



### 11 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
  - Definiu o que é objetos em JavaScript;
  - Aprendeu na prática como criar objetos;
  - Aprendeu como editar e deletar valores de objetos;
  - Utilizou o conjunto de objetos, métodos e funções do JavaScript para criar funcionalidades no projeto;
  - Aprendeu a diferença entre var, let e const;
  - Aprendeu como criar objetos a partir das informações passadas pela pessoa usuária.

- Exemplo:
  - js_manipulando_objetos_11



##
### Parte 2 - Métodos e escopo léxico
##

### 12 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_manipulando_objetos_12


### 13 - Definindo métodos

**Definindo métodos**

- Exemplo:
  - js_manipulando_objetos_13





















































































