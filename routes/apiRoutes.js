const uniqid = require('uniqid');
const router = require("express").Router();

const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils')

// reads from the db file then passes it from JSON and returns the data to the UI
router.get("/notes", (req, res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)))
});
// this creates a new note by passing the data as an object into the db file
router.post("/notes", (req, res) => {
    const note = {
        // this creates a unique id for the note installed from https://www.npmjs.com/package/uniqid
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    readAndAppend(note, 'db/db.json').then(() => res.json(note));
});
// this gets the id that the user wants to delete from req.perams.id
// reads the current notes from the db file 
// removes the note with the targeted id
// saves the remaining notes back to the db.json file
router.delete("/notes/:id", (req, res) => {
    readFromFile('db/db.json')
        .then((data) => {
            const notes = JSON.parse(data)
            const notesWithoutDeletedNote = notes.filter(note => note.id !== req.params.id)
            writeToFile('db/db.json', notesWithoutDeletedNote).then(() => res.json())
        })
});

module.exports = router;
