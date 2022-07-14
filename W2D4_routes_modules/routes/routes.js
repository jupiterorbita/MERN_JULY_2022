console.log("hello routes");

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = (app) => {
    // READ ALL
    app.get("/api/users", (req, res) => {
        res.json(users)
    })
    
    // READ ONE
    app.get("/api/users/:varIdx", (req, res) => {
        console.log(req.params); // obj that has the key from the URL 
        console.log(req.params.varIdx);
        // alt way - destructure the key
        const { varIdx } = req.params;
        res.json({
            id: req.params.varIdx,
            id_2: varIdx,
            user: users[req.params.varIdx]
        })
    })
    
    // CREATE - POST 
    app.post("/api/users", (req, res) => {
        console.log(req.body);
        users.push(req.body);
        res.json({
            status: "ok",
            objectReceived: req.body,
            id: users.length
        })
    })
}