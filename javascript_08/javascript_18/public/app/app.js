import { handleStatus, log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';

document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(notas => notas
        .$flatMap(nota => nota.itens)
        .filter(item => item.codigo == '2143')
        .reduce((total, item) => total + item.valor, 0)
    )
    .then(console.log)
    .catch(console.log);













