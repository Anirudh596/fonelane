const express = require('express');
const createUser = require('../controllers/userCtrl');
const { create } = require('../models/userModel');
const router = express.Router()

router.post('/register', createUser)

module.exports = router;