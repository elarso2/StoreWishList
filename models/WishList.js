// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

class WishList extends Model { }

WishList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "wishlist",
    }
);

module.exports = WishList;
