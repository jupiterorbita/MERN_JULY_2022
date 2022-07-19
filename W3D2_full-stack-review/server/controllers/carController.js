// controller is for CRUD
// import the model to use queries 
const Car = require("../models/car");

module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Car.find()
            .then( (cars) => {
                // 🆘 what we send back to the client (React) is what we will receive in axios's .then(res => res.data)
                console.log(cars);
                // return res.json({all_notes: notes, status: "ok"})
                // if we return just the object, in this case, it's an array
                return res.json(cars)
            })
            .catch( err => res.json(err))
    },

    // CREATE
    create: (req, res) => {
        // pass in body data
        console.log(req.body); // if it's undefined check middleware
        Car.create(req.body)
            .then( newCar => {
                console.log("DB Success created new Note");
                return res.json(newCar)
            })
            .catch(err => {
                console.log("DB ERROR crating note");
                // 🆘 return to the client a 400 status to trigger React's .catch()
                return res.json(err)
            })
    },

    // READ ONE
    findOne: (req, res) => {
        console.log(req.params);
        // Car.findOne({_id : req.params.id})
        Car.findById(req.params.id)
            .then(car => res.json(car))
            .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id); // the id
        console.log("UPDATE OBJ:", req.body); // the {object}
        // Car.findOneAndUpdate({_id: req.req.params.id})
        Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedCar => res.json(updatedCar))
            .catch(err => res.json(err))
    },

    // DELETE
    delete: (req, res) => {
        console.log(req.params.id);
        // Car.remove???(req.params.id)
        Car.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}