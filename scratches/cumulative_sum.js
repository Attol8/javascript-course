const example_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(example_arr.reduce((partialSum, element) => partialSum + element, 0));

let sum = 0;

for (let i = 0; i < example_arr.length; i++) {
    sum += example_arr[i];
}

console.log(sum);

export function SumArray(array) {
    sum = array.reduce((partialSum, element) => partialSum + element, 0);
    return sum;
}

console.log(SumArray(example_arr));