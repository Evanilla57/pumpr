const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Profile, User } = require('../models');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    res.render('homepage', {
      user: req.session.user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



//render builder page
router.get('/builder', withAuth, async (req, res) => {
  try {
    res.render('builder');
  } catch (err) {
    res.status(500).json(err);
  }
});

//render profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
