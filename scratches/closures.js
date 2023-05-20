// Closures are functions that refer to independent (free) variables. 
// In other words, the function defined in the closure 'remembers' the environment in which it was created.
// They can be used to reference a specific scope, or to encapsulate data and methods.

function outer() {
    let name = 'Jacopo';
    return function inner() {
        return name = name + ' is awesome';
    };
    return inner;
}

const incrementAwesome = outer();
console.log(incrementAwesome());
console.log(incrementAwesome());

function encapsulatedState(x) {
    let state = 10;
    return function () {
        state += x;
        return state;
    }
}

const increment = encapsulatedState(2);
console.log(increment());
console.log(increment());
console.log(increment());

