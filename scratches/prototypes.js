const animal = {
    eats: true,
    dna: 123,
    legs: { front: 2, back: 2 },
    sleep() {
        console.log('zzz');
    },
    walk() {
        console.log('The animal is walking');
    }
};

const dog = {
    __proto__: animal,
    name: 'doggo',
    age: 13,
    barks: true,
};

let { name: DogName, age: DogAge, barks: IsDogBarks } = dog;

console.log(DogName, DogAge, IsDogBarks);
