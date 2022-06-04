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
        store_id: {
            type: DataTypes.STRING,
            references: {
                model: "store",
                key: "id",
            },
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
