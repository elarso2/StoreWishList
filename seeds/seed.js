const sequelize = require('../config/connection');
const { User, Store, Items, GiftCard, newStore } = require('../models');

const userData = require('./userData.json');
const storeData = require('./storeData.json');
const giftcardData = require('./giftcardData.json');
const itemsData = require('./itemsData.json');

const newStoreData = require('./newStoreData.json');

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

  //seeding new store test data
  await newStore.bulkCreate(newStoreData);

  for (const store of newStoreData) {
    await newStore.create({
      ...store,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
