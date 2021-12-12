/**
 * 节流
 * throttle
 */
function throttle(fn,delay=50){
    if(typeof fn !== 'function'){
        throw new TypeError('need a function arguments')
    }
    let date = Date.now();
    return function(){
        var now = Date.now();
        if(now - date < delay){
            return 
        }else{
            fn.apply(this,arguments);
            prev = Date.now();
        }

    }
}