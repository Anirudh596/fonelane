const express = require('express');
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser,  updateaUser, otpGenerator} = require('../controllers/userCtrl');
const { create } = require('../models/userModel');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
// router.post('/otp', otpGenerator)

router.get('/all-users', getallUser)
router.get('/:id', getaUser)
router.delete('/:id', deleteaUser)
router.put('/:id', updateaUser)

module.exports = router;