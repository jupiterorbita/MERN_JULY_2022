// Functional programming
// https://login.codingdojo.com/m/130/6947/50208
// .map() .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const coolAnimals = animals.map( function(everyOneElement) {
    // return everyOneElement + " is cool";
    return `${everyOneElement} is cool`;
});

const coolAnimalsArrow = animals.map( (everyOneElement, idx) => {
    return `${idx+1} - ${everyOneElement} is cool`;
} );

const coolAnimalsShort = animals.map( everyOneAnimal => `${everyOneAnimal} is cool`);
// console.log(animals);
// console.log(coolAnimalsArrow);
// console.log(animals);

// ---- filter ----
const filteredAnimals = animals.filter( (elem) => {
    console.log(elem);
    if (elem.length <= 5) {
        return true;
    } else {
        return false;
    }
});
const filteredAnimalsFunctional = animals.filter( (animal) => animal.length <= 5);

console.log(filteredAnimalsFunctional);
const whatever = animals.filter( (animal) => {
    if (animal.includes("o")) {
        return true
    } else {
        return false
    }
}).map( (animal) => {
    return `${animal} contains an 'o'`;
});
// [ 'leopard', 'monkey', 'lion' ].map()
console.log(whatever);
// combine filter and map

const newArray = animals.filter( animal => animal.includes("o")).map( a => a + " conatains an 'o'");
console.log(newArray);

// -------------------
const people = [
    {name: "Bob", age: 30 },
    {name: "Mary", age: 31},
    {name: "Sue", age: 28},
    {name: "George", age: 38}
];
const peopleOver30 = people.filter( (everyPerson, index) => {
    if (everyPerson.age >= 30) {
        return true;
    } else {
        return false;
    }
});
const functionalPeopleOver30 = people.filter( (person) => person.age >= 30);
console.log(functionalPeopleOver30);