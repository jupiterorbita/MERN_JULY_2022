const express = require('express');
const app = express();
// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));

// -- ROUTES ---
// require("./routes/routes")(app)
const routes = require("./routes/routes")
routes(app)


// start the server
// -- ALWAYS at the end of the file
app.listen(8000, () => {
    console.log("server up on port 8000 👍👍👍👍👍");
})