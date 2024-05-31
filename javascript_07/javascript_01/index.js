/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

let numeroDeContas = 0;

// cliente 1
const cliente1 = new Cliente("Daniel Oliveira", 12345678910); 
const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
contaCorrenteDaniel.cliente = cliente1;
// numeroDeContas++;


// cliente 2
const cliente2 = new Cliente("Priscila Andrade", 78910123456);
const contaCorrentePriscila = new ContaCorrente(1002, cliente2);
contaCorrentePriscila.cliente = cliente2;
// numeroDeContas++;

let valor = 200; 



// Operações entre contas







// --- Console.log ---

// console.log(contaCorrenteDaniel);
// console.log(contaCorrentePriscila);
// console.log(numeroDeContas);
// console.log(contaCorrentePriscila.numeroDeContas);
console.log(ContaCorrente.numeroDeContas);


// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */