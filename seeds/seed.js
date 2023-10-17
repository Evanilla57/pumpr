const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const userData = require('./userData.json');
const profileData = require('./profileData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Profile.bulkCreate(profileData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
