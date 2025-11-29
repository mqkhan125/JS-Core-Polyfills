let obj = {
    name : 'qasim'
}

function myFun(city){
    console.log(this.name, city)
}

myFun.apply(obj, ["Lahore"])

Function.prototype.yourApply = function (context,...args) {
  if (typeof this !== "function") {
    throw new Error("yourApply must apply on function");
  }
  if(args === null || args === undefined){
    args = []
  }
  if(args && !Array.isArray(args)){
    throw Error("Argument must be an array")
  }

  context._tempFn = this;
  const result = context._tempFn(...args);
  delete context._tempFn;
  return result;
};

myFun.yourApply(obj,['Karach', 'lahore'])