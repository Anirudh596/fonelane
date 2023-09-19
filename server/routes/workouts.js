const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
} = require('../controllers/workoutController')


const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})


//Get a single Workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single Workout'})
})


//POST a new workout 
router.post('/', createWorkout  )

//DELETE a workout 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a Workout'})
})


//UPDATE a workout 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new Workout'})
})



module.exports = router