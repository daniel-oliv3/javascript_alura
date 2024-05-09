/* ------- Objeto ------- */
const listaDeCompras = {
    compra1: "Arroz",
    compra2: "Feijão",
    compra3: "Biscoito"
};


/* ------- Deletando chave e valor de objetos ------- */
delete listaDeCompras.compra2;    
console.log(listaDeCompras); // O console irá retornar: {compra1: 'Arroz', compra3: 'Biscoito'}



/* ------- Editando o valor de uma chave ------- */
listaDeCompras.compra3 = "Bolacha";
console.log(listaDeCompras.compra3); // O console irá retornar: Bolacha










/**/