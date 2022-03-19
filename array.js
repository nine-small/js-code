// forEach
Array.prototype._forEach = function (callbackFn) {
  // 判断this是否合法
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property '_forEach' of null");
  }
  // 判断callbackFn是否合法
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + "is not a function");
  }
  // 取到执行方法的数组对象和传入的this对象
  let _arr = this;
  let thisArg = arguments[1] || whindow;
  for (let i = 0; i < _arr.length; i++) {
    //执行回调函数
    callbackFn.call(thisArg, _arr[i], i, _arr);
  }
};

// reduce   

Array.prototype._reduce = function (callbackFn) {
  let _arr = this;
  let accumulator = arguments[1];
  let i = 0;
  // 判断是否传入初始值
  if (accumulator === undefined) {
    // 没有初始值的空数组调用reduce会报错
    if (_arr.length === 0) {
      throw new TypeError("_reduce of empty array with no initial value");
    }
    // 初始值赋值成为第一个元素
    accumulator = _arr[i];
    i++;
  }
  for (; i < _arr.length; i++) {
    //计算结果赋值给初始值
    accumulator = callbackFn(accumulator, _arr[i], i, _arr);
  }
  return accumulator;
};

// map
Array.prototype._map = function (callbackFn) {
  // 判断this是否合法
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property '_forEach' of null");
  }
  // 判断callbackFn是否合法
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + " is not a function");
  }
  let _arr = this;
  let thisArg = arguments[1] || window;
  let res = [];
  for (let i = 0; i < _arr.length; i++) {
    // 存储运算结果
    res.push(callbackFn, call(thisArg, _arr[i], i, _arr));
  }
  return res;
};

// filter
Array.prototype._filter = function (callbackFn) {
  let _arr = this;
  let thisArg = arguments[1] || window;
  let res = [];
  for (let i = 0; i < _arr.length; i++) {
    // 回调函数执行为true
    if (callbackFn.call(thisArg, _arr[i], i, _arr)) {
      res.push(_arr[i]);
    }
  }
  return res;
};

// every
Array.prototype._every = function (callbackFn) {
  // 判断this是否合法
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property '_forEach' of null");
  }
  // 判断callbackFn是否合法
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + "is not a function");
  }
  let _arr = this;
  let thisArg = arguments[1] || window;
  // 开始标识符为true
  // 遇到回调范围false，直接返回false
  // 如果循环执行完毕，意味着所有回调返回值为true
  let flag = true;
  for (let i = 0; i < _arr.length; i++) {
    if (!callbackFn.call(thisArg, _arr[i], i, _arr)) {
      return false;
    }
  }
  return flag;
};

// some
Array.prototype._some = function (callbackFn) {
  // 判断this是否合法
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property '_forEach' of null");
  }
  // 判断callbackFn是否合法
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + "is not a function");
  }
  let _arr = this;
  let thisArg = arguments[1] || window;
  // 开始标示值为false
  // 遇到回调范围true，直接返回true
  // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为false
  let flag = false;
  for (let i = 0; i < _arr.length; i++) {
    if (callbackFn.call(thisArg, _arr[i], i, _arr)) {
      return true;
    }
  }
  return flag;
};

Array.prototype._find = function (callbackFn) {
  // 判断this是否合法
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property '_forEach' of null");
  }
  // 判断callbackFn是否合法
  if (Object.prototype.toString.call(callbackFn) !== "[object Function]") {
    throw new TypeError(callbackFn + "is not a function");
  }
  let _arr = this;
  let thisArg = arguments[1] || window;
  // 遇到回调返回true，直接返回该数组元素
  // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为undefined；
  for (let i = 0; i < _arr.length; i++) {
      if(callbackFn.call(thisArg,_arr[i],i,_arr)){
          return _arr[i]
      }
  }
  return undefined;
};


