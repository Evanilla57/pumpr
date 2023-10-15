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
    const searchResults = await User.findAll({
      where: {
        email: {
          [Op.like]: `%${email}%`,
        },
      },
    });
    console.log('Search Results:', searchResults);

    res.json(searchResults); // Pass searchResults to the template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
