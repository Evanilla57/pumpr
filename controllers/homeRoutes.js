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

// Add the /find-users route here
router.get('/find-users', withAuth, async (req, res) => {
  try {
    res.render('findUsers');
  } catch (err) {
    res.status(500).json(err);
  }
});

//render builder page
router.get('/builder', withAuth, async (req, res) => {
  try {
    res.render('builder', {
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//render individual user
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params.name);
    const profileData = await Profile.findOne({
      where: {
        user_id: req.params.id,
      },
      include: [
        {
          model: User
        }
      ]
    });
    const profile = profileData.get({ plain: true });
    console.log(profile);
    res.render('profile', { p: profile });
  } catch (err) {
    console.error('profile home get', err);
    res.status(500).json(err);
  }
});

//render profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userName = req.session.user;
    console.log('username', userName);
    const profileData = await Profile.findAll({
      where: {
        name: userName.name,
      }
    });
    console.log('profileData', profileData);
    const ourProfile = profileData.map(p => p.get({ plain: true }));
    console.log('ourProfile', ourProfile);
    res.render('profile', { p: ourProfile[0], user: req.session.user, logged_in: req.session.logged_in });
  } catch (err) {
    console.error('profile home get', err);
    res.status(500).json(err);
  }
});
/**
 * /profile/:name
 * 
 * FETCH /profile/evan%griggs
 */


module.exports = router;
