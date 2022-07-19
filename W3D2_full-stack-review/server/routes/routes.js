// import controller
const Car = require("../controllers/carController")

module.exports = (app) => {
    app.get("/api/cars", Car.findAll)
    app.post("/api/cars", Car.create)
    app.get("/api/cars/:id", Car.findOne)
    app.put("/api/cars/:id", Car.update)
    app.delete("/api/cars/:id", Car.delete)
}