/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// cliente 1
const cliente1 = new Cliente("Daniel Oliveira", 12345678910); 
const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
contaCorrenteDaniel.cliente = cliente1;



// cliente 2
const cliente2 = new Cliente("Priscila Andrade", 78910123456);
const contaCorrentePriscila = new ContaCorrente(1002, cliente2);
contaCorrentePriscila.cliente = cliente2;


let valor = 200; 


// Operações entre contas
// contaCorrenteDaniel.depositar(100);
// const valorSacado = contaCorrenteDaniel.sacar(50);
// contaCorrenteDaniel.transferir(valor, contaCorrentePriscila);


// contaCorrentePriscila.depositar(1350);
// contaCorrentePriscila.sacar(100);
// contaCorrentePriscila.transferir(1000, contaCorrenteDaniel);





// --- Console.log ---

console.log(contaCorrenteDaniel);

console.log(contaCorrentePriscila);
// console.log("Valor: ", valor);

// console.log(contaCorrentePriscila.cliente);
// console.log(contaCorrentePriscila.saldo);

// console.log(cliente2._cpf);





// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */