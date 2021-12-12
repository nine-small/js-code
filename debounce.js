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
