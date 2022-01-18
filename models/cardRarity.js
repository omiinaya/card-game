'use strict';

module.exports = (sequelize, DataTypes) => {
    const cardRarity = sequelize.define(
        'cardRarity',
        {
            rarityName: DataTypes.STRING,
        },
        {
            timestamps: false
        }
    );
    return cardRarity;
};
