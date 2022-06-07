// import models
const User = require('./User');
const Store = require('./Store');
const GiftCard = require('./GiftCard');
const Items = require('./Items');

// User has many Gift Cards
User.hasMany(GiftCard, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Store has one Gift Card
Store.hasOne(GiftCard, {
  foreignKey: "giftcard_id",
  onDelete: 'CASCADE'
});

// Store has many Wish List items
Store.hasMany(Items, {
  foreignKey: "items_id",
  onDelete: 'CASCADE'
});

// Gift Card belongs to one Store
GiftCard.belongsTo(Store, {
  foreignKey: "giftcard_id",
});

// Items belongs to one Store
Items.belongsTo(Store, {
  foreignKey: "items_id"
});

module.exports = {
  User,
  Store,
  GiftCard,
  Items,
};
