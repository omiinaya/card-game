'use strict';

module.exports = (sequelize, DataTypes) => {
    const cards = sequelize.define(
        'cards',
        {
            cardName: DataTypes.STRING,
            slug: DataTypes.STRING,
            cardRarity: DataTypes.INTEGER,
            cardImage: DataTypes.STRING,
            cardDesc: DataTypes.TEXT,
            cardType: DataTypes.STRING,
            cardATK: DataTypes.INTEGER,
            cardDEF: DataTypes.INTEGER
        }
    );
    return cards;
};
