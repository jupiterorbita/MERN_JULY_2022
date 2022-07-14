// bring in express
const express = require('express')
// invoke express
const app = express();
const PORT = 1337;

// --- MIDDLEWARE ---
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- ROUTING ----
app.get("/api", (requestObj, responseObj) => {
    console.log("hello from /api");
    responseObj.send("hello from server")
})

const myCallbackFunction = (req, res) => {
    res.json({ msg: "this is another message", status: 200 })
}

app.get("/api/hello", myCallbackFunction)

// app.get("/api/hello", (req, res)=> {
//     res.json({message: "ok"})
// })

// ------ example ---------
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) => {
    // res.json( {users, status: 200, message: "ok"} );
    res.json(users);
});

app.get("/api/users/:idx", (req, res) => {
    console.log(req.params.idx);
    console.log(users[req.params.idx]);
    res.json(users[req.params.idx])
})

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
})


// start a server
// this should always be at the END of our server.js file
app.listen(PORT, () => console.log(`>> SERVER started on port ${PORT} and is listening for REQuests to RESpond to`))