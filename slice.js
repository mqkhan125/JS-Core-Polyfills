
Array.prototype.mySlice = function(start, end){
  const length = this.length;

  // coding for start element
  if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    let newIdx = length + start;
    start = Math.max(newIdx, 0);
  } else {
    start = Math.min(start, length);
  }

  // coding for end element
  if(end === undefined){
    end = length;
  }
  else if(end < 0){
    let newIdx = length + end;
    end = Math.max(newIdx, 0)
  }
  else{
    end = Math.min(end, length)
  }

  const result = [];

  for(let i = start; i < end; i++){
    let value = this[i]
    result.push(value)
  }
  return result;
}

let arr = ["apple", "orang", "banana", "graph", "mango"];
console.log(arr.slice(0, 3));
console.log(arr.mySlice(0,3))