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



