// .................................................
// ......... Operadores Lógicos encadeados .........
// .................................................

console.log(`Operadores Lógicos encadeados`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de Janeiro`,
    'Amazonas',
    'Tocantins'
);

console.log(`Destinos Possiveis`);
// console.log(listaDeDestinos);


const idadeComprador = 15;
// const idadeComprador = 21;
// const estaAcompanhada = false;
const estaAcompanhada = true;
const temPassagemComprada = true;

// Ou 
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Comprador maior de idade'); //true
    listaDeDestinos.splice(1,1);
} else {
    console.log('Menor de idade, não pode comprar'); //false 
}


// And
console.log('Embarque: \n\n');

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa Viagem');
}else {
    console.log('Você não pode embarcar');
}


// 







/**/