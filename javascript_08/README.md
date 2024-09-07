##
### JavaScript: de padrões a uma abordagem funcional
##



<p align="center">
  <img alt="...." src="./src/jscurso.jpg" width="100%">
</p>

##
### Parte 1 - Organização inicial do projeto e primeira atividade
##


### 1 - Visão geral do curso

**Visão geral do curso**

- Faça esse curso de JavaScript e:
  - Entenda e utilize aplicação parcial de funções
  - Transforme dados através da composição de funções
  - Transcenda as limitações de Promises implementando novos recursos
  - Crie funções para ajudá-lo na programação funcional
  - Compreenda conceitos como Functor, point-free style entre outros jargões
  - Aplique o pattern Publisher/Subscriber para desacoplar seu código
  - Compreenda como mônadas podem ajudá-lo em uma estrutura funcional


- Exemplo:
  - javascript_01







### 2 - (Obrigatório) Download do projeto e infraestrutra

**(Obrigatório) Download do projeto e infraestrutra**


Olá, sou Flávio Almeida. Neste exercício você encontrará o link de download do projeto do curso e toda infraestrutura necessária para poder dar continuidade com seus estudos.

- O arquivo do projeto

O projeto que utilizaremos no curso deve ser baixado aqui. É um arquivo zip que precisa ser descompactado em sua Área de Trabalho ou qualquer outro diretório que você esteja confortável em trabalhar. Porém, antes que você possa subir o servidor é importante verificar os requisitos mínimos de infraestrutura a seguir. No final desta atividade, você terá acesso aos comandos que serão utilizados para subir o servidor.

- Infraestrutura 1 - Node.js 8.0 ou superior (versões pares apenas)

Você pode baixar o Node.js da sua plataforma preferida (Windows, MAC ou Linux) em https://nodejs.org. Depois de instalá-lo, para saber se ele está funcionando, basta abrir seu terminal preferido da sua plataforma e executar o comando (logo a seguir, veja as dicas caso o comando não funcione):

```
node --version
```

Este comando deve exibir a versão do Node instalada no terminal.

ATENÇÃO USUÁRIOS LINUX: algumas distribuições Linux já possuem um binário chamado node, que não tem nenhuma relação com o Node.js. Nestas distribuições, o binário passa a se chamar nodejs. Sendo assim, em todo lugar que eu referenciar o comando node ele deve ser trocado para nodejs.

- Infraestrutura 2 - Chrome!

Neste treinamento é necessário usar o Google Chrome versão 63 ou superior. É compulsória essa escolha do navegador. Nós utilizaremos o sistema de módulos nativos do ES2015 suportado pelo Chrome, evitando assim que tenhamos que elaborar toda uma infraestrutura especial para isso. Outros navegadores do mercado ainda não suportam esse recurso na data de lançamento deste curso.

Caso você tenha interesse em saber como garantir que todos os módulos escritos em ES2015 sejam suportados em todos os outros navegadores, confira esses dois cursos abaixo.

- Curso JavaScript Avançado III: ES6, orientação a objetos e padrões de projetos
  - Link: https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-3
- Curso Webpack: Manipulando módulos na sua webapp
  - Link: https://cursos.alura.com.br/course/webpack


Novamente, é importante ficar claro que não nos preocuparemos com essa infraestrutura e pegaremos carona no sistema de módulos do Chrome. Aliás, em um futuro próximo ele será o padrão entre os navegadores.

Subindo o servidor
Com os requerimentos de infraestrutura atendidos e com o zip do projeto descompactado, para levantá-lo, abra seu terminal favorito e entre na pasta project. Dentro dela, execute o comando:

```
node server
```

Se você utiliza Linux e o Node.js foi instalado como nodejs, faça nodejs server.

A instrução fará com que o servidor fique de pé e exiba no console a seguinte mensagem:

Server is running at 

```
http://localhost:3000
```

Abra seu navegador favorito e acesse o endereço http://localhost:3000. Deverá ser exibida uma página com um botão apenas.

Agora com tudo em seu devido lugar, podemos dar início ao treinamento. Vamos começar pelo sistema de módulos do ES2015 e seu suporte pelo Chrome.



- Exemplo:
  - javascript_02




### 3 - Projeto e sua estrutura

**Projeto e sua estrutura**

- Exemplo:
  - javascript_03


### 4 - Problemas ao levantar o servidor

**Problemas ao levantar o servidor**

Fernando baixou o projeto do curso descompactando-o na sua área de trabalho (Desktop). Através do seu sistema operacional, ele abriu seu terminal (ou prompt de comando no Windows), se dirigiu para a pasta project e executou o comando node server. Contudo, o servidor não foi iniciado.

Marque as opções que indicam as possíveis causas da não execução do servidor:

- Selecione 3 alternativas

- A: Em um sistema operacional Linux, não é raro o binário do node se chamar node.js. Nesse sentido, deve ser utilizado o comando nodejs server.
`Ok`

- B: A plataforma Node.js não foi instalada, desta maneira, o binário node não estará disponível através do terminal/prompt de comando.
`Ok`

- C: Ele digitou o comando errado, deveria ser server apenas.


- D: A pasta acessada através do terminal/prompt de comando não é a pasta project, logo, a execução do comando node server não encontrará o arquivo server.js. Para resolver, basta entrar na pasta correta e repetir o último comando.
`Ok`

- E: Provavelmente ele utilizou o sistema operacional Windows, que não suporta a plataforma Node.js.

- Exemplo:
  - javascript_04


### 5 - Organizando o código em módulos

**Organizando o código em módulos**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_05



### 6 - Sobre carregamento de módulos

**Sobre carregamento de módulos**


Marque as afirmativas verdadeiras a respeito do carregamento de módulos nos navegadores:

- Selecione 2 alternativas

- A: Em 2017, alguns navegadores do mercado começaram a ensaiar um sistema de carregamento nativo de módulos que dispensa bibliotecas (loaders) ou qualquer processo de build no backend. Por mais que seja um passo importante, aplicações em produção ainda precisam se valer de loaders e processos de build para que seja compatível com todos os navegadores do mercado.
`Ainda em janeiro de 2018 não podemos confiar no suporte nativo de módulos dos navegadores, pois nem todos suportam. Sendo assim, utilizar em produção loaders e processos de build ainda é necessário. No entanto, em um futuro próximo eles não serão mais necessários.`

- B: Hoje, (janeiro/2018) podemos usar o sistema de módulo nativos dos navegadores sem receio algum.


- C: O ES2015 não especificou como seus módulos devem ser carregados pelos navegadores. Deixando esse ponto em aberto, a comunidade tapou essa lacuna na especificação através de bibliotecas (loaders) focadas no carregamento de módulos.
`Os loaders visam atender a necessidade de carregamento de módulos nos navegadores!`

- D: Carregamento de módulos nativos também são feitos através da tag script desta maneira: `<script src="modulo.js"></script>`.

- Exemplo:
  - javascript_06


### 7 - Carregamento nativo ou via build?

**Carregamento nativo ou via build?**

Supondo a web perfeita e que todos os navegadores suportam o carregamento nativo de módulos do ES2015, podemos abdicar de build para adequação e carregamento dos módulos em qualquer navegador?

A resposta para essa pergunta é depende. Quando usamos o carregamento nativo realizamos uma requisição para cada módulo da aplicação. Se por algum motivo essas requisições tiverem impacto no tempo de carregamento da aplicação e por conseguinte na experiência do usuário, agrupar módulos em bundles e carregá-los sob demanda pode ser a solução. Nesse sentido, torna-se necessário um ferramental mais elaborado para o build do projeto.

Por fim, fica evidente que o carregamento nativo de módulos não veio substituir por completo processos de builds que geram e otimizam bundles de módulos para serem carregados pela aplicação sob demanda ou não. Tudo depende da complexidade da aplicação em si.

No entanto, se o programador front-end é focado na criação de páginas webs tradicionais não SPA, migrar para o carregamento de módulos nativos (quando consolidado nos navegadores) será uma opção melhor do que carregar cada script em separado da aplicação e ter que lembrar a ordem de precedência entre eles.

- Exemplo:
  - javascript_07


### 8 - Relembrando Promises e a API Fetch

**Relembrando Promises e a API Fetch**

Este curso pressupõe que o aluno tenha conhecimento prévio de `Promises` e que tenha tido um contato, ainda que ínfimo, com a API Fetch. Como diz o ditado, "recordar é viver", vamos recapitular os conceitos fundamentais antes que você assista o próximo vídeo.

Promises retornam o resultado futuro de uma ação

O padrão `Promise` adicionado à especificação ES2015 nos auxilia a lidar com o resultado futuro de uma ação, em outras palavras, essa especificação brilha no tratamento de operações assíncronas substituindo callbacks que podem dificultar a leitura e manutenção do código. Esse problema decorrente de callbacks aninhados é chamado de callback HELL.

Uma Promise possui estados. Os mais importantes são o `resolved` e o `rejected`. O primeiro é quando a Promise realiza seu objetivo, já o segundo ocorre quando, por algum motivo, ela é impedida de ser resolvida. Não é permitido que uma Promise no estado `resolved` vá para o estado `rejected` e vice-versa. Nesse sentido, uma `Promise` é imutável. No entanto, Promises podem retornar novas `Promises` a partir de suas operações.

API Fetch adere à espeficação Promise

A API Fetch, que veio simplificar em muito a realização de requisições assíncronas (Ajax) adere à especificação Promise. Vejamos um exemplo:

```js
fetch('http://endereco-de-uma-api')
    .then(res => console.log(res));
```

A chamada `fetch('http://endereco-de-uma-api')` retorna uma `Promise`. Toda `Promise` possui o método `then` que será chamado apenas quando a operação for resolvida. No caso da API Fetch, recebemos como resposta um objeto com o fluxo de resposta do servidor. Geralmente, precisamos realizar o parser da resposta através de `JSON.parse`, contudo o fluxo de resposta vindo do servidor representado como um objeto possui o método `json()` que realiza esse parser para nós:

```js
fetch('http://endereco-de-uma-api')
    .then(res => res.json())
    .then(retorno => console.log(retorno));
```

A instrução `then(res => res.json());` retorna o resultado de `res.json()`, pois uma arrow function sem bloco possui um retorno implícito. Todo dado retornado por `then()` é encapsulado em uma nova `Promise`, por isso podemos encadear uma nova chamada à `then()` para termos acesso aos dados retornados. Podemos simplificar nosso código ainda desta forma:

```js
fetch('http://endereco-de-uma-api')
    .then(res => res.json())
    .then(console.log);
```

Mas se algo der errado? É através do método `catch` que lidamos com erros de rejeição da `Promise`:

```js
fetch('http://endereco-de-uma-api')
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.log(err));
```

Qualquer erro lançado pela `Promise` será capturado no método `catch`.

Para terminarmos, é importante consultarmos o status da requisição, porque qualquer resposta vinda do servidor será uma resposta válida, mesmo as de erro como 404, 500 e assim por diante. A API Fetch nos dá um atalho para verificar o status da requisição:

```js
fetch('http://endereco-de-uma-api')
    .then(res => {
        // se true, retorna os dados parseados
        if(res.ok) return res.json();
        // retorna uma Promise rejeitada com a informação vinda do servidor
        return Promise.reject(res.statusText);
    })
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.log(err));
    // ou .catch(console.log);
```

Ao longo deste treinamento extrapolaremos o conhecimento que temos sobre Promises, por isso estar seguro nesta tecnologia é importante.

- Exemplo:
  - javascript_08



### 9 - Sobre Promise

**Sobre Promise**

Temos uma Promise que ao ser resolvida, retornará a quantidade de alunos de uma turma de uma API.

Marque a única alternativa correta que resolve a Promise obtendo seu valor, inclusive lidando com possíveis exceções durante a operação:

- A:
```js
promise
    .then(quantidade => alert(quantidade))
    .catch(err => console.log(err));
```
`Exato! Ela define corretamente o método then e catch.`

- B:
```js
promise
    .then(quantidade => alert(quantidade));
    .catch(err => console.log(err));
```
- C:
```js
promise
    .then(() => alert(quantidade))
    .catch(err => console.log(err));
```

- Exemplo:
  - javascript_09



### 10 - Consumindo endpoint REST com a API Fetch

**Consumindo endpoint REST com a API Fetch**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_10




### 11 - Consolidando seu conhecimento

**Consolidando seu conhecimento**

 
Para que você consiga acompanhar as próximas aulas, implemente o que foi apresentado no vídeo. Caso já tenha feito, a ideia é que revise todo o conteúdo antes de continuar.

- VER OPINIÃO DO INSTRUTOR

Dúvidas? Você pode recorrer ao vídeo e às explicações do capítulo. Se ainda assim as dúvidas continuarem, procure imediatamente ajuda em nosso fórum.

- Exemplo:
  - javascript_11


### 12 - O que aprendemos?

**O que aprendemos?**

- Nesta aula aprendemos:
  - Os requisitos de infraestrutura necessários para o curso
  - A levantar o servidor disponibilizado com o projeto baixado
  - A utilizar o mecanismo de importação nativa de módulos do ES2015 suportado pelo Chrome
  - Saber avaliar quando utilizar a importação nativa ou loaders com processos de build.
  - O papel de Promises e da API Fetch ao longo do curso.
  - A Consumir a API do projeto através da API Fetch

- Exemplo:
  - javascript_12

##
### Parte 2 - Adequação dos dados recebidos
##

### 13 - Somando todos os itens com código específico

**Somando todos os itens com código específico**

- Exemplo:
  - javascript_13



### 14 - Recordando a função Array.filter

**Recordando a função Array.filter**

Temos a seguinte lista de números:

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];
```

Podemos filtrar a lista a partir de algum critério:

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(number => number % 2);
```

Marque a opção que possui o valor de filteredNumbers:

- A: 
```js
[1, 3, 5, 7, 9]
```
`Correto!`

- B: 
```js
[]
```

- C: 
```js
[2, 4, 6, 9, 10]
```


- Exemplo:
  - javascript_14


### 15 - Recordando a função Array.map


**Recordando a função Array.map**

Temos a seguinte lista de números:

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];
```

Podemos aplicar uma regra de transformação em cada elemento do array resultando em um novo array com a mesma quantidade de elementos do array original. Isso é feito através da função Array.map:

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.map(number => {
    if(number % 2) return ++number
    return number;
});
```

Marque a opção que exibe o valor de newNumbers:

- Selecione uma alternativa


- A:
```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- B:
```js
[1, 3, 3, 5, 5, 7, 7, 9, 9, 11]
```

- C:
```js
[2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
```
`Exato! Se o número não for divisível por dois, retornaremos seu valor acrescido de um, caso contrário retornaremos o seu valor original.`


- Exemplo:
  - javascript_15




### 16 - Recordando a função Array.reduce

**Recordando a função Array.reduce**

Temos o seguinte lista de números:

```js
const numbers = [1,2,3,4,5,6,7,8,9,10];
```

Marque a opção que aplica corretamente a função Array.reduce retornando o total da soma dos números:

- Selecione uma alternativa

- A: 
```js
const sum = numbers
    .reduce(previous, number => 
        previous + number, 0);
```

- B: 
```js
const sum = numbers
    .reduce(previous, number) =>
         previous + number, 0);
```

- C: 
```js
const sum = numbers
    .reduce((previous, number) => 
        previous + number, 0);
```
`Extato!`


- Exemplo:
  - javascript_16



### 17 - Implementando a função Log

**Implementando a função Log**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_17



### 18 - Implementando a função flatMap

**Implementando a função flatMap**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_18




### 19 - Sobre modificações no prototype

**Sobre modificações no prototype**

A respeito da modificação do prototype, temos o seguinte código:

```js
const scream1 = 'Leeroy Jenkins!';
String.prototype.shout = function() {
    alert(this);
};
const scream2 = 'Atheon, raid Boss!';
scream1.shout();
scream2.shout();
```

Sobre o código anterior, podemos afirmar que:

- Selecione uma alternativa

- A: Apenas a chamada de scream2.shout() funcionará, pois a string foi criada antes da modificação de String.proptotype.


- B: O código funcionará sem problema algum, pois qualquer modificação realizada no prototype é disponibilizada para todos os objetos daquele tipo, pois eles referenciam o mesmo prototype.
`Exato!`

- C: A chamada de scream1.shout() não funcionará, pois a string foi criada antes da modificação de String.prototype.

- Exemplo:
  - javascript_19


### 20 - Sobre Array, Functor e flatmap

**Sobre Array, Functor e flatmap**


- Temos as seguintes afirmativas:

a) Apesar de possuir a função map, o tipo Array não pode ser considerado um Functor.

b) No jargão da programação funcional um Functor é simplesmente algo mapeável, ou seja, que suporta a operação map.

c) A operação flatMap se assemelha da função map, com a diferença de que retorna o resultado em uma dimensão apenas.

Marque a alternativa verdadeira:

- Selecione uma alternativa

- A: A e C são falsas


- B: Todas são verdadeiras


- C: Apenas A é falsa
`Correta! O Array é um Functor, pois permite realizar operações de mapeamento em seus itens, isto é, nos dados que possui.`

- Exemplo:
  - javascript_20







### 21 - Deixando clara nossa intenção

**Deixando clara nossa intenção**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_21




### 22 - A classe de serviço

**A classe de serviço**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_22


### 23 - Consolidando seu conhecimento

**Consolidando seu conhecimento**

- Exemplo:
  - javascript_23


### 24 - O que aprendemos?

**O que aprendemos?**

- Aprendemos neste capítulo:
  - Recordarmos operações clássicas com Array.map, Array.filter, Array.reduce
  - Implementamos uma função para nos auxiliar no log das chamadas de Promises
  - Aprendemos a definição de Functor e sua finalidade.
  - Entendemos e implementamos a função $flatMap adicionando-a no prototype de Array, um Functor.
  - Deixamos clara a intenção do nosso código separando um trecho de código em uma função.

- Exemplo:
  - javascript_24

##
### Parte 3 - Composição de funções
##


### 25 - Separando responsabilidades

**Separando responsabilidades**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_25



### 26 - Análise de um código

**Análise de um código**

Temos um trecho de código que itera em uma Map chamado stores.

```js
// código anterior omitido
for (let [key, value] of stores) {
    if(transactionalConn.objectStoreNames.contains(value)) 
        transactionalConn.deleteObjectStore(value);
    transactionalConn.createObjectStore(value, { autoIncrement: true });
}
```

Por mais que seja um código que não foi abordado neste curso, o programador deve ser capaz de compreender o que ele faz.

Marque a única alternativa verdadeira a respeito do trecho de código anterior:

- Selecione uma alternativa

- A: Verifica através de uma conexão se uma store já existe para em seguida criar a store.


- B: Verifica através de uma conexão se uma store já existe. Caso a store exista, ela é apagada e criada novamente.
`Exato!`

- C: Verifica através de uma conexão se uma store já existe. Caso a store não exista, ela é criada.

- Exemplo:
  - javascript_26



### 27 - Refatorando o código

**Refatorando o código**

Refatorar consiste em alterar a estrutura do código sem alterar seu comportamento. Vejamos um código candidato à refatoração:

```js
// código anterior omitido
for (let [key, store] of stores) {
    if(transactionalConn.objectStoreNames.contains(store)) 
        transactionalConn.deleteObjectStore(store);
    transactionalConn.createObjectStore(store, { autoIncrement: true });
}  
```

Podemos reescrevê-lo da seguinte maneira:

```js
const storeExists = (conn, store) => conn.objectStoreNames.contains(store);
const createStore = (conn, store) => conn.createObjectStore(store, { autoIncrement: true });
const deleteStore = (conn, store) => conn.deleteObjectStore(store);

// código anterior omitido 

for (let [key, store] of stores) {
    if(storeExists(conn, store)) deleteStore(conn, store);
    createStore(conn, store);
}  
```

Separar as responsabilidades tornou o código mais fácil de ler e de manter.

- Exemplo:
  - javascript_27


### 28 - Partial application

**Partial application**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_28




### 29 - Aplicação parcial de uma função

**Aplicação parcial de uma função**

Temos a seguinte função

```js
const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
changeTextFromElement(message, 'Welcome');
changeTextFromElement(message, 'See ya');
```

Marque a opção que realiza a partial application do primeiro parâmetro da função:

- Selecione uma alternativa

- A:
```js
const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
const changeText = changeTextFromElement.bind(null, message);

changeText('Welcome');
changeText('See ya!');
```

`Exato!`


- B:
```js
const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
const changeText = changeText.bind(null, message);

changeText('Welcome');
changeText('See ya!');
```

- C:
```js
const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
const changeText = changeTextFromElement.bind( message, null);

changeText('Welcome');
changeText('See ya!');
```


- Exemplo:
  - javascript_29



### 30 - Compondo funções

**Compondo funções**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_30


### 31 - Uma abordagem mais funcional

**Uma abordagem mais funcional**

Temos o seguinte código que remove os espaços das extremidades, transforma o texto para caixa alta e quebra as palavras retornando um array:

```js
const text = ' Alura Cursos ';
const words = text.trim()
  .toUpperCase()
  .split(' ');

console.log(words); // ['ALURA', 'CURSOS']
```

Podemos reescrever o código anterior de uma maneira que lembre a aplicação de funções matemáticas. Marque a opção que realiza essa reescrita corretamente:

- Selecione uma alternativa

- A: 
```js
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words = 
  trim(' Alura cursos ')( 
    toUpperCase(
      split(' ')
    )
  );

console.log(words);
```

- B: 
```js
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text.split(separator);

const words = 
  split(' ')( 
    toUpperCase(
      trim(' Alura Cursos ')
    )
  );

console.log(words);
```

- C: 
```js
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words = 
  split(' ')( 
    toUpperCase(
      trim(' Alura Cursos ')
    )
  );

console.log(words);
```

`Correto!`

- Exemplo:
  - javascript_31


### 32 - Facilitando a composição de funções

**Facilitando a composição de funções**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_32



### 33 - Relembrando...

**Relembrando...**

Temos o seguinte trecho de código:

```js
const letters = ['z', 'a', 'c', 'w']
const word = letters.reduceRight((previous, letter) => previous + letter)
console.log(word);
```

Qual é o resultado de `word`?

- Selecione uma alternativa

- A: 'zacw'

- B: 'wcaz'
`Exato!`

- C: Nenhum, pois o código resultará em um erro, pois não foi inicializado o valor inicial da variável acumuladora.

- Exemplo:
  - javascript_33



### 34 - Compose vs Pipe

**Compose vs Pipe**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_34



### 35 - Consolidando seu conhecimento

**Consolidando seu conhecimento**

Para que você consiga acompanhar as próximas aulas, implemente o que foi apresentado no vídeo. Caso já tenha feito, a ideia é que revise todo o conteúdo antes de continuar.

- Opinião do instrutor

Dúvidas? Você pode recorrer ao vídeo e às explicações do capítulo. Se ainda assim as dúvidas continuarem, procure imediatamente ajuda em nosso fórum.

- Exemplo:
  - javascript_35

### 36 - O que aprendemos?

**O que aprendemos?**

- Neste capítulo:
  - Deixamos mais claro nosso código desmembrando uma função em outras funções.
  - Vimos que para realizarmos a composição de funções elas precisam receber um parâmetro.
  - Aprendemos o conceito de aplicação parcial, inclusive criamos uma função utilitária com essa finalidade.
  - Realizamos a composição de funções através das funções utilitárias que criamos chamadas compose e pipe.
  - Compreendemos o que é uma função ser point free.
  - Isolamos a complexidade de acesso de uma API em uma classe de serviço.

- Exemplo:
  - javascript_36

##
### Parte 4 - Adequação da interação do usuário
##


### 37 - Limitando operações - takeUntil

**Limitando operações - takeUntil**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_37


### 38 - Véspera de carnaval

**Véspera de carnaval**

Henrique criou a seguinte função inspirado na semana de carnaval:

```js
const carnavalizar = adereco => texto => `${adereco}${texto}${adereco}`;
const resultado = carnavalizar('@')('Nota 10!');
```

Qual o valor de resultado?

- A: @Nota 10!@
`Exato!`

- B: Nenhum, pois o código é inválido para o interpretador JavaScript.


- C: Nota@@10!

- Exemplo:
  - javascript_38


### 39 - Limitando operações - debounceTime

**Limitando operações - debounceTime**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_39


### 40 - De uma API a sua implementação

**De uma API a sua implementação**

Temos a seguinte chamada de função stoppableInterval:

```js
const stop = stoppableInterval(() => 
  console.log('Yo!'), 1000);
stop();
```
A função `stoppableInterval` recebe dois parâmetros. O primeiro é a função que desejamos invocar de tempo em tempo, já a segunda é o intervalo entre as chamadas da função. O retorno de `stoppableInterval` é uma função que ao ser chamada parará o `setInterval` utilizado por debaixo dos panos.

Marque a opção que implementa a função `stoppableInterval` em acordo com a API descrita acima:

- Selecione uma alternativa



- A:
```js
const stoppableInterval = (fn, milisseconds) => {
    return () {
        const timer = setInterval(fn, milisseconds);
        clearTimeout(timer);
    }
}
```

- B:
```js
const stoppableInterval = (fn, milisseconds) => {
    return () => {
        const timer = setInterval(fn, milisseconds);
        clearTimeout(timer);
    }
}
```

- C:
```js
const stoppableInterval = (fn, milisseconds) => {
    const timer = setInterval(fn, milisseconds);
    return () => {
        clearTimeout(timer);
    }
}
```
`Exato.`


- Exemplo:
  - javascript_40


### 41 - Resultado esperado

**Resultado esperado**

Temos o seguinte trecho de código:

```js
const fn = array => () => array.reverse();
const numbers = [1,2,3,4,5,6];
const reverse = fn(numbers);
reverse();
console.log(reverse());
```

Qual será o valor exibido através da instrução console.log(reverse());?

- Selecione uma alternativa

- A: O código esta sintaticamente incorreto.


- B: [6,5,4,3,2,1]


- C: [1,2,3,4,5,6]

`Exato!`

- Exemplo:
  - javascript_41


### 42 - Mais composição

**Mais composição**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_42


### 43 - Consolidando seu conhecimento

**Consolidando seu conhecimento**

Para que você consiga acompanhar as próximas aulas, implemente o que foi apresentado no vídeo. Caso já tenha feito, a ideia é que revise todo o conteúdo antes de continuar.

- Exemplo:
  - javascript_43

### 44 - O que aprendemos?

**O que aprendemos?**

Neste capítulo aprendemos:

A executar uma ação do usuário um determinado números de vezes.
A aplicar o pattern debounce para lidar com múltiplos cliques.
A realizar a composição de funções que recebem callbacks como parâmetros e que retornam funções.


- Exemplo:
  - javascript_44


##
### Parte 5 - Lidando com problemas na rede
##


### 45 - Lentidão na rede


**Lentidão na rede**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_45



### 46 - Promise.race


**Promise.race**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas


- Exemplo:
  - javascript_46



### 47 - Corrida de Promises


**Corrida de Promises**


Temos o seguinte código que utiliza Promise.race:

```js
const promise1 = new Promise((resolve, reject) => 
    setTimeout(() => resolve('promise 1 resolvida'), 3000));

const promise2 = new Promise((resolve, reject) => 
    setTimeout(() => resolve('promise 2 resolvida'), 1000));

Promise.race(
    promise1, 
    promise2
)
.then(console.log)
.catch(console.log);
```

Podemos afirmar que:

- Selecione uma alternativa

- A: A mensagem "promise 2 resolvida" será exibida no console.log.


- B: A mensagem "promise 1 resolvida" será exibida no console.log.


- C: O código não funcionará.
`Exato. A função Promise.race recebe um único parâmetro, um array com as Promises que serão processadas.`

- Exemplo:
  - javascript_47





### 48 - Implementando timeout em Promises

**Implementando timeout em Promises**

- Terminal VSCode (GitBash, Prompt)
```
node server
```

- Localhost
  - Link: http://localhost:3000
  - Notas: http://localhost:3000/notas

- Exemplo:
  - javascript_48





