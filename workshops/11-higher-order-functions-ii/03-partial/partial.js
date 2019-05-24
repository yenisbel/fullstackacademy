// YOUR CODE BELOW
let partial = function(fn,arga) {
    return function(argb) {
      return fn(arga, argb);
    }
  }