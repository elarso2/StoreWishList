const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Items extends Model { }

Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "item",
    }
);

module.exports = Items;
