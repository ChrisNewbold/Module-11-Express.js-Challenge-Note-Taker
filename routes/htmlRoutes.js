
const path = require("path");
const htmlRouter = require('express').Router();
// this serves the notes.html when the user goes to the /notes path
htmlRouter.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html')))
// this is a wild card that allows you to use any url path and will revert you back to the .index.html page
htmlRouter.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html')))

module.exports = htmlRouter;