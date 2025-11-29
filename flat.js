let sampleData = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10]]]]]

// Way 1 Easy way
// console.log(sampleData.flat(4))

// Way 2 That was clever move 
// let result = sampleData.toString().split(",").map(Number)
// console.log(result)

// Way 3 This is what I am interested in.
function flatten(array , level = 100) {

    let result = []
   array.forEach(element => {
        if(Array.isArray(element) && level > 0){
         result.push(...flatten(element, - 1))
        } else {
            result.push(element)
        }
    });

    return result;
}

let finalResult = flatten(sampleData, 2);
console.log(finalResult)