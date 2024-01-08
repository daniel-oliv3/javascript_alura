// ...................................
// ....... Removendo elementos .......
// ...................................


//criando uma lista [] Array
const estados = new Array(
    'Amazonas', 
    'Rio de Janeiro', 
    'São Paulo',
    'Salvador',
    'Minas Gerais',
    'Tocantins'
);

console.log('Destinos Possíveis');
console.log(estados);
// console.log(estados[0]); //indice 0
// console.log(estados[1]);
// console.log(estados[2]);

// adicionando um elemento na lista
estados.push('Brasilia');

console.log(estados);

// remover um elemento da lista
estados.splice(2, 1); // (posição a ser deletada(indice), quantidade de elementos a serem deletados)

console.log(estados);


// exibir um elemento específico da lista
console.log(estados[0]); 
console.log(estados[1]);
console.log(estados[2]);
console.log(estados[3]); //indice 3

console.log(estados[0], estados[3]); 

/**/