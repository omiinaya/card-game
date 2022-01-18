'use strict';

module.exports = (sequelize, DataTypes) => {
    const cardRarities = sequelize.define(
        'cardRarities',
        {
            rarityName: DataTypes.STRING,
        },
        {
            timestamps: false
        }
    );
    return cardRarities;
};
