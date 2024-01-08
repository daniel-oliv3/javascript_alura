// ..................................
// ......... Ifs encadeados .........
// ..................................

console.log(`Ifs encadeados`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`, 
    `Rio de Janeiro`,
    'Amazonas',
    'Tocantins'
);

console.log(`Destinos Possiveis`);
console.log(listaDeDestinos);


//... Condicionais (IF ELSE)

const idadeComprador = 15;
// const idadeComprador = 21;
// const estaAcompanhada = false;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade'); //true
    listaDeDestinos.splice(1,1);
} else {
    // A pessoa é menor de idade
    if(estaAcompanhada){
        console.log('Comprador maior de idade');
        listaDeDestinos.splice(3,1); //removendo o item
    }else {
        console.log('Menor de idade!');
    }
}



// .... Operadores Logico
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);














/**/