const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const verifyUser = require('../middleware/authMiddleware');

const router = express.Router();

// Register
// Register and auto-login
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res
      .cookie('token', token, {
        httpOnly: true,
        // sameSite: 'Lax',
        // secure: false, // change to true if using https
        sameSite: 'None',
        secure: true,
      })
      .json({ msg: 'Registered & Logged in successfully' });
  } catch (err) {
    res.status(400).json({ msg: 'User already exists or error occurred' });
  }
});


// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res
      .cookie('token', token, {
        httpOnly: true,
        // sameSite: 'Lax',
        // secure: false // change to true if using https
        sameSite: 'None',
        secure: true,
      })
      .json({ msg: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token').json({ msg: 'Logged out successfully' });
});

// Protected route
router.get('/dashboard', verifyUser, (req, res) => {
  res.json({ msg: 'Welcome to dashboard!', user: req.user });
});

module.exports = router;
