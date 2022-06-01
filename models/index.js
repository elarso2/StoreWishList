// import models
const Store = require('./Store');
const GiftCard = require('./GiftCard');
const WishList = require('./WishList');

// Store has one Gift Card
Store.belongsTo(GiftCard, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

// Stores have many WishLists items
Store.belongsToMany(WishList, {
  foreignKey: "store_id",
});

// Gift Card belongs to one Store
GiftCard.hasOne(Store, {
  foreignKey: "giftcard_id",
});

// WishLists items belong to one Store
WishList.belongsTo(Store, {
  foreignKey: "wishlist_id"
});

module.exports = {
  Store,
  GiftCard,
  WishList,
};
