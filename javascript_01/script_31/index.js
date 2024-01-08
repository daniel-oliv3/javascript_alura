// .........................
// ......... While .........
// .........................

console.log(`While`);
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
let temPassagemComprada = false;
const destino = "Amazonas";

// Ou 
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Comprador maior de idade'); //true
    listaDeDestinos.splice(1,1);
    temPassagemComprada = true;
} else {
    console.log('Menor de idade, não pode comprar'); //false 
    temPassagemComprada = false;
}


// And
console.log('Embarque: \n\n');

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa Viagem');
}else {
    console.log('Você não pode embarcar');
}


// verificar se o destino existe na lista
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while (contador < 4) {
    if (listaDeDestinos[contador] == destino) {
        console.log('Destino existe');
        break;
    }else {
        console.log('Destino não existe');
    }
    contador += 1;
}





/**/