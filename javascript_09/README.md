##
### JavaScript: construindo páginas dinâmicas
##



<p align="center">
  <img alt="...." src="./src/jscurso.jpg" width="100%">
</p>

##
### Parte 1 - Construindo a página
##


### 1 - Apresentação

**Apresentação**

- O que aprenderemos?
  - HTML e CSS
  - JavaScript
  - Manipulação do DOM
  - Inserção de funcionalidades

- Exemplo:
  - javascript_01


### 2 - Preparando o ambiente

**Preparando o ambiente**

- Exemplo:
  - javascript_02


### 3 - Elementos HTML

**Elementos HTML**

- Figma: https://www.figma.com/design/QtW96TPE97jTKiTbl2ZNcD/JavaScript%3A-construindo-p%C3%A1ginas-din%C3%A2micas-%7C-Checklist?fuid=1034807242317048751

- Exemplo:
  - javascript_03




### 4 - Estilos CSS

**Estilos CSS**

- Exemplo:
  - javascript_04




### 5 - Alinhamento de elementos

**Alinhamento de elementos**

Você está desenvolvendo uma página web para a sua lista de compras semanal. Você deseja que o título da sua lista, "Lista de Compras", esteja alinhado à esquerda, assim como os itens da lista. No entanto, ao aplicar suas estilizações CSS, você percebe que, enquanto os itens da lista estão alinhados à esquerda conforme desejado, o título permanece centralizado.

Após uma análise, você identifica que o título e os itens da lista estão sendo afetados por estilizações herdadas de diferentes elementos, especificamente do elemento com classe "container" e do elemento "L", respectivamente. Você decide então ajustar seu CSS para garantir que tanto o título quanto os itens da lista estejam alinhados à esquerda, seguindo o design proposto no Figma.

Como você deve ajustar seu CSS para garantir que o título "Lista de Compras" e os itens da lista estejam alinhados à esquerda, respeitando a herança de estilos e mantendo a consistência com o design proposto no Figma?

Selecione uma alternativa

- A: Aplicando text-align: left; diretamente no seletor body:
```css
body {
    text-align: left;
}
```

- B: Criando classes específicas para o título e para os itens da lista, aplicando o alinhamento à esquerda em ambas:
```css
.tituloLista, .itemLista {
    text-align: left;
}
```

- C: Utilizando !important para forçar o alinhamento à esquerda no título e nos itens da lista:
```css
h2, li {
    text-align: left !important;
}
```

- AD: Movendo o seletor h2 e hr para dentro do seletor .container:
```css
.container h2, .container hr {
    text-align: left;
}
```

- E: Reestruturando o HTML para que o título e os itens da lista compartilhem o mesmo elemento pai e aplicando o estilo de alinhamento neste elemento:
```css
.ListaCompras {
    text-align: left;
}
```

`Esta abordagem garante que tanto o título quanto os itens da lista estejam alinhados à esquerda de forma consistente, respeitando a estrutura do design proposto e evitando conflitos de herança de estilos.`



- Exemplo:
  - javascript_05



### 6 - Estilos da lista

**Estilos da lista**

- Exemplo:
  - javascript_06