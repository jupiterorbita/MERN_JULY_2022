//1. import mongoose here to config db
const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect("mongodb://localhost/"+ DB)
        .then(() => console.log(`🎈 ${DB} DB connected`))
        .catch(err => console.log(`ERROR CONNECTING to ${DB}`, err))
}
