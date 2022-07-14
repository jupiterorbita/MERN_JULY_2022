const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();

console.log("\n---- ", faker.image.cats() + "\n");

app.get("/api/cats", (req, res) => {
    const meow = faker.image.cats()
    res.send(`<img src=${meow}>`)
})

app.listen(8000, () => {
    console.log('server up on port 8000');
})