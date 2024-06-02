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











































