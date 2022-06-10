const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class newStore extends Model {}

newStore.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gc_balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'newstore',
  }
);

module.exports = newStore;
