const express = require('express');
const router = express.Router()

const notes = require('../controller/notesController')

router.get('/', notes.getNotes)
router.post('/',notes.createNote)
router.get('/note/:noteId', notes.findOne);
router.put('/note/:noteId',notes.updateNote)
router.delete('/note/:noteId',notes.deleteNote)

module.exports = router