const sequelize = require('sequelize');
const { User, Store, Wishlist, Giftcard } = require('../models');

const userData = require('./userData.json');
const storeData = require('./storeData.json');
const giftcardData = require('./giftcardData.json');
const wishlistData = require('./wishlistData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //seeding user data
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //seeding store data
  for (const store of storeData) {
    await Store.create({
      ...store,
    });
  }

  //seeding wishlist data

  //seeding giftcard data

  process.exit(0);
};

seedDatabase();
