// APP
import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";

const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);


console.log(ehDivisivel(2, 10)); //true
console.log(ehDivisivel(2, 5)); //false
console.log(ehDivisivel(2, 12)); //true

console.log("----------------------------------------");

console.log(ehDivisivelPorDois(10)); //true
console.log(ehDivisivelPorDois(5)); //false
console.log(ehDivisivelPorDois(12)); //true

console.log("----------------------------------------");

const fn = ehDivisivel.bind(null, 2, 5);
console.log(fn());

document
.querySelector('#myButton')
.onclick = () =>
    service
    .sumItens('2143')
    .then(console.log)
    .catch(console.log);













