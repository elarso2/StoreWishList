// import models
const User = require('./User');
const Store = require('./Store');
const GiftCard = require('./GiftCard');
const Items = require('./Items');

// User has many Gift Cards
User.hasMany(GiftCard, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
});

// Store has one Gift Card
Store.hasOne(GiftCard, {
  onDelete: 'CASCADE',
  foreignKey: 'giftcard_id',
});

// Store has many Wish List items
Store.hasMany(Items, {
  onDelete: 'CASCADE',
  foreignKey: 'items_id',
});

// Gift Card belongs to one Store
GiftCard.belongsTo(Store, {
  foreignKey: 'giftcard_id',
});

// Items belongs to one Store
Items.belongsTo(Store, {
  foreignKey: 'items_id',
});

module.exports = {
  User,
  Store,
  GiftCard,
  Items,
};
