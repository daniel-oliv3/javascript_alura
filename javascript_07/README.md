##
### JavaScript: interfaces e Herança em Orientação a Objetos
##



<p align="center">
  <img alt="...." src="./src/js-imaagem.jpg" width="100%">
</p>

##
### Parte 1 - Conhecendo o problema do cliente
##


### 1 - Apresentação

**Apresentação**

- Faça esse curso de JavaScript e:
  - Aprofunde seus conhecimentos em Orientação a objetos
  - Saiba o que é o "DuckType"
  - Entenda quando e como usar herança dentro de seus projetos
  - Conheça boas práticas de programação
  - Veja código JavaScript moderno que você pode utilizar em seus projetos


- Exemplo:
  - javascript_01


### 2 - Projeto Inicial

**Projeto Inicial**

Atenção: para esse curso precisaremos usar o NodeJS a partir da versão 13.0 pois ela adiciona a capacidade de usarmos módulos JS dentro do Node.

- Exemplo:
  - javascript_02


### 3 - Relembrando o projeto

**Relembrando o projeto**

- Classes
  - Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_03






### 4 - Compartilhando código

**Compartilhando código**

- Exemplo:
  - javascript_04


### 5 - Pensando na manutenção

**Pensando na manutenção**

Laís está escrevendo um código para seu cliente e acabou criando duas classes para representar os alunos e professores do seu sistema de ensino.

Seu código está assim:

```js
class Aluno{
    constructor(nome, cpf, idade) {
            this.nome = nome;
            this.cpf = cpf;
        this.idade = idade;
    }
}

class Professor{
    constructor(nome, cpf, idade) {
            this.nome = nome;
            this.cpf = cpf;
        this.idade = idade;
    }
}
```

Agora a escola pediu para que ela adicionasse uma nova propriedade "RG" para o aluno e o professor. Qual o problema desse código nesse contexto?

- Alternativa correta

- A: Da maneira que está o código não será executado pelo JS, pois ela apenas declarou propriedades, mas não adicionou nenhum método na classe.


- B: Ela terá que adicionar a propriedade individualmente em cada classe e em casos com mais classes que compartilham propriedades esses trabalho será maior ainda.

`Exatamente! Além do fato dela poder esquecer de alterar alguma classe por ter código duplicado no projeto`


- C: O problema é que ela declarou todos os atributos da classe como sendo públicos e sabemos que a boa prática é sempre declarar eles de forma privada.

- Exemplo:
  - javascript_05




### 6 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- VER OPINIÃO DO INSTRUTOR

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - javascript_06


### 7 - O que aprendemos?

**O que aprendemos?**

- O que aprendemos nessa aula:
  - Relembramos conceitos de classe, propriedades e métodos
  - Boas práticas na hora de declarar atributos
  - Declarando sempre as propriedades como sendo privadas inicialmente
  - Problemas de duplicação de código
  - Problemas de código extremamente compartilhado

- Exemplo:
  - javascript_07


##
### Parte 2 - Herança
##


### 8 - Projeto da Aula anterior

**Projeto da Aula anterior**

- Exemplo:
  - javascript_08


### 9 - Herança

**Herança**

- Exemplo:
  - javascript_09


### 10 - Sintaxe do JS

**Sintaxe do JS**


Qual a sintaxe do JavaScript para herdarmos de uma classe?

- A:

```js
class Carro extends Veiculo
```
`Exatamente! dessa forma a classe carro herda as propriedades e métodos da classe Veículo`


- B:

```js
class Carro(Veiculo)
```

- C:

```js
class Carro : Veiculo
```

- D:

```js
class Carro < veiculo
```


- Exemplo:
  - javascript_10


### 11 - Super e sobrescrita

**Super e sobrescrita**

- Exemplo:
  - javascript_11


### 12 - Métodos de mesmo nome

**Métodos de mesmo nome**

Douglas começou a testar o que aprendeu com herança e escreveu o código abaixo:

```js
class Funcionario{
    getBonificacao(){
        return 100;
    }
}
class Diretor extends Funcionario{
    getBonificacao(){
        return 200;
    }
}
class DiretorTI extends Diretor{

}
```

O problema é que quando ele instanciou um DiretorTI e chamou o método GetBonificacao ele recebeu o valor de 200 e não de 100 como ele esperava. Por que isso aconteceu?

- Selecione 2 alternativas

- A: Só acontece porque a classe DiretorTI não sobrescreveu o método getBonificacao
`Sim, se ele sobrescrever esse método a classe funcionará da maneira que ele espera. Porém esse código estará sendo sobrescrito em todas as camadas da hierarquia de classes. Será que é uma boa opção?`

- B: Isso acontece porque a classe DiretorTI herda da classe Diretor e ela está sobrescrevendo o método getBonificacao da classe `Funcionário.
`Isso mesmo! Com a herança podemos herdar classes que herdam de outras classes. E conforme essa cadeia cresce a complexidade do código tbm cresce. Por isso é considerada uma má prática criarmos árvores de herança muito profundas.`

- C: Isso acontece por que ele herdou da classe Funcionario e essa é a maneira que ela implementa o código.

- Exemplo:
  - javascript_12


### 13 - Privado e protegido

**Privado e protegido**

- Exemplo:
  - javascript_13


### 14 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- VER OPINIÃO DO INSTRUTOR


Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - javascript_14


### 15 - O que aprendemos?

**O que aprendemos?**

- O que aprendemos nessa aula:
  - Especializando código
  - Herdando propriedades e atributos
  - Sobrescrita de métodos
  - Compartilhando código de forma segura
  - Mantendo nosso código na linguagem do cliente
  - Evitando código muito complicado através da herança
  - Palavra-chave Super
  - Método e propriedades privadas e protegidas

- Exemplo:
  - javascript_15



##
### Parte 3 - Classes abstratas
##


### 16 - Projeto da Aula anterior

**Projeto da Aula anterior**

- Exemplo:
  - javascript_16


### 17 - Propriedade constructor

**Propriedade constructor**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_17


### 18 - Classes Abstratas

**Classes Abstratas**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_18


### 19 - Design de código

**Design de código**

Júlia está criando um código para a empresa de sua mãe e ela precisa cadastrar os funcionários da empresa. Com isso ela criou o seguinte código:

```js
class Funcionario {
  constructor(nome, cpf, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this._salario = salario;
    this._bonificacao;
  }
}

class Gerente extends Funcionario {
  constructor(nome, cpf) {
    super(nome, cpf, 2400);
    this._bonificacao = 1.2;
  }
}

class Assistente extends Funcionario {
  constructor(nome, cpf) {
    super(nome, cpf, 1200);
    this._bonificacao = 0.9;
  }
}
```

Com essas classes ela tem uma maneira de saber quem são os funcionários dentro da empresa dos seus pais. Porém existem alguns cargos dentro da empresa que só existe um funcionário preenchendo eles. Por isso Júlia decidiu não criar classes filhas e usar diretamente a classe Funcionário para identificar esses cargos.

Qual o problema com essa decisão?

- Selecione 2 alternativas

- A: Ela terá um grande trabalho no futuro quando quiser adicionar uma classe para um tipo de funcionário que atualmente está sendo representado pela classe funcionário.
`Além da quantidade de trabalho ser grande ela corre o risco de esquecer de alterar algum lugar que atualmente usa a representação de funcionário.`

- B: O problema é que as classes Gerentee Assistente são especificas demais e não possuem real necessidade. Ela poderia usar apenas a classe Funcionário.


- C: Um dos problemas é que ela perde a informação de qual tipo de funcionário ela tem. Como ela está usando uma classe mais genérica ao invés de criar classes especificas ela não distingue cada tipo de funcionário.
`Exatamente! Ao desenvolvermos um sistema as classes mais abstratas e genéricas nos ajudam a delimitar os contextos de negócio que estamos trabalhando, mas as classes concretas e especificas nos dão informações mais granulares. Sempre é bom ter a quantidade certa de cada tipo de classe`

- Exemplo:
  - javascript_19



### 20 - Métodos Abstratos

**Métodos Abstratos**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_20










### 21 - Refletindo sobre o tema

**Refletindo sobre o tema**

Aprendemos nessa aula sobre o conceito de Métodos e Classes abstratas. Selecione as afirmativas corretas sobre esses temas:

- Selecione 2 alternativas

- A: Classes abstratas são classes que possuem classes filhas, mas ainda podem ser instanciadas diretamente.


- B: Classes abstratas são pensadas de forma que elas apenas possam ser herdadas por outras.
`Exatamente, elas nos ajudam a criar abstrações no código e a compartilhar código entre outras classes`

- C: Métodos abstratos devem ser sobrescritos pelas classes filhas.
`Isso mesmo, dessa forma não faz sentido termos um método abstrato fora de uma classe abstrata. Tome esse cuidado quando for criar seu código.`

- D: Um método abstrato é qualquer método que lance um erro quando for chamado.


- E: Nosso programa pode ser composto apenas de classes abstrata.


- Exemplo:
  - javascript_21




### 22 - Faça como eu fiz na aula

**Faça como eu fiz na aula**


Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- VER OPINIÃO DO INSTRUTOR

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.


- Exemplo:
  - javascript_22



### 23 - O que aprendemos?

**O que aprendemos?**

- O que aprendemos nessa aula:
  - Como o JS sabe quem está sendo instanciado.
  - Pensando na proteção do nosso sistema
  - Lançando erros para o sistema
  - Classes abstratas
  - Métodos abstratos
  - Erros em tempo de execução

- Exemplo:
  - javascript_23



##
### Parte 4 - Sistema interno
##



### 24 - Projeto da Aula anterior

**Projeto da Aula anterior**

- Exemplo:
  - javascript_24


### 25 - Criando funcionarios

**Criando funcionarios**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_25




### 26 - Polimorfismo

**Polimorfismo**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_26


### 27 - Interfaces

**Interfaces**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_27



### 28 - Comportamento indefinido

**Comportamento indefinido**


André está criando um sistema de Contas para o banco ByteBank e está tendo alguns comportamentos inesperados quando executa o seguinte código:

```js
class Conta {
  constructor(titular, numero) {
    this.titular = titular;
    this.numero = numero;
    this._saldo = 0;
  }
}

class ContaCorrente extends Conta {
  constructor(titular, numero) {
    super(titular, numero);
  }
}

const conta = new ContaCorrente("Andre", 1245);
console.log(conta.saldo)
```

Acontece que, na hora que ele executa o código, o que aparece no console é o texto "undefined". Por que isso acontece?

- Alternativa correta

- A: O problema é que André está tentando herdar propriedades de uma classe que não é abstrata.

- B: André não pode ter acesso a uma propriedade que é protegida e por isso o JS retorna undefined quando tentamos acessá-la.

- C: Isso acontece pois a propriedade saldo não está definida dentro do objeto conta e por isso retorna undefined

`Correto, por padrão o JS adiciona como undefined no objeto uma propriedade que tentamos acessar caso ela não exista.`

- Exemplo:
  - javascript_28



### 29 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- VER OPINIÃO DO INSTRUTOR

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - javascript_29


### 30 - O que aprendemos?

**O que aprendemos?**

- O que aprendemos nessa aula:
  - Revisão de herança,boas práticas de código e encapsulamento
  - Polimorfismo
  - Métodos estáticos
  - Maneiras de tratar objetos de diferentes tipos de maneira parecida

- Exemplo:
  - javascript_30


##
### Parte 5 - Interfaces e Duck Type
##

### 31 - Projeto da Aula anterior

**Projeto da Aula anterior**


- Exemplo:
  - javascript_31



### 32 - Verificando propriedades e tipos

**Verificando propriedades e tipos**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Exemplo:
  - javascript_32


### 33 - N objetos e um comportamento

**N objetos e um comportamento**


Ao criarmos o Sistema de Autenticação do bytebank, precisamos autenticar diversas classes com esse sistema. Como isso é possível?

- Selecione 2 alternativas

- A: Isso é possível porque o JS não é uma linguagem fortemente tipada e por isso não depende apenas dos tipos pré-definidos mas sim se eles possuem ou não as propriedades que queremos utilizar.
`Exatamente, assim não estamos limitados aos tipos e sim as interfaces que as classes expões.`

- B: Isso é possível porque estamos sempre herdando todos os objetos a partir de uma classe comum e por isso todos tem o mesmo tipo base.


- C: Através do polimorfismo o JS consegue tratar diferentes objetos de maneiras semelhantes e por isso conseguimos autenticar diferentes tipos de objetos em nosso sistema
`Sim! O Polimorfismo é uma ferramenta muito importante dentro das linguagens de programação, por isso é importante que você saiba como utilizá-lo`

- D: Como cada objeto pode ser de um tipo diferente precisamos criar condicionais explicitas para cada um desses tipos assim garantimos que o código não dará nenhum erro.


- Exemplo:
  - javascript_33



### 34 - Duck Type

**Duck Type**

- Executar no PowerShell/GitBash --

```
node ./index.js
```

- Duck typing
  - Site: https://pt.wikipedia.org/wiki/Duck_typing

- Exemplo:
  - javascript_34


### 35 - Faça como eu fiz na aula

**Faça como eu fiz na aula**

Praticar ajuda bastante no aprendizado de um novo conceito. Assim, é muito importante que você implemente o que foi apresentado nesta aula.

- VER OPINIÃO DO INSTRUTOR

Não deixe de sanar suas dúvidas antes de dar continuidade ao curso. Estaremos te esperando no fórum da Alura caso alguma dúvida surja.

- Exemplo:
  - javascript_35


### 36 - O que aprendemos?

**O que aprendemos?**

- O que aprendemos nessa aula:
  - operador in
  - operador instanceof
  - Como proteger nossos sistemas
  - interfaces padronizadas
  - Ducky Type


- Exemplo:
  - javascript_36


### 37 - Projeto Final do Curso

**Projeto Final do Curso**

- Exemplo:
  - javascript_37


### 38 - Conclusão

**Conclusão**


- Exemplo:
  - javascript_38
