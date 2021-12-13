// 函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
function debounce(fn, delay = 50) {
  if (typeof fn !== "function") {
    throw new TypeError("need a function arguments");
  }
  let timer = null;
  return function () {
    let result = undefined;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      result = fn.apply(this, arguments);
    }, delay);
    return result;
  };
}

// function debounce(func,wait,immediate){
//   let timeout,result;
//   let debounced = function(){
//     let context = this;
//     let args = arguments;
//     if(timeout) clearTimeout(timeout)
//     if(immediate){
//       //如果已经执行，不再执行
//       let callNow = !timeout;
//       timeout = setTimeout(()=>{
//           timer = null;
//       },wait)
//       if(callNow) result = func.apply(context,args)
//     }else{
//       timeout = setTimeout(()=>{
//         result = func.apply(context,args)
//       },await)
//     }
//     return result
//   }
//   debounced.cancel = function(){
//     clearTimeout(timeout);
//     timeout = null
//   }
//   return debounced;
// }
