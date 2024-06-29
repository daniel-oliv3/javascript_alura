import { handleStatus } from "./utils/promise-helpers.js";

document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    // .then(notas => notas.map(nota => nota.itens))
    .then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
    .then(itens => {
        console.log(itens);
        return itens;
    })
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))  
    .then(console.log)
    .catch(console.log);













