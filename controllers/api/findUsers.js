const express = require('express');
const router = express.Router();
const { User, Sequelize } = require('../models');
const Op = Sequelize.Op; // Import Sequelize's "Op" operator for query
const withAuth = require('../utils/auth');

router.get('/api/find-users', withAuth, async (req, res) => {
  try {
    const { location } = req.query; // Retrieve the location from query parameters

    // Query users based on location
    const searchResults = await User.findAll({
      where: {
        location: {
          [Op.like]: `%${location}%`, // Use a wildcard for flexible search
        },
      },
    });

    res.render('findUsers', { searchResults }); // Pass searchResults to the template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
