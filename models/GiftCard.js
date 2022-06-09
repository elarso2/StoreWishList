const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class GiftCard extends Model {}

GiftCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'store',
        key: 'id',
      },
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'giftcard',
  }
);

module.exports = GiftCard;
