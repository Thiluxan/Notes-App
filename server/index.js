const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken')

const app = express()

const notesRoute = require('./routes/notesRoute')
const userRoute = require('./routes/userRoute')
const userController = require('./controller/userController')

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization) {
      jwt.verify(req.headers.authorization, 'RESTFULAPIs', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } 
    else {
      req.user = undefined;
      next();
    }
});

const CONNECTION_URL = ""

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => console.log("Connected to the Database"))
        .catch(err => console.log(err))

mongoose.set('useFindAndModify',false)

app.get('/',(req,res) => {
    res.send('Welcome to my notes application')
})

app.use('/notes',userController.loginRequired, notesRoute)
app.use('/auth',userRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log("Server started on ",PORT))