const obj1 = {
    food: "Pizza",
    calories: 9001,
    // keys: function() {
    //     console.log("hello");
    // }
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};

// linking objects
obj1.__proto__=obj2;

// hasOwnProperty*()

// extract keys of an obj 
// Object.keys(obj1.)
// return an ARRAY of the keys
// console.log(Object.keys(obj1));

// extract values of an object
// returns an ARRAY of the values
// console.log(Object.values(obj1));

// extract [key, value] of an object
console.log(Object.entries(obj1));



for (aKey in obj1) {
    console.log(aKey, obj1[aKey]);
}

// console.log(obj1);

