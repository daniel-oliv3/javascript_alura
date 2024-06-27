/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Daniel", 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Victor", 12345678901);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
// const estaLogado1 = SistemaAutenticacao.login(gerente, "123");



// --- console log(terminal) ---
console.log(estaLogado);


/* --- */