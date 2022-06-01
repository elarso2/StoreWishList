// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection.js');

class Store extends Model { }

Store.init(
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
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "store",
    }
);

module.exports = Store;
