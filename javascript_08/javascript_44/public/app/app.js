// APP
import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { debounceTime, takeUntil, partialize, pipe } from "./utils/operations.js";

// const doTake = takeUntil(2, () => console.log('Olá Mundo!'));
// doTake();
// doTake();
// doTake();

// const partializedTakeUntill = partialize(takeUntil, 2);
// const doTake = partializedTakeUntill(() => console.log('Olá!'));
// doTake();
// doTake();
// doTake();

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

// const action = debounceTime(500, 
//     takeUntil(3, () =>
//         service
//         .sumItens('2143')
//         .then(console.log)
//         .catch(console.log)
//     )
// );

document
.querySelector('#myButton')
.onclick = action;













