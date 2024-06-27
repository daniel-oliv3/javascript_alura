/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Daniel", 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Victor", 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Priscila", "78945612379", "456");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

// --- console log(terminal) ---
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


/* --- */