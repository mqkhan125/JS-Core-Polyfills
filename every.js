let arr = [1,2,3,4,5];
// let resultArr = arr.every((curVal, index, array) => {
//     return curVal > 0;
// })

let resultArr = arr.every((curVal, index, arr) => {
  return curVal > 0;
});
console.log(resultArr);


// I create my own every() method
Array.prototype.myOwnEvery = function (callback) {
  if (typeof callback !== "function") {
    throw Error("callback is not defined");
  }

  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false; 
    }
  }
  return true;
};


// check it my myOwnEvery()
let resultArr2 = arr.myOwnEvery((val, index, arr) => {
    return val > 10
})
console.log(resultArr2)