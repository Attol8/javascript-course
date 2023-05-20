// Example 1
// A basic function - a function declaration or statement. 
// It will be hoisted to the top of the scope, meaning it can be called before it is defined and used anywhere in the code.

function SayHello(name) {
    return 'Hello ' + name;
}
console.log(SayHello('Jacopo'));

// A function expression is a function that is assigned to a variable.
// It is not hoisted, meaning it cannot be called before it is defined.

const SayHello2 = function (name) {
    return 'Hello ' + name;
};
console.log(SayHello2('Jacopo'));

// An arrow function is a function expression that uses the arrow syntax (=>) instead of the function keyword.
// It is not hoisted, meaning it cannot be called before it is defined.

const SayHello3 = (name) => {
    return 'Hello ' + name;
};
console.log(SayHello3('Jacopo'));

// If the function body is a single expression, the curly braces and return keyword can be omitted.
// The expression will be returned automatically.

const SayHello4 = (name) => 'Hello ' + name;
console.log(SayHello4('Jacopo'));

// If the function has only one argument, the parentheses can be omitted.

const SayHello5 = name => 'Hello ' + name;
console.log(SayHello5('Jacopo'));


// A higher order function is a function that takes a function as an argument, or returns a function. 
// They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

// Example 2
// A function that takes a function as an argument

function add(x, y) {
    return x + y;
}

// Example 3
// A function that returns a function

function createAdder(x) {
    return function (y) {
        return x + y;
    };
}

function funWrapper(callback) {
    return callback('Callback called');
}
console.log(funWrapper(SayHello));
console.log(funWrapper(m => console.log(m)));