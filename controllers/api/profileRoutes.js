const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.session.user.email);
    const newProfile = await Profile.create({
      ...req.body,
      user_id: req.session.user_id,
      name: req.session.user.email,
    });

    res.status(200).json(newProfile);
  } catch (err) {
    console.error('profile api create', err);
    res.status(400).json(err);
  }
});

module.exports = router;
