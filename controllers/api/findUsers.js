const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op; // Import Sequelize's "Op" operator for query
const withAuth = require('../../utils/auth');

router.get('/:email', withAuth, async (req, res) => {
  try {
    const { email } = req.params; // Retrieve the email from query parameters
    console.log(email);
    // Query users based on email
    const result = await User.findOne({
      where: {
        email: {
          [Op.like]: `%${email}%`,
        },
      },
    });
    if (!result) {
      res.status(404).json({ message: 'no user found with this email' });
    }
    const user = result.get({ plain: true} );
    console.log('user', user);

    res.json(user); // Pass result to the template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
