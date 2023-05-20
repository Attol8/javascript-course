const example_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach
// The forEach() method executes a provided function once for each array element.

function addTwo(element) {
    return element + 2;
}

let example_array2 = [];
example_array.forEach(element => {
    example_array2.push(addTwo(element));
});
console.log(example_array2);

// compare this to a standard for loop
example_array2 = [];
for (let i = 0; i < example_array.length; i++) {
    example_array2.push(addTwo(example_array[i]));
}
console.log(example_array2);

// map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let example_array3 = example_array.map(addTwo);
console.log(example_array2);

// filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let example_array4 = example_array.filter(element => element % 2 === 0);
console.log(example_array4);

// find
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
let example_array5 = example_array.find(element => element % 2 === 0);
console.log(example_array5);

// findIndex
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
let example_array6 = example_array.findIndex(element => element % 2 === 0);
console.log(example_array6);

// reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let example_array7 = example_array.reduce((partialSum, element) => partialSum + element, initialValue = 0);
console.log(example_array7);