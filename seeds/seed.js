const sequelize = require('sequelize');
const { User, Store, Items, GiftCard } = require('../models');

const userData = require('./userData.json');
const storeData = require('./storeData.json');
const giftcardData = require('./giftcardData.json');
const wishlistData = require('./itemsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //seeding user data
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //seeding store data
  // for (const store of storeData) {
  //   await Store.create({
  //     ...store,
  //   });
  // }
  await Store;

  //seeding wishlist data
  await Items;

  //seeding giftcard data
  await GiftCard;

  process.exit(0);
};

seedDatabase();
