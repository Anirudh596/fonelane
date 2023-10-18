const express = require('express');
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser,  updateaUser, otpGenerator, verifyOtpCtrl, addToCart, cartItems, deleteaItem} = require('../controllers/userCtrl');
const { create } = require('../models/userModel');
const router = express.Router();
const collection = require('../models/userModel')

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
// router.post('/otp', otpGenerator)
router.post('/verify-otp', verifyOtpCtrl)
router.post('/add-to-cart', addToCart)

router.get('/all-users', getallUser);
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/'); // Redirect to a suitable page after logout
    });
  });
router.get('/cart', cartItems);
router.get('/:id', getaUser)
router.delete('/:id', deleteaUser)
router.delete('/cart/:id', deleteaItem)
router.put('/:id', updateaUser)

// router.post('/all-users', )

module.exports = router;