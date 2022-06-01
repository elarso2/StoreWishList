// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

class GiftCard extends Model { }

GiftCard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        giftcard_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "giftcard",
    }
);

module.exports = GiftCard;
