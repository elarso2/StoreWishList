// import models
const Store = require('./Store');
const GiftCard = require('./GiftCard');
const WishList = require('./WishList');

// Store has one Gift Card
Store.belongsTo(GiftCard, {
  foreignKey: "store_id",
  onDelete: "CASCADE",
});

// Gift Card has one Store
GiftCard.belongsTo(Store, {
  foreignKey: "giftcard_id",
});

// Stores belongToMany WishLists (through StoreWishList)
Store.belongsToMany(WishList, {
  through: {
    model: StoreWishList,
    unique: false,
  },
  as: "store_tags",
  foreignKey: "store_id",
});

// WishLists belongToMany Stores (through StoreWishList)
WishList.belongsTo(Store, {
  through: {
    model: StoreTag,
    unique: false,
  },
  as: "stores_tagged",
  foreignKey: "tag_id"
});

module.exports = {
  Store,
  GiftCard,
  WishList,
};
