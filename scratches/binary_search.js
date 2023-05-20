const example_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// find the index of 6 with a binary search

let target = 6;

export function binarySearch(array, target) {
    // sort the array
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (array[middle] !== target && left <= right) {
        if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }

    if (array[middle] === target) {
        return middle;
    }
    return -1;
}

console.log(binarySearch(example_array, target));
console.log(example_array.indexOf(target));