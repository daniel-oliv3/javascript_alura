/* --- JS --- */
import { Cliente } from "./Cliente.js";
// import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

// --- cliente 1 ---
const cliente1 = new Cliente("Daniel Oliveira", 12345678910);

const contaCorrenteDaniel = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

// const conta = new Conta(0, cliente1, 1001);

// --- Operações na conta ---
contaSalario.depositar(100);
contaSalario.sacar(10);


// --- console log(terminal) ---
console.log(contaSalario);


/* --- */