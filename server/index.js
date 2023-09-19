const express = require('express');
const dotenv = require('dotenv').config();
const woroutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const PORT = process.env.PORT 

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//route handler
app.use('/api/workouts', woroutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(PORT, () => {
        console.log(`Connected to the database & listening on Port: ${PORT}`);
})
    })
    .catch((error) => {
        console.log(error);
    })


