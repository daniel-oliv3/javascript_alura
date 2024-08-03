if(!Array.prototype.$flatMap){
    Array.prototype.$flatMap = function(cb){
        return this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), []);
    };
}