const express = require('express')
const app = express();
const PORT = 8000;
const DB = "friday_DB";

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

require("./config/mongoose.config")(DB);

// START THE SERVER (at the end of the file)
app.listen(PORT, () => {
    console.log(`>> SERVER UP ON PORT ${PORT} <<`);
})