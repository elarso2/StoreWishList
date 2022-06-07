const sequelize = require('sequelize');
const { User, Store, Items, GiftCard } = require('../models');

const userData = require('./userData.json');
const storeData = require('./storeData.json');
const giftcardData = require('./giftcardData.json');
const itemsData = require('./itemsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //seeding user data
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //seeding store data
  await Store.bulkCreate(storeData);

  //seeding wishlist data
  await Items.bulkCreate(itemsData);

  //seeding giftcard data
  await GiftCard.bulkCreate(giftcardData);

  process.exit(0);
};

seedDatabase();
