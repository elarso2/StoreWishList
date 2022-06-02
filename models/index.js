// import models
const User = require('./User');
const Store = require('./Store');
const GiftCard = require('./GiftCard');
const WishList = require('./WishList');

// User has many Gift Cards
User.hasMany(GiftCard, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Store has one Gift Card
Store.hasOne(GiftCard, {
  foreignKey: "giftcard_id",
});

// Store has many Wish List items
Store.hasMany(WishList, {
  foreignKey: "wishlist_id",
});

// Gift Card belongs to one Store
GiftCard.belongsTo(Store, {
  foreignKey: "giftcard_id",
});

// WishLists items belongs to one Store
WishList.belongsTo(Store, {
  foreignKey: "wishlist_id"
});

module.exports = {
  User,
  Store,
  GiftCard,
  WishList,
};
