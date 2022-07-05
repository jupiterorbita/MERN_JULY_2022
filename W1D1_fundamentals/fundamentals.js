// console.log("hi there!");
// form this point on NEVER AGAIN
// use the 'var' keyword
// use let and const

// let x = "hello"; // let acts as an ANCHOR
// console.log(x);
// x = "asdsads";

// var x = 11
// function hi() {
//     x = 22
// }
// hi();
// console.log(x); // ?

// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic(); // ?"hello world"
// console.log(foo); //?"bar"

// --------------
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // 
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); // ?"magnet"

// ------ destructuring -------
const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};

// let name = person.firstName;
// let lname = person.lastName;

const firstName = "Avery";

// const { email, firstName: bobName } = person;
// console.log(email);
// console.log(firstName);
// console.log(person["firstName"]);
// console.log(person.firstName);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const t = animals[1];
// const r = animals[2];
// const x = animals[99];
// console.log(t, r);

const [, pet, , meow] = animals;







// console.log(pet, meow);
// ---- REST / SPREAD ----
const a = [10, 20, 30];
const b = a;
const c = [...a];

a.push(1000); //? 
b.push(1000); //? 

// console.log(a); // ? [10,20,30, 1000]
// console.log(b); // ? [10,20,30, 1000, 1000]
// console.log(c); // ? [10,20,30..?

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const copyPerson = {...person}

// --- arrow functions ---
const hi = function() {
    console.log(this);
}
hi();
console.log("=======");
const hi2 = () => {
    console.log(this);
}
const hi3 = () => console.log("hi");
hi2()
// -------------
const pow1 = function(num) {
    return num * num;
}
const pow2 = num => num * num;
// ------------- ternarary 
const apiData = true;

const ternary = () => {
    // if (apiData) {
    //     return "yes"
    // } else {
    //     return "no"
    // }

    apiData ? "<p>yes</p>" : "<p>loading...</p>";
}