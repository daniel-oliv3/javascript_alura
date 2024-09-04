// APP
import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { debounceTime, takeUntil, partialize, pipe } from "./utils/operations.js";


const p1 = new Promise((resolve, reject) => 
setTimeout(() => resolve('Promise 1 terminou!'), 3000));

// const p2 = new Promise((resolve, reject) => 
    // setTimeout(() => resolve('Promise 2 terminou!'), 1000));

const p2 = new Promise((resolve, reject) => 
    setTimeout(() => reject('Cancelado!'), 1000));

Promise.race([p1, p2])
.then(console.log)
.then(console.log);

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    service
    .sumItens('2143')
    .then(console.log)
    .catch(console.log) 
);


document
.querySelector('#myButton')
.onclick = action;













