const express = require("express");
const path = require('path');
const PORT = 3001;
const app = express();
// this tells express to serve html from this folder so it knows where to serve the front end from
app.use(express.static('public'));
const route = require("./routes/index.js")

// telling express to use the definisitons in the route folder
app.use(route)
// starts the port on 3001
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
