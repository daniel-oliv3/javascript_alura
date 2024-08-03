export const partialize = (fn, ...args) => 
    fn.bind(null, ...args);


export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), value);




