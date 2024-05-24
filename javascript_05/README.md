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


### 14 - Para saber mais: escopo léxico

**Para saber mais: escopo léxico**

Existem três tipos de escopo que você deve conhecer no JavaScript que são: Escopo de funções, escopo de blocos e escopo léxico.

Vamos abordar agora o Escopo léxico e entender seu funcionamento a partir dos exemplos a seguir:

Escopo global e escopo local

Um elemento de escopo global significa que foi declarado no primeiro nível de código, ou seja, ele não se encontra dentro de nenhuma outra função.

```js
function mostraFilme() {             // Exemplo de função de escopo global
    const filme = { titulo: 'Titanic'}  // Exemplo de objeto de escopo local
    console.log(filme.titulo)         // Exemplo de objeto de escopo local
}

mostraFilme()
```

Esse código retorna no console: Titanic.

No exemplo acima a função mostraFilme() se encontra no escopo global, e o objeto filme, se encontra no escopo local da função mostraFilme(). É importante entender que métodos do JavaScript também possuem escopo, como log(), forEach(), e while().

Por que é importante entender a diferença entre escopo global e local?

Vamos acrescentar mais elementos no nosso exemplo:

```js
const filme = { 
    titulo: 'Wakanda',
}

function declaraFilme() {
    console.log(filme.titulo)
}

function mostraFilme() {
    const filme = { titulo: 'Titanic'}
    console.log(filme.titulo)
}

mostraFilme()
declaraFilme()
```

Esse código retorna no console:

Titanic

Wakanda

É possível perceber que a função declaraFilme() recebe o objeto filme com a propriedade + chave titulo ‘Wakanda’ que foi declarado fora do seu escopo.

Já a função mostraFilme() recebe o objeto filme com propriedade + chave titulo ’Titanic’, que está declarado dentro do seu escopo.

Com isso, podemos observar que:

Objetos podem ser declarados com o mesmo nome se estiverem em escopos diferentes.
Funções podem acessar objetos que estiverem no seu interior.
Se uma função estiver chamando um objeto que não está declarado no seu interior, esse objeto será buscado nos escopos acima(como no caso da função declaraFilme()).
Os apontamentos acima possuem o mesmo resultado substituindo objetos por variáveis.
Agora vamos conferir o código abaixo, neste caso, a função mostraFilme() está chamando no console filme.titulo, e também guarda uma nova função chamada novoFilme(). e nesta função está declarado o objeto filme:


```js
function mostraFilme() {
    console.log(filme.titulo)

    function novoFilme() {
        const filme = { 
            titulo: 'Wakanda',
        }
    }

}

mostraFilme()
```

Este código retorna um erro de referência no console: “Uncaught ReferenceError: filme is not defined”. O aviso informa que o objeto filme não conseguiu ser acessado quando a função mostraFilme() foi executada.

Com isso, é possível chegar a mais algumas conclusões:

Objetos podem ser acessados fora de uma função, ou dentro de uma função, mas nesse último caso não é possível ser acessado caso esteja dentro de outro escopo no seu interior.
A conclusão acima tem o mesmo resultado substituindo objetos por variáveis.
Escopo léxico nada mais é que funções alinhadas estarem sujeitas a buscar objetos ou variáveis no escopo acima delas.

Entender sobre escopos na linguagem JavaScript é importante para construção de códigos no qual seus blocos estejam interligados, o que acontece na maioria dos casos.

- Exemplo:
  - js_manipulando_objetos_14



### 15 - Interação com usuário

**Interação com usuário**

- Exemplo:
  - js_manipulando_objetos_15


### 16 - Índice do objeto

**Índice do objeto**

- Exemplo:
  - js_manipulando_objetos_16


### 17 - lterando o valor do objeto

**lterando o valor do objeto**

- Exemplo:
  - js_manipulando_objetos_17



### 18 - Manipulando objetos no DOM

**Manipulando objetos no DOM**

- Exemplo:
  - js_manipulando_objetos_18




### 19 - Conhecendo escopos

**Conhecendo escopos**

Nesta aula você aprendeu como os escopos influenciam no acesso de objetos na linguagem JavaScript, além de que é possível criar objetos e variáveis com o mesmo nome, estando em escopos diferentes.

Utilizando do conhecimento adquirido, assinale a alternativa que retorne no console o título: Casa do Dragão.

Uma dica, caso tenha alguma dificuldade em entender sobre os escopos nos códigos abaixo, você pode copiá-los e testá-los no editor de código, ou no próprio console do navegador.

- Selecione uma alternativa

- A: 

```js
function retornaSerie() {

    const serie = {
        titulo: "Casa do Dragão"
    }

    function retornaNovaSerie() {
        console.log(serie.titulo)

        function novaSerie() {
            const serie = {
                titulo: "Grey's Anatomy"
            }
        }

    }

}

retornaNovaSerie()
```


- B: 

```js
function mostraSeries() {

    const serie = {
        titulo: "Casa do Dragão"
    }

    function mostraNovaSerie() {
        console.log(serie.titulo)

        function novaSerie() {
            const serie = {
                titulo: "Grey's Anatomy"
            }
        }

    }

    mostraNovaSerie()

}

mostraSeries()
```

`O chamado do objeto no console.log declarado na função mostraNovaSerie() busca o objeto no seu escopo, e como não encontra, busca um escopo anterior, localizando o objeto que está declarado na função mostraSeries().`


- C: 

```js
function mostraSeries() {

    const serie = {
        titulo: "Grey's Anatomy"
    }

    function mostraNovaSerie() {
        console.log(serie.titulo)

        function novaSerie() {
            const serie = {
                titulo: "Casa do Dragão"
            }
        }

    }

    mostraNovaSerie()

}

mostraSeries()
```

- Exemplo:
  - js_manipulando_objetos_19


### 20 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
  - Aprendeu como renderizar objetos na página;
  - Uniu funções e eventos para manipular objeto no DOM, alterando o valor de sua chave;
  - Entendeu na prática e com conhecimento extra o que é escopo léxico no JavaScript;
  - Aprendeu e implementou método Callback em um array de objetos;
  - Analisou e utilizou de métodos do JavaScript para melhorar a experiência da pessoa usuária na utilização do projeto.


- Exemplo:
  - js_manipulando_objetos_20


##
### Parte 3 - Deletando e editando objetos
##


### 21 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_manipulando_objetos_21




### 22 - Deletando objetos

**Deletando objetos**

- Exemplo:
  - js_manipulando_objetos_22


### 23 - Para saber mais: recortando objetos

**Para saber mais: recortando objetos**

No vídeo passado, você aprendeu como utilizar o método splice(), e é importante não confundir com outro método com nome parecido, o slice().

Que tal entender como o slice() funciona?

Vamos supor que no projeto que estamos desenvolvendo, o Lista de Compras exista um orçamento máximo, sendo possível comprar apenas alguns itens da lista. O slice() poderia nos ajudar a selecionar quais itens poderiam ser comprados. Veja como:

O slice() recorta uma cópia do array original e salva esse corte em um novo array, para isso, é possível passar dois parâmetros:

O primeiro parâmetro determina a partir de onde os elementos serão recortados:

```js
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
]

novaLista = listaDeItens.slice(2)

console.log(novaLista)

```

O console irá retornar:

```js
{item3: 'Uva'}
{item4: 'Suco'}
{item5: 'Alface'}
{item6: 'Feijão'}
```

O segundo parâmetro determina até onde essa fatia será recortada:

```js
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
]

novaLista = listaDeItens.slice(2, 4)

console.log(novaLista)
```

O console irá retornar:

```js
{item3: 'Uva'}
{item4: 'Suco'}
```

Passando valores negativos para o segundo parâmetro, será contado de forma decrescente quantos elementos ficarão de fora do recorte, ou seja, será contado de trás pra frente:

Passando valor 2 no primeiro parâmetro, e valor -2 no segundo parâmetro. O primeiro parâmetro identificará em ordem crescente a partir de onde os itens serão recortados('Maracujá', 'Manga'), já o segundo parâmetro com valor negativo -2, irá contar de forma decrescente quantos elementos ficarão de fora do recorte('Feijão', 'Tapioca'), ou seja, será contado de trás pra frente:

```js
let listaDeItens = [
    {
        item1: 'Maracujá'
    },
    {
        item2: 'Manga'
    },
    {
        item3: 'Uva'
    },
    {
        item4: 'Suco'
    },
    {
        item5: 'Alface'
    },
    {
        item6: 'Feijão'
    },
    {
        item7: 'Tapioca'
    },
]

novaLista = listaDeItens.slice(2,-2)
```

O console irá retornar:

```js
{item3: 'Uva'}
{item4: 'Suco'}
{item5: 'Alface'}
```

**OBS**: O `slice()` não altera os valores do array original, ele salva os itens selecionados em um novo array. Este método também pode ser utilizado para selecionar caracteres de uma string, ou qualquer outro conjunto de elementos salvos em um array.

- Exemplo:
  - js_manipulando_objetos_23




### 24 - Identificando índice de objetos

**Identificando índice de objetos**


- Exemplo:
  - js_manipulando_objetos_24



### 25 - Editando no DOM

**Editando no DOM**


- Exemplo:
  - js_manipulando_objetos_25



### 26 - Array de objetos

**Array de objetos**

Aprendemos que em um array de objetos o índice inicia a partir de 0, porém sua posição inicia a partir de 1. Supondo que em um array de objetos chamado de veiculos, são guardados dados contendo nomes de modelos de veículos. Adicione novos objetos a partir da posição 3, sem substituir por nenhum dos outros objetos que já estão no array.

Marque a alternativa que possibilita chegar nesse objetivo:

- Selecione uma alternativa

- A: 
```js
veiculos.splice(0,2, {veiculo3: "Bicicleta"}, {veiculo4: "Automóvel"})
```

- B:
```js
veiculos.splice(3,0, {veiculo3: "Bicicleta"}, {veiculo4: "Automóvel"})
```

- C:
```js
veiculos.splice(2,3, {veiculo3: "Bicicleta"}, {veiculo4: "Automóvel"})
```

- D:
```js
veiculos.splice(2,0, {veiculo3: "Bicicleta"}, {veiculo4: "Automóvel"})
```

`Parabéns! Passando como primeiro parâmetro 2, é indicado que serão adicionados novos elementos a partir da posição seguinte, ou seja, posição 3. O segundo parâmetro determina quantos elementos serão substituídos pelos novos, neste caso 0, já que o objetivo é apenas adicionar novos elementos. E o terceiro parâmetro são quais serão os novos elementos a serem adicionados no array.`

- Exemplo:
  - js_manipulando_objetos_26



### 27 - Editando objetos

**Editando objetos**

- Exemplo:
  - js_manipulando_objetos_27


### 28 - Comparando e modificando valores

**Comparando e modificando valores**

- Exemplo:
  - js_manipulando_objetos_28


### 29 - O que aprendemos?

**O que aprendemos?**

- Nessa aula, você aprendeu como:
  - Utilizou de métodos do JavaScript que possibilitam remover, editar, adicionar e substituir elementos de um array, contextualizando com objetos;
  - Aprendeu métodos para comparar e modificar valores.

- Exemplo:
  - js_manipulando_objetos_29


##
### Parte 4 - GetItem e SetItem
##

### 30 - Projeto da aula anterior

**Projeto da aula anterior**

- Exemplo:
  - js_manipulando_objetos_30


### 31 - SetItem

**SetItem**

- Exemplo:
  - js_manipulando_objetos_31


### 32 - Para saber mais: o JSON

**Para saber mais: o JSON**

Nesta aula aprendemos a enviar e receber dados do localStorage utilizando de alguns métodos, dois deles são: JSON.parse e JSON.stringify. E o que significa JSON?

O nome JSON é abreviação de JavaScript Object Notation, ou, “notação de objeto JavaScript”. O JSON é um arquivo que nos permite armazenar e trocar dados. Para possibilitar essa troca de dados, é necessário que eles estejam em um formato padrão. Vamos comparar os exemplos abaixo:

Formato JSON:

```json
{
“id”: 15,
“carro”: “Fusca”,
“ano”: 1950,
“categoria”: “Colecionador”,
“raridade”: “Muito raro”
}
```

Formato JavaScript:

```js
{
id: 15,
carro: “Fusca”,
ano: 1950,
categoria: “Colecionador”,
raridade: “Muito raro”
}
```

Como observado acima, JSON e JavaScript armazenam dados de formas diferentes. E a sintaxe de ambos, apesar de terem algumas diferenças, são bastante similares e pouco verbosas(muito ou pouco verboso, na programação, são expressões para caracterizar quando algum bloco de código possui muito ou pouco caracteres).

O JSON é o padrão mais utilizado para troca de informações atualmente entre APIs, porém não é o único. Existem também outras soluções, o XML, é uma dessas soluções, sua sintaxe é mais verbosa, e utiliza o sistema de tags para guardar os dados.

Formato XML:

```xml
<auto id=”15”>
    <carro>FUSCA</carro>
    <ano>1950<ano>
    <categoria>Colecionador</categoria>
    <raridade></raridade>
</auto>
```

Apesar de simples, o formato JSON exige que os dados devam seguir alguns padrões:

Os dados devem sempre estar entre aspas duplas ” ”
É possível armazenar dados primitivos(string, number para número finitos, true, false e null)
Não são permitidas vírgulas após o último conjunto de chave/valor do objeto
Saber dessas regras acerca dos padrões de escrita do JSON é importante, porém, muito provavelmente não será a pessoa que estiver programando que irá refatorar os dados. Como realizado nesta aula, basta utilizar o método JSON.stringify, e essa refatoração irá ser automatizada.

- Exemplo:
  - js_manipulando_objetos_32



### 33 - GetItem

**GetItem**

- Valores que retornam false:

`Valores omitidos`, `0`, `Null`, `Underfined`, `""`, `false`.

- Exemplo:
  - js_manipulando_objetos_33


### 34 - Para saber mais: armazenadores de dados

**Para saber mais: armazenadores de dados**

Nesta aula, utilizamos o armazenador da web localStorage para salvar objetos. Dessa forma, vimos a sua importância na prática para permitir a usabilidade do projeto e como existem outros armazenadores web indico a leitura do artigo Armazenadores de dados do navegador, escrito por mim.

- Link: https://www.alura.com.br/artigos/armazenadores-de-dados-do-navegador

- Exemplo:
  - js_manipulando_objetos_34




### 35 - Conhecendo o localStorage

**Conhecendo o localStorage**

Nesta aula você utilizou o localStorage para salvar dados do JavaScript e permitiu a funcionalidade do projeto Lista de Compras. Dessa forma, foi possível manter os itens de compra na página.

Marque a alternativa correta sobre a transferência de dados entre o JavaScript e localStorage:

- Selecione uma alternativa

- A: A linguagem de programação JavaScript possibilita criar métodos para receber informações de quem estiver utilizando alguma aplicação, e também possui métodos de armazenar essas informações de forma persistente, não sendo necessário conectar uma aplicação a um banco de dados ou armazenador de dados, como o localStorage.

- B: A linguagem de programação JavaScript possibilita criar métodos para receber informações de quem estiver utilizando alguma aplicação, porém ela não possui métodos de armazenar essas informações de forma persistente, sendo sempre necessário conectar tal aplicação a um banco de dados ou armazenador de dados, como o localStorage para viabilizar sua funcionalidade.

- C: A linguagem de programação JavaScript possibilita criar métodos para receber informações de quem estiver utilizando alguma aplicação, porém ela não possui métodos para armazenar essas informações de forma persistente, sendo necessário conectar tal aplicação a um banco de dados ou armazenador de dados, como o localStorage.

`Parabéns! A linguagem JavaScript possibilita receber informações e guardá-las em objetos, arrays, variáveis, porém não possui métodos próprios para guardar de forma persistente esses dados, para isso existem banco de dados e armazenadores de dados.`

- Exemplo:
  - js_manipulando_objetos_35


### 36 - O que aprendemos?

**O que aprendemos?**


- Nessa aula, você aprendeu como:
  - Implementou métodos para tratar dados e salvá-los no localStorage;
  - Utilizou o JSON para viabilizar a transferência de dados para uma API;
  - Implementou métodos setItem e getItem para enviar e recuperar dados.

- Exemplo:
  - js_manipulando_objetos_36



##
### Parte 5 - Deploy
##

### 37 - Projeto da aula anterior

**Projeto da aula anterior**


- Exemplo:
  - js_manipulando_objetos_37


### 38 - Deploy no GitHub

**Deploy no GitHub**

- Vercel
  - Link: https://lista-de-compras-alura-js.vercel.app/

- Exemplo:
  - js_manipulando_objetos_38


### 39 - Para saber mais: conhecendo o GitHub

**Para saber mais: conhecendo o GitHub**

Apresentei para você o GitHub, que é o repositório online mais utilizado por empresas de tecnologia e pessoas programadoras atualmente. E assim, para guardar e fazer deploy do seu projeto!

Para aprender e praticar mais Git e GitHub, você pode realizar o curso Git e GitHub: repositório, commit e versões aqui da Alura.

- Curso GITHUB:
  - Link: https://cursos.alura.com.br/course/git-github-repositorio-commit-versoes

- Exemplo:
  - js_manipulando_objetos_39




### 40 - Para saber mais: explorando o this

**Para saber mais: explorando o this**

O this no JavaScript aponta para um objeto, e o objeto para onde está apontando, varia dependendo do contexto onde o this está inserido.

Por padrão, quando chamamos o this sem nenhuma referência no escopo global, por exemplo, chamando direto no console: console.log(this), ele vai sempre estar apontando para o window, que é o objeto global do navegador.

```js
console.log(this === window)        // true
```

```js
this.idade = 37
console.log(window.idade)             //37
```

Alguns contextos do this em funções
No exemplo abaixo, quando serie.retornaSerie() é declarado no console, o this dentro da função é vinculado ao objeto filme.

```js
var serie = {
  titulo: "Wandinha",
  retornaSerie: function() {
  return this.titulo;
    }
};

console.log("O título da série é " + serie.retornaSerie());    // O título da série é Wandinha
```

Seria possível também definir a função e objeto separados e apenas depois anexar o objeto à função:

```js
var serie = {
  titulo: "Wandinha"

}
  function retornaSerie() {
    return this.titulo;
}

serie.novaSerie = retornaSerie

console.log("O título da série é " + serie.novaSerie());     //  O título da série é Wandinha
```

O this em arrow functions
Caso você utilize o this em uma arrow function, o seu valor será herdado do this do escopo que envolve a declaração da arrow function, o escopo léxico. Para entender melhor, confere o exemplo abaixo:

```js
const serie = {
  titulo: "Wandinha",
    retornaSerie: () => this.titulo
}

console.log("O título da série é " + serie.retornaSerie());      // O título da série é undefined
```

Neste código, o this está declarado em uma arrow function, e essa função está declarada em um objeto no escopo global. Como o this na arrow function herda o escopo do elemento pai, que nesse caso é o objeto que se encontra no escopo global, a arrow function aponta para o window. O objeto global window não possui nenhuma chave com o nome titulo, e por esse motivo, o console retorna undefined.

É importante entender que a forma de uso do this deve variar de acordo com o seu contexto. Gostaria de compartilhar mais alguma outra forma do uso do this? Compartilha com a gente no fórum.

Se você deseja entender mais sobre o this também no contexto de Classes, pode conferir no artigo This, Getters e Setters, escrito pela Rafaella Ballerini. E se deseja entender mais sobre Arrow Functions, separei o artigo Conhecendo Arrow Functions, escrito pelo instrutor Felipe Nascimento.

- https://www.alura.com.br/artigos/as-classes-no-javascript
- https://www.alura.com.br/artigos/conhecendo-arrow-functions

- Exemplo:
  - js_manipulando_objetos_40


### 41 - Acessando objeto com this

**Acessando objeto com this**

Nesta aula conhecemos o uso da função this, e como é possível acessar objetos com seu uso, vamos praticar? Marque a alternativa na qual a função retorna no console:

```js
Seja bem-vinda Carla 
```

- Selecione uma alternativa

- A: 
```js
var pessoa = {
  nome: "Carla",
  idade: 37,
  profissao: "Desenvolvedora Front-end",
  mostraNome: function() {
    return this.nome;
  }
};

console.log("Seja bem-vinda " + pessoa.mostraNome());
```

`O this busca o objeto primeiro no escopo onde se encontra, dentro da função mostraNome, como não encontra, ele segue para o escopo anterior, ao qual a função está declarada. E assim, localiza o valor da chave nome do objeto pessoa.`

- B:

```js
const pessoa = {          
  nome: "Carla",
  idade: 37,
  profissao: "Desenvolvedora Front-end",
  mostraPessoa: () => this.nome
}

console.log("Seja bem-vinda " + mostraPessoa()); 
```

- C:

```js
const pessoa = {          
  nome: "Carla",
  idade: 37,
  profissao: "Desenvolvedora Front-end",
  mostraPessoa: () => this.nome
}

console.log("Seja bem-vinda " + pessoa.mostraPessoa()); 
```

- Exemplo:
  - js_manipulando_objetos_41
















































