export const partialize = (fn, ...args) => 
    fn.bind(null, ...args);