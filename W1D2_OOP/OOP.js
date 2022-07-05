const myBook = {
    title: "my cool JS notes",
    pages: 9001,
    author: "Steven King",
    publishYear: 2022
}
// Class - blueprint
// create a class to instantiate objects
class Book{
    // create defaults
    constructor(title, pages, author, year) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.publishYear = year;
    }
}
const bigBook = new Book("Algos", 100, "Cesar", 2022);
// console.log(bigBook.author); 
// destructure
const {author} = bigBook;
// console.log(author);

const book2 = new Book(); // undefined attributes
// console.log(bigBook);
// console.log(book2);

class Vehicle{
    constructor(year, miles, make, model, hp) {
        // ATTRIBUTES
        this.year = year;
        this.miles = miles;
        this.make = make;
        this.model = model;
        this.hp = hp;
    }

    // METHODS
    // aka functions in a class
    drive() {
        this.miles += 10;
        console.log(this.model + " has driven " + this.miles + " miles");
        return this;
    }

    honk(target) {
        console.log("BEEEEP ", this.make, "honked at", target.make);
    }


}
const newCar = new Vehicle(2022, 23, "Ford", "F-150", 350);
const honda = new Vehicle(2015, 9001, "Honda", "Civic", 110);

// console.log(honda);
// honda.drive().drive().drive();
// console.log(honda);

// --- inheritance ---
class Tesla extends Vehicle{
    constructor(miles, model, hp, year, autopilot) {
        super(year, miles, "Tesla", model, hp) 
        this.autopilot = autopilot;
    }
}
const y = new Tesla(9010, "model Y", 500, 2022, true);
y.drive();
honda.honk(y);