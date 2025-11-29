let obj1 = {
    name : "Qasim"
}

let obj2 = {
    name : "javeed"
}

function fun(country){
    console.log(this.name, country)
}

fun.call(obj2, "Pakistan")

Function.prototype.yourCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("yourCall must apply on function");
  }
  context = context || globalThis; 
  context._tempFn = this;
  const result = context._tempFn(...args);
  delete context._tempFn;
  return result;
};

fun.call(obj1, "india")