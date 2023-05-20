const obj = {
    foo: 1,
    bar: 2,
    baz: 3
};
const newObj = {
    ...obj,
    foo: 4,
};

console.log(newObj)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);


