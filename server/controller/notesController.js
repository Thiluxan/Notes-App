const Note = require('../models/note')
const ObjectId = require('mongodb').ObjectID()

exports.createNote = async (req,res) => {
    const newNote = Note({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    })

    await newNote.save()
    .then((data) => res.send(data))
    .catch(err => {
        console.log(err)
        res.status(500).send({
            message:'Unable to add note' || err.message
        })
    })

}

exports.getNotes = async(req,res) => {
    await Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
}

exports.findOne = async (req, res) => {
    await Note.findById(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(note);
    }).catch(err => {
        console.log(err)
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
}

exports.updateNote = async (req,res) => {
    await Note.findByIdAndUpdate(req.params.noteId,{
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        createdAt: req.body.createdAt
    },{ runValidators: true })
    .then(() => res.send({message:'Successfully updated'}))
    .catch(err => {
        console.log(err)
        res.status(404).send({message:'Unable to update the book'})
    })
}

exports.deleteNote = async(req,res) => {
    await Note.findByIdAndDelete(req.params.noteId)
    .then(() => {
        res.send({message:'Successfully deleted the note'})
    })
    .catch(err => {
        console.log(err)
        res.status(404).send({message:'Unable to delete the note'})
    })
}